const track = document.querySelector('.carousel-track');
if (!track) throw new Error('Missing .carousel-track');

let isPointerDown = false;
let startX = 0;
let startScroll = 0;
let rafId = null;
let autoplaySpeed = 1; // px per RAF frame
let isAutoplaying = true;

// Collect the initial original items (the block we will replicate)
const originalItems = Array.from(track.children);

// --- Utility functions ---
const getGapWidth = () => {
  const cs = getComputedStyle(track);
  const gapStr = cs.columnGap || cs.gap || cs.gridColumnGap || '0px';
  return parseFloat(gapStr) || 0;
};

const computeOriginalBlockWidth = (items) => {
  const gap = getGapWidth();
  return items.reduce((sum, el) => {
    const w = el.getBoundingClientRect().width;
    return sum + w + gap;
  }, 0);
};

// Wait for images to load but with a timeout so we never hang forever
const waitForImagesToLoad = (items, timeoutMs = 1200) => {
  const images = items.flatMap(item => Array.from(item.querySelectorAll('img')));
  const promises = images.map(img => {
    if (img.complete) return Promise.resolve();
    return new Promise(res => {
      const onDone = () => res();
      img.addEventListener('load', onDone, { once: true });
      img.addEventListener('error', onDone, { once: true });
    });
  });

  if (promises.length === 0) return Promise.resolve();

  const all = Promise.all(promises);
  const timeout = new Promise(res => setTimeout(res, timeoutMs));
  return Promise.race([all, timeout]);
};

// Prevent native dragging inside the track (Firefox + clones safe)
track.addEventListener('dragstart', e => e.preventDefault());

// Ensure images aren't draggable (helps many browsers)
const disableImageDraggable = () => {
  track.querySelectorAll('img').forEach(img => {
    try { img.draggable = false; } catch (err) {}
    img.addEventListener('dragstart', e => e.preventDefault());
  });
};

// append clones n times (append whole original block n times)
const appendClones = (items, n) => {
  for (let i = 0; i < n; i++) {
    items.forEach(node => track.appendChild(node.cloneNode(true)));
  }
};

// Guarded ensureCopies: clone until we have enough width to scroll (but with caps)
const ensureCopies = (originalWidth) => {
  const viewport = track.clientWidth || document.documentElement.clientWidth;
  const minCopiesByWidth = Math.ceil((viewport * 3) / Math.max(originalWidth, 1));
  const minCopies = Math.max(3, minCopiesByWidth);

  const currentCopiesApprox = Math.max(1, Math.round(track.scrollWidth / Math.max(originalWidth, 1)));

  if (currentCopiesApprox >= minCopies) return currentCopiesApprox;

  const MAX_ADDITIONAL_BLOCKS = 20;
  const toAdd = Math.min(minCopies - currentCopiesApprox, MAX_ADDITIONAL_BLOCKS);

  if (toAdd > 0) {
    appendClones(originalItems, toAdd);
    disableImageDraggable();
  }
  return Math.max(1, currentCopiesApprox + toAdd);
};

// Set scrollLeft without smooth behavior (instant)
const setScrollLeftInstant = (x) => {
  const prev = track.style.scrollBehavior;
  track.style.scrollBehavior = 'auto';
  track.scrollLeft = x;
  track.style.scrollBehavior = prev;
};

// Seamless wrap: keep the visible window inside the "center" copy. Guarded against infinite loops
const wrapSeamless = (originalBlockWidth, copiesCount) => {
  if (!originalBlockWidth || copiesCount < 3) return 0;

  const centerIndex = Math.floor(copiesCount / 2);

  const leftThreshold = originalBlockWidth * (centerIndex - 1);
  const rightThreshold = originalBlockWidth * (centerIndex + 1);

  const cur = track.scrollLeft;

  // If inside the window, nothing to do
  if (cur > leftThreshold && cur < rightThreshold) return 0;

  // If on or beyond the right side, compute how many blocks to subtract
  if (cur >= rightThreshold) {
    // number of blocks beyond the rightThreshold
    const overflow = cur - rightThreshold;
    // we must move back at least one block; compute how many whole blocks to subtract
    const blocks = Math.floor(overflow / originalBlockWidth) + 1;
    const delta = blocks * originalBlockWidth;
    const target = cur - delta;

    // commit in one shot
    setScrollLeftInstant(target);
    return blocks; // positive = subtracted that many blocks
  }

  // If on or beyond the left side, compute how many blocks to add
  if (cur <= leftThreshold) {
    const under = leftThreshold - cur;
    const blocks = Math.floor(under / originalBlockWidth) + 1;
    const delta = blocks * originalBlockWidth;
    const target = cur + delta;
    setScrollLeftInstant(target);
    return -blocks; // negative = added that many blocks
  }

  return 0;
};

// --- Main initialization ---
(async () => {
  
  await waitForImagesToLoad(originalItems, 1500);
  disableImageDraggable();

  let originalWidth = computeOriginalBlockWidth(originalItems) || 1;
  let copiesCount = ensureCopies(originalWidth);

  copiesCount = Math.max(1, Math.round(track.scrollWidth / Math.max(originalWidth, 1)));
  const centerIndex = Math.floor(copiesCount / 2);
  setScrollLeftInstant(originalWidth * centerIndex);

  // --- pointer handlers ---
  track.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    isPointerDown = true;
    isAutoplaying = false;
    track.classList.add('dragging');
    startX = e.clientX;
    startScroll = track.scrollLeft;
    try { track.setPointerCapture(e.pointerId); } catch (err) {}
  });

  track.addEventListener('pointermove', (e) => {
    if (!isPointerDown) return;
    e.preventDefault();

    const clientX = e.clientX;
    const dx = clientX - startX;

    // Move according to the drag
    setScrollLeftInstant(startScroll - dx);

    // call the new wrap function which returns number of wrapped blocks
    const wrapsDone = wrapSeamless(originalWidth, copiesCount);

    // If a wrap happened while the pointer is down, re-zero the drag baseline
    if (wrapsDone !== 0 && isPointerDown) {
      // reset the reference positions so dx is relative to the current finger pos
      startScroll = track.scrollLeft;
      startX = clientX;
    }
  });

  const endDrag = (e) => {
    if (!isPointerDown) return;
    isPointerDown = false;
    track.classList.remove('dragging');
    isAutoplaying = true;
    try { if (e && e.pointerId) track.releasePointerCapture(e.pointerId); } catch (err) {}
  };

  track.addEventListener('pointerup', endDrag);
  track.addEventListener('pointercancel', endDrag);
  window.addEventListener('pointerup', endDrag);

  track.addEventListener('pointerleave', (e) => {
    if (!isPointerDown) endDrag(e);
  });

  // keyboard support
  track.addEventListener('focus', () => { isAutoplaying = false; });
  track.addEventListener('blur', () => { isAutoplaying = true; });

  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setScrollLeftInstant(track.scrollLeft + getNudgeAmount());
      wrapSeamless(originalWidth, copiesCount);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setScrollLeftInstant(track.scrollLeft - getNudgeAmount());
      wrapSeamless(originalWidth, copiesCount);
    } else if (e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      isAutoplaying = !isAutoplaying;
    }
  });

  const getNudgeAmount = () => {
    const first = track.querySelector('.logo');
    if (!first) return 100;
    const rect = first.getBoundingClientRect();
    return rect.width + getGapWidth();
  };

  track.addEventListener('scroll', () => {
    if (isPointerDown) return;
    wrapSeamless(originalWidth, copiesCount);
  }, { passive: true });

  // --- autoplay loop ---
  const autoplayLoop = () => {
    if (!isAutoplaying || isPointerDown) {
      rafId = requestAnimationFrame(autoplayLoop);
      return;
    }
    track.scrollLeft += autoplaySpeed;
    wrapSeamless(originalWidth, copiesCount);
    rafId = requestAnimationFrame(autoplayLoop);
  };

  rafId = requestAnimationFrame(autoplayLoop);

  // --- dynamic responsiveness: ResizeObserver + MutationObserver ---
  const resizeObserver = new ResizeObserver(() => {
    try {
      originalWidth = computeOriginalBlockWidth(originalItems) || originalWidth;
      const newCopies = ensureCopies(originalWidth);
      if (newCopies !== copiesCount) {
        copiesCount = newCopies;
        const newCenter = Math.floor(copiesCount / 2);
        setScrollLeftInstant(originalWidth * newCenter);
      }
    } catch (err) {
      console.warn('carousel resize observer error', err);
    }
  });
  resizeObserver.observe(track);

  const mutObs = new MutationObserver((mutations) => {
    if (mutObs._timer) clearTimeout(mutObs._timer);
    mutObs._timer = setTimeout(() => {
      disableImageDraggable();
      try {
        originalWidth = computeOriginalBlockWidth(originalItems) || originalWidth;
        copiesCount = ensureCopies(originalWidth);
      } catch (err) {}
    }, 80);
  });
  mutObs.observe(track, { childList: true, subtree: false });

  // Safety fallback checks (first few seconds only)
  let fallbackChecks = 0;
  const MAX_FALLBACK_CHECKS = 20;
  const fallbackInterval = setInterval(() => {
    fallbackChecks++;
    originalWidth = computeOriginalBlockWidth(originalItems) || originalWidth;
    const newCopies = ensureCopies(originalWidth);
    if (newCopies !== copiesCount) {
      copiesCount = newCopies;
      const newCenter = Math.floor(copiesCount / 2);
      setScrollLeftInstant(originalWidth * newCenter);
    }
    if (fallbackChecks >= MAX_FALLBACK_CHECKS) clearInterval(fallbackInterval);
  }, 200);

  const recomputeAndRecenter = () => {
    try {
      originalWidth = computeOriginalBlockWidth(originalItems) || originalWidth;
      const newCopies = ensureCopies(originalWidth);
      if (newCopies !== copiesCount) copiesCount = newCopies;
      const center = Math.floor(Math.max(1, copiesCount) / 2);
      setScrollLeftInstant(originalWidth * center);
      wrapSeamless(originalWidth, copiesCount);
    } catch (err) {
      console.warn('carousel recompute error', err);
    }
  };

  // Visibility / focus handling (restart RAF on return)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      recomputeAndRecenter();
      isAutoplaying = true;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(autoplayLoop);
    } else {
      isAutoplaying = false;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }
  });

  window.addEventListener('focus', () => {
    recomputeAndRecenter();
    isAutoplaying = true;
    if (!rafId) rafId = requestAnimationFrame(autoplayLoop);
  });
  window.addEventListener('blur', () => {
    isAutoplaying = false;
  });

  // DPR & track width polling to detect zoom/layout changes
  let lastDPR = window.devicePixelRatio;
  let lastTrackWidth = track.clientWidth;
  const DPR_POLL_MS = 300;
  const dprWatcher = setInterval(() => {
    const dpr = window.devicePixelRatio;
    const w = track.clientWidth;
    if (dpr !== lastDPR || Math.abs(w - lastTrackWidth) > 2) {
      lastDPR = dpr;
      lastTrackWidth = w;
      setTimeout(recomputeAndRecenter, 120);
    }
  }, DPR_POLL_MS);

  window.addEventListener('wheel', (e) => {
    if (e.ctrlKey) setTimeout(recomputeAndRecenter, 120);
  }, { passive: true });

  window.addEventListener('resize', () => {
    setTimeout(recomputeAndRecenter, 80);
  });
  window.addEventListener('orientationchange', () => {
    setTimeout(recomputeAndRecenter, 160);
  });

  // cleanup on unload
  window.addEventListener('beforeunload', () => {
    if (rafId) cancelAnimationFrame(rafId);
    try { resizeObserver.disconnect(); } catch {}
    try { mutObs.disconnect(); } catch {}
    clearInterval(fallbackInterval);
    try { clearInterval(dprWatcher); } catch {}
  });

})(); // end init IIFE