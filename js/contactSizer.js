const contactCard = Array.from(document.querySelectorAll(".contact_Card"));
// const icon = document.querySelector(".icon_Container")
const defaultSize = parseFloat(getComputedStyle(contactCard[0]).height);
console.log("hi " + defaultSize)

const getCardContentsHeight = (card) => {

    const cardPadding = parseFloat(getComputedStyle(contactCard[0]).paddingBlock);
    const iconHeight = card.querySelector(".contact_Icon_Wrapper").getBoundingClientRect().height;
    const contactTitleHeight = card.querySelector(".contact_Title").getBoundingClientRect().height;
    const contactDescHeight = card.querySelector(".contact_desc").getBoundingClientRect().height;
    const learnMore = card.querySelector(".learn_More_Page").getBoundingClientRect().height;
    const cardSize = iconHeight + contactTitleHeight + learnMore + contactDescHeight + cardPadding * 2;
    return cardSize;
    
}

const contactCardSizer = () => {

    let largestCardSize = 0;
    const cardPadding = parseFloat(getComputedStyle(contactCard[0]).paddingBlock);

    contactCard.forEach((card) => {

        let currentHeight = card.getBoundingClientRect().height;
        const iconHeight = card.querySelector(".contact_Icon_Wrapper").getBoundingClientRect().height;
        const contactTitleHeight = card.querySelector(".contact_Title").getBoundingClientRect().height;
        const contactDescHeight = card.querySelector(".contact_desc").getBoundingClientRect().height;
        const learnMore = card.querySelector(".learn_More_Page").getBoundingClientRect().height;
        console.log(cardPadding)
        const cardSize = iconHeight + contactTitleHeight + learnMore + contactDescHeight + cardPadding * 2;

        if(currentHeight > cardSize) currentHeight = cardSize;
        if (cardSize > largestCardSize) largestCardSize = cardSize;
        largestCardSize = largestCardSize * 105 /100;

    })

    if(largestCardSize < defaultSize) {
        console.log("largestCardSize < normal height")
        largestCardSize = defaultSize;
        contactCard.forEach((card) => {

            card.style.height = `${largestCardSize}px`;
            card.style.width = `${largestCardSize}px`
            const cardContetHeight = getCardContentsHeight(card);
            let currentSize = card.getBoundingClientRect.height;
            if (currentSize !== cardContetHeight) {
                console.log("yeee")

               card.style.height = `${currentSize * (100 + (cardContetHeight - currentSize)/(cardContetHeight/100))/180}px`;
               card.style.width = `${currentSize * (100 + (cardContetHeight - currentSize)/(cardContetHeight/100))/180}px`;
            }
        
        })
    } else {
        console.log("largestCardSize > iconSize")
        console.log(largestCardSize)
        contactCard.forEach((card) => {
            card.style.height = `${largestCardSize}px`;
            card.style.width = `${largestCardSize}px`;
            card.style.height = `${largestCardSize}px`;
            const cardContetHeight = getCardContentsHeight(card);
            let currentSize = card.getBoundingClientRect.height;
            if (currentSize !== cardContetHeight) {
                console.log("yeee")

               card.style.height = `${currentSize * (100 + (cardContetHeight - currentSize)/(cardContetHeight/100))/180}px`;
               card.style.width = `${currentSize * (100 + (cardContetHeight - currentSize)/(cardContetHeight/100))/180}px`;
            }
            
        })
        
    }

    

    
}

window.addEventListener("load", contactCardSizer);

window.addEventListener("resize", contactCardSizer);
