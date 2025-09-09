// const rect = logo.getBoundingClientRect();
// const canvas = document.createElement("canvas");
// const ctx = canvas.getContext("2d");

//draw the image into the canvas

// ctx.drawImage(img, 0, 0);

// const imageData = ctx.getImageData(lx, ly, lw, lh);
// const pixels = imageData.data;
const siteLogo = document.querySelector(".header_Logo");
let lightLogo = "Images/theSpace/logo-tetri).png";
let darkLogo = "Images/theSpace/logo-mtavari-eng(2).png";
let currentlyLoadedImg = lightLogo;

const getCoverScaleAndOffset = (img, containerWidth, containerHeight) => {
  const imgAspect = img.naturalWidth / img.naturalHeight;
  const containerAspect = containerWidth / containerHeight;

  let scale, offsetX = 0, offsetY = 0;

  if (containerAspect > imgAspect) {
    // Container is wider → image scaled by width, cropped vertically
    scale = containerWidth / img.naturalWidth;
    offsetY = (img.naturalHeight * scale - containerHeight) / 2;
  } else {
    // Container is taller → image scaled by height, cropped horizontally
    scale = containerHeight / img.naturalHeight;
    offsetX = (img.naturalWidth * scale - containerWidth) / 2;
  }

  return { scale, offsetX, offsetY };
}

const mapLogoToImageCoords = (img, logo) => {

  const imgRect = img.getBoundingClientRect();
  const logoRect = logo.getBoundingClientRect();

  const {scale, offsetX, offsetY } = getCoverScaleAndOffset(
    img,
    imgRect.width,
    imgRect.height
  );

  // Convert logo position relative to image container
  const relativeX = logoRect.left - imgRect.left;
  const relativeY = logoRect.top - imgRect.top;

  // Map to natural image pixels
  const lx = (relativeX + offsetX) / scale;
  const ly = (relativeY + offsetY) / scale;
  const lw = logoRect.width / scale;
  const lh = logoRect.height / scale;

  return { lx, ly, lw, lh };
}


const analyzeLogoBackground = (img, logo) => {

  if(window.innerWidth <= 1220) {
    return
  }

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const runAnalysis = () => {

   

  // prepare canvas and draw the image
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0);


  // compute logo area in image (natural) coordinates
  const { lx, ly, lw, lh } = mapLogoToImageCoords(img, logo);

  // minimal safety: integer coords clamped to canvas bounds
  const sx = Math.max(0, Math.floor(lx));
  const sy = Math.max(0, Math.floor(ly));
  const sw = Math.max(1, Math.floor(Math.min(lw, canvas.width - sx)));
  const sh = Math.max(1, Math.floor(Math.min(lh, canvas.height - sy)));
  


  let pixels;
  try {
    pixels = ctx.getImageData(sx, sy, sw, sh).data;
  } catch (err) {
    console.error('getImageData failed — canvas may be tainted by cross-origin image or coords are bad:', err);
    return;
  }

  // sample pixels (stride to reduce work)
  let total = 0, count = 0;
  for (let i = 0; i < pixels.length; i += 40) {
    const r = pixels[i], g = pixels[i+1], b = pixels[i+2];
    total += 0.299*r + 0.587*g + 0.114*b;
    count++;
  }

  const avgBrightness = count ? total / count : 0;

  const fadeIn = (logoType) =>  {

    if(parseInt(getComputedStyle(logo).opacity) !== 0) {
      setTimeout(fadeIn, 200, logoType);
      console.log("returned" + typeof(parseInt(getComputedStyle(logo).opacity)))
      return;
    }
    else {
      logo.src = logoType;
      logo.style.opacity = `100`;
    }
      
  }
      

  const fadeEffect = (arg) => {

      // setTimeout(() => {
          logo.style.transition = `all 200ms ease-in-out`;
          logo.style.opacity = `0`;
          fadeIn(arg);
      // }, 100)

  };

  if (avgBrightness < 128) {
        
        if (currentlyLoadedImg !== lightLogo) {
          currentlyLoadedImg = lightLogo;
          
          setTimeout(fadeEffect, 200, lightLogo)
          
        }
      } else {
        
        
        if (currentlyLoadedImg !== darkLogo) {
          currentlyLoadedImg = darkLogo;
          
          setTimeout(fadeEffect, 200, darkLogo)
        }

      }

}



// run immediately if already loaded, otherwise wait for load
  if (img.complete && img.naturalWidth) {
    runAnalysis();
  } else {
    img.addEventListener('load', runAnalysis, { once: true });
    img.addEventListener('error', () => console.error('Carousel image failed to load'), { once: true });
  }

  }


  window.addEventListener("resize", () => {

    if(window.innerWidth <= 1220) {

      if(currentlyLoadedImg!== lightLogo) {

        currentlyLoadedImg = lightLogo;
        siteLogo.src = lightLogo;
        console.log("changed")
      }

    }
    else {

      analyzeLogoBackground(currentSlideImage,siteLogo);
      console.log(currentSlideImage)
    }
     
  })
