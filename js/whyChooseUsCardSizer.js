const whyChooseCard = Array.from(document.querySelectorAll(".why_Choose_Card"));

const cardSizer = () => {

    let largestCardSize = 0;

    whyChooseCard.forEach((card) => {

        const titleHeight = card.querySelector(".why_Choose_Desc_Title").getBoundingClientRect().height;
        const descriptionHeight = card.querySelector(".why_Choose_Desc").getBoundingClientRect().height;
        const cardPadding = parseFloat(getComputedStyle(card).paddingBlock);
        console.log(cardPadding)
        const cardSize = titleHeight + descriptionHeight + cardPadding * 2;

        if (cardSize > largestCardSize) largestCardSize = cardSize;

    })

    whyChooseCard.forEach((card) => {

        card.style.height = `${largestCardSize + (largestCardSize/100 * 5)}px`
        
    })
}

cardSizer();

window.addEventListener("resize", cardSizer);
