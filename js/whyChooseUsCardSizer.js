const whyChooseCard = Array.from(document.querySelectorAll(".why_Choose_Card"));
const icon = document.querySelector(".icon_Container")
const iconSize = parseFloat(getComputedStyle(icon).height);

const cardSizer = () => {

    let largestCardSize = 0;
    const cardPadding = parseFloat(getComputedStyle(whyChooseCard[0]).paddingBlock);

    whyChooseCard.forEach((card) => {

        const titleHeight = card.querySelector(".why_Choose_Desc_Title").getBoundingClientRect().height;
        const descriptionHeight = card.querySelector(".why_Choose_Desc").getBoundingClientRect().height;
        console.log(cardPadding)
        const cardSize = titleHeight + descriptionHeight + cardPadding * 2;

        if (cardSize > largestCardSize) largestCardSize = cardSize;

    })

    console.log(iconSize)
    console.log(cardPadding)
    if(largestCardSize < iconSize) {
        console.log("largestCardSize < iconSize")
        largestCardSize = iconSize + cardPadding * 2;
        whyChooseCard.forEach((card) => {

            card.style.height = `${largestCardSize}px`
        
        })
    } else {
        console.log("largestCardSize > iconSize")
        console.log(largestCardSize)
        whyChooseCard.forEach((card) => {card.style.height = `${largestCardSize + (largestCardSize/100 * 5)}px`})
        
    }

    
}

window.addEventListener("load", cardSizer)

window.addEventListener("resize", cardSizer);
