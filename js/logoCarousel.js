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

    console.log("rolax" + logoCarouselThumbnail.clientHeight)
    container.style.height = `${carousel.clientHeight}px`;
    let trueSize = ((logoCarouselThumbnail.clientHeight / 60 * 100 + parseFloat(getComputedStyle(item).rowGap) + desc.clientHeight));
    console.log(trueSize)
    let ratio = 1/carousel.clientHeight;
    let itemThumbnail = item.children[0];
    let thumbnailPicture = itemThumbnail.children[0];
    // let itemTitile = item.children[1];
    // let itemDescription = item.children[2];
    // let itemButton = item.children[3];
    // console.log(title.clientHeight + "hello")
    // itemThumbnail.style.height = `${1.5 * (itemButton.clientHeight + itemTitile.clientHeight + itemDescription.clientHeight)}px`
    // console.log(itemThumbnail.style.minHeight)
    // console.log(((button.clientHeight + title.clientHeight + desc.clientHeight)))
    
    // itemThumbnail.style.height = `${(button.clientHeight + title.clientHeight + desc.clientHeight)}px !important`;
    // console.log(item.children)
    //Logo Carousel Thumbail is supposed to be 60% of the entire item card, for this reason once its height is calced it is divided by 60 and multiplied by 100 to determine the item card size, adjusting for row and padding size.
    
    item.style.height = `${container.clientHeight - 2*parseFloat(getComputedStyle(container).padding)}px`;
    item.style.minWidth = `${item.clientHeight}px`;
    // console.log(ratio)
    
    itemThumbnail.style.height = `${item.clientHeight * 60/100}px`
    // calc(clamp(160px, 25vw + 20vh, 320px) - 2*clamp(5px, 1.25vh, 200px))
    

    // console.log(parseFloat(getComputedStyle(item).height))
    // console.log(logoCarouselThumbnail.clientHeight)
    // console.log(title.clientHeight + "hello")
    // console.log(`hello this is the title size ${1.5*(button.clientHeight + title.clientHeight + desc.clientHeight)}`)
    // console.log(title.clientHeight + desc.clientHeight + button.clientHeight);

    // if (ratio > 1) {
    //     item.style.height = ;
    // }

    thumbnailRatio = itemThumbnail.clientHeight / itemThumbnail.clientWidth;
    pictureRatio =  thumbnailPicture.naturalHeight / thumbnailPicture.naturalWidth;
    console.log(thumbnailPicture.naturalWidth)
    if (thumbnailRatio < pictureRatio) {

      thumbnailPicture.style.width = "100%";
      thumbnailPicture.style.height = "auto";
      console.log(thumbnailRatio)
      console.log(pictureRatio)
      console.log("Thumbnail Ratio is less than picture ratio, width needs to be equalized")
    }
    else if (thumbnailRatio > pictureRatio) {
      thumbnailPicture.style.width = "auto";
      thumbnailPicture.style.height = "100%";
      console.log(thumbnailRatio)
      console.log(pictureRatio)
      console.log("Thumbnail Ratio is more than picture ratio, height needs to be equalized")
    }
    else { 
      console.log(thumbnailRatio)
      console.log(pictureRatio)
      console.log("they are even")}
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

    //       background: ;
    // border-color: var(--main-color-one);
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