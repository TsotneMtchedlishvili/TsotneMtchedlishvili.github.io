// partners-list.js
// Modern, flexible loader that supports:
// 1) embedded JSON manifest (#partners-data)
// 2) backend API fetch (script[data-api] or window.PARTNERS_API_URL)
// 3) fallback to reading existing .carousel-track DOM
// Exposes window.PartnersList.reinit(optionalUrlOrArray) for manual refresh.

(() => {
  const DEFAULT_API = '/api/partners';
  const CAROUSEL_TRACK_SEL = '.carousel-track';
  const PARTNERS_GRID_ID = 'partners-grid';
  const SEARCH_INPUT_ID = 'partner-search';
  const MANIFEST_ID = 'partners-data';

  /* ----------------------------- helpers ----------------------------- */
  const slugify = (s = '') =>
    String(s)
      .toLowerCase()
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');

  const safeText = (s = '', max = 300) => {
    const t = String(s ?? '').trim();
    return t.length <= max ? t : t.slice(0, max - 1).trim() + '…';
  };

  const findMyScript = () => document.currentScript || Array.from(document.scripts).find(s => /partners-list\.js$/.test(s.src)) || null;

  const parseManifest = () => {
    const el = document.getElementById(MANIFEST_ID);
    if (!el) return null;
    try {
      const json = el.textContent || el.innerText;
      const arr = JSON.parse(json);
      if (!Array.isArray(arr)) return null;
      return arr.map(item => ({
        id: item.id ?? (item.name ? slugify(item.name) : undefined),
        name: item.name ?? item.title ?? item.alt ?? '',
        title: item.title ?? item.name ?? '',
        excerpt: item.excerpt ?? item.description ?? '',
        href: item.href ?? item.link ?? '',
        src: item.logo ?? item.src ?? item.image ?? '',
        alt: item.alt ?? item.name ?? item.title ?? ''
      })).filter(p => p.src);
    } catch (err) {
      console.warn('partners-list: invalid JSON in #' + MANIFEST_ID, err);
      return null;
    }
  };

  const parseCarouselDOM = () => {
    const track = document.querySelector(CAROUSEL_TRACK_SEL);
    if (!track) return [];
    const logos = Array.from(track.querySelectorAll('.logo'));
    const out = logos.map(logoEl => {
      const img = logoEl.querySelector('img');
      const src = img?.src ?? '';
      const alt = img?.alt ?? '';
      const ds = logoEl.dataset ?? {};
      const name = ds.name || ds.partnerName || ds.partner || alt || '';
      return {
        id: ds.id || (name ? slugify(name) : undefined),
        name,
        title: ds.title || ds.label || name || alt || '',
        excerpt: ds.excerpt || ds.description || '',
        href: ds.href || ds.link || '',
        src,
        alt
      };
    }).filter(p => p.src);
    // dedupe by src+id
    const map = new Map();
    out.forEach(p => {
      const key = `${p.src}||${p.id ?? p.title ?? ''}`;
      if (!map.has(key)) map.set(key, p);
    });
    return Array.from(map.values());
  };

  const fetchPartners = async (url) => {
    if (!url) return [];
    try {
      const res = await fetch(url, { cache: 'no-store' });
      if (!res.ok) {
        console.warn('partners-list: fetch failed', res.status, res.statusText);
        return [];
      }
      const data = await res.json();
      if (!Array.isArray(data)) return [];
      return data.map(item => ({
        id: item.id ?? (item.name ? slugify(item.name) : undefined),
        name: item.name ?? item.title ?? item.alt ?? '',
        title: item.title ?? item.name ?? '',
        excerpt: item.excerpt ?? item.description ?? '',
        href: item.href ?? item.link ?? '',
        src: item.logo ?? item.src ?? item.image ?? '',
        alt: item.alt ?? item.name ?? item.title ?? ''
      })).filter(p => p.src);
    } catch (err) {
      console.warn('partners-list: fetch error', err);
      return [];
    }
  };

  /* ----------------------------- DOM build ----------------------------- */
  const clearChildren = (el) => { while (el.firstChild) el.removeChild(el.firstChild); };

  const buildCarouselFromData = (partners) => {
    const track = document.querySelector(CAROUSEL_TRACK_SEL);
    if (!track) return;
    // If track already contains logos and those logos look fine, do not overwrite unless explicit data provided.
    const existingImgs = track.querySelectorAll('img');
    const shouldReplace = partners && partners.length && existingImgs.length === 0;
    if (!shouldReplace) return; // keep existing carousel if present
    clearChildren(track);
    const fragment = document.createDocumentFragment();
    partners.forEach(p => {
      const wrapper = document.createElement('div');
      wrapper.className = 'logo';
      wrapper.setAttribute('role', 'listitem');
      // preserve possibility of dataset metadata
      if (p.id) wrapper.dataset.id = p.id;
      if (p.name) wrapper.dataset.name = p.name;
      const img = document.createElement('img');
      img.src = p.src;
      img.alt = p.alt || p.name || p.title || '';
      img.loading = 'lazy';
      wrapper.appendChild(img);
      fragment.appendChild(wrapper);
    });
    track.appendChild(fragment);
  };

  const buildGridFromData = (partners) => {
    const grid = document.getElementById(PARTNERS_GRID_ID);
    if (!grid) {
      console.warn('partners-list: missing #' + PARTNERS_GRID_ID);
      return;
    }
    clearChildren(grid);

    if (!partners || !partners.length) {
      const p = document.createElement('p');
      p.className = 'no-partners';
      p.textContent = 'No partners found.';
      grid.appendChild(p);
      return;
    }

    partners.forEach(p => {
      const slug = p.id ?? slugify(p.name ?? p.title ?? p.alt ?? 'partner');
      const href = p.href || `/partners/${slug}`;

      const a = document.createElement('a');
      a.className = 'partner-card';
      a.href = href;
      a.setAttribute('role', 'article');
      a.setAttribute('aria-label', `${p.title || p.name || p.alt} — partner page`);
      a.rel = 'noopener noreferrer';

      const logoWrap = document.createElement('div');
      logoWrap.className = 'card-logo';
      const img = document.createElement('img');
      img.loading = 'lazy';
      img.src = p.src;
      img.alt = p.alt || p.name || p.title || '';
      logoWrap.appendChild(img);

      const body = document.createElement('div');
      body.className = 'card-body';
      const h = document.createElement('h3');
      h.className = 'card-title';
      h.textContent = p.title || p.name || p.alt || 'Partner';
      const ex = document.createElement('p');
      ex.className = 'card-excerpt';
      ex.textContent = safeText(p.excerpt || '');

      body.appendChild(h);
      body.appendChild(ex);

      a.appendChild(logoWrap);
      a.appendChild(body);
      grid.appendChild(a);
    });

    // update footer year if present
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  };

  /* ----------------------------- search wiring ----------------------------- */
  const wireSearch = () => {
    const input = document.getElementById(SEARCH_INPUT_ID);
    const grid = document.getElementById(PARTNERS_GRID_ID);
    if (!input || !grid) return;
    const handler = (e) => {
      const q = (e.target.value || '').trim().toLowerCase();
      const cards = Array.from(grid.querySelectorAll('.partner-card'));
      if (!q) { cards.forEach(c => c.style.display = ''); return; }
      cards.forEach(c => {
        const title = (c.querySelector('.card-title')?.textContent || '').toLowerCase();
        const excerpt = (c.querySelector('.card-excerpt')?.textContent || '').toLowerCase();
        c.style.display = (title + ' ' + excerpt).includes(q) ? '' : 'none';
      });
    };
    input.removeEventListener('input', handler); // noop-safe
    input.addEventListener('input', handler);
  };

  /* ----------------------------- main init ----------------------------- */
  const init = async (options = {}) => {
    // options can override: { apiUrl: string, preferFetch: boolean, sourceArray: array }
    const script = findMyScript();
    const apiFromAttr = script?.getAttribute('data-api') ?? null;
    const apiUrl = options.apiUrl ?? (window.PARTNERS_API_URL ?? apiFromAttr ?? DEFAULT_API);
    const preferFetch = options.preferFetch ?? false;

    // 1) manifest
    const manifest = parseManifest();
    if (manifest && manifest.length) {
      buildCarouselFromData(manifest);
      buildGridFromData(manifest);
      wireSearch();
      return manifest;
    }

    // 2) if options.sourceArray provided use it
    if (Array.isArray(options.sourceArray) && options.sourceArray.length) {
      buildCarouselFromData(options.sourceArray);
      buildGridFromData(options.sourceArray);
      wireSearch();
      return options.sourceArray;
    }

    // 3) fetch from backend if preferFetch true or no carousel logos exist
    const track = document.querySelector(CAROUSEL_TRACK_SEL);
    const existingImgCount = track ? track.querySelectorAll('img').length : 0;
    if (preferFetch || existingImgCount === 0) {
      const partners = await fetchPartners(apiUrl);
      if (partners && partners.length) {
        buildCarouselFromData(partners);
        buildGridFromData(partners);
        wireSearch();
        return partners;
      }
    }

    // 4) fallback to parsing the current carousel DOM
    const domList = parseCarouselDOM();
    buildGridFromData(domList);
    wireSearch();
    return domList;
  };

  /* expose a tiny API so page scripts can reinit (eg. after admin edits or on user action) */
  window.PartnersList = {
    init: (opts) => init(opts),
    reinit: (source) => {
      if (typeof source === 'string') {
        // treat as fetch url
        return init({ apiUrl: source, preferFetch: true });
      }
      if (Array.isArray(source)) {
        return init({ sourceArray: source });
      }
      return init({ preferFetch: true });
    }
  };

  // auto-run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => void init());
  } else {
    void init();
  }
})();