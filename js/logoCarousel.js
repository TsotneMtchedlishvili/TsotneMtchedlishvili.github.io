const container = document.querySelector('.quick_Buy_Carousel');
const carouselItem = document.querySelector('.carousel_Item');
const carouselButton = document.querySelectorAll('.carousel_Scroll_Button');
const rightCarouselButton = document.querySelector('.right_Scroll_Button');
const leftCarouselButton = document.querySelector('.left_Scroll_Button');

const carousel = document.querySelector('.quick_Buy');
const items = Array.from(document.querySelectorAll('.carousel_Item'));
const button = document.querySelector('.standard_Button_One');
const arrowLeft = document.querySelector(".arrow_Left_Svg");
const arrowRight = document.querySelector(".arrow_Right_Svg");
const title = Array.from(document.querySelectorAll('.item_Title'));
const desc = document.querySelector('.item_Price');
const logoCarouselThumbnail = document.querySelector('.item_Thumbnail');
const thumbnailImage = document.querySelector('.Thumbnail');

const truncateString = (str, num) => {

  if (str.length <= num) {
    return str;
  }
  return`${str.slice(0, num)}...`;
}

const sizeAdjustment = (item) => {

    container.style.height = `${carousel.clientHeight}px`;
    let trueSize = ((logoCarouselThumbnail.clientHeight / 60 * 100 + parseFloat(getComputedStyle(item).rowGap) + desc.clientHeight));
    let ratio = 1/carousel.clientHeight;
    let itemThumbnail = item.children[0];
    let thumbnailPicture = itemThumbnail.children[0];
    
    item.style.height = `${container.clientHeight - 2*parseFloat(getComputedStyle(container).padding)}px`;
    item.style.minWidth = `${item.clientHeight}px`;

    itemThumbnail.style.height = `${item.clientHeight * 60/100}px`

    thumbnailRatio = itemThumbnail.clientHeight / itemThumbnail.clientWidth;
    pictureRatio =  thumbnailPicture.naturalHeight / thumbnailPicture.naturalWidth;
    if (thumbnailRatio < pictureRatio) {

      thumbnailPicture.style.width = "100%";
      thumbnailPicture.style.height = "auto";
    }
    else if (thumbnailRatio > pictureRatio) {
      thumbnailPicture.style.width = "auto";
      thumbnailPicture.style.height = "100%";
    }
    else { 
      thumbnailPicture.style.width = "auto";
      thumbnailPicture.style.height = "auto";
    
    }
}

window.addEventListener("load", () => {
  
  items.forEach((item)=> {
    
    requestAnimationFrame(() => {
    items.forEach(item => sizeAdjustment(item));
  });
    title[items.indexOf(item)].textContent = truncateString(title[items.indexOf(item)].textContent, 20);
  });
});

window.addEventListener("resize", () => {

  items.forEach((item)=> {
    sizeAdjustment(item);
    title[items.indexOf(item)].textContent = truncateString(title[items.indexOf(item)].textContent, 20);
  });
} )

carousel.addEventListener('mouseenter', () => {
        carouselButton.forEach((button) => {

          button.style.background = "rgba(255, 255, 255, 0.541)";
          button.style.borderColor = "var(--main-color-one)";
          button.style.backdropFilter = "blur(4px)";
          arrowLeft.style.fill = "var(--text-color-lightened)";
          arrowRight.style.fill = "var(--text-color-lightened)";
        })
      });

carousel.addEventListener('mouseleave', () => {
        carouselButton.forEach((button) => {
          
          button.style.backgroundColor = "transparent";
          button.style.borderColor = "transparent";
          button.style.backdropFilter = "none";
          arrowLeft.style.fill = "none";
          arrowRight.style.fill = "none";
        })
      });

const scrollToRight = () => {

  const width = carouselItem.offsetWidth;
  container.scrollLeft += width;
  return;
}

const scrollToLeft = () => {

  const width = carouselItem.offsetWidth;
  container.scrollLeft -= width;
  return;
}

rightCarouselButton.addEventListener('click', scrollToRight);
leftCarouselButton.addEventListener('click', scrollToLeft);