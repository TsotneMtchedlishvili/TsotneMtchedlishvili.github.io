const languageSelector = document.querySelector('.language_Selector');
const languageButton = document.querySelector('.language_Button');
const languageList = document.querySelector('.language_List');



languageList.clientHeight ? languageList.style.height = "0px" : languageList.style.height = "max-content";

const closeLangList = (winWidth) => {

    
    if (winWidth >= 2000) {
        languageList.style.height = "0px"
        languageList.style.border = "none"
        languageSelector.style.borderBottomRightRadius = "clamp(1rem, 2vw, 3rem)";
        languageSelector.style.borderBottomLeftRadius = "clamp(1rem, 2vw, 3rem)";
        languageButton.style.borderBottomRightRadius = "clamp(1rem, 2vw, 3rem)";
        languageButton.style.borderBottomLeftRadius = "clamp(1rem, 2vw, 3rem)";

        languageSelector.style.borderTopRightRadius = "clamp(1rem, 2vw, 3rem)";
        languageSelector.style.borderTopLeftRadius = "clamp(1rem, 2vw, 3rem)";
        languageButton.style.borderTopRightRadius = "clamp(1rem, 2vw, 3rem)";
        languageButton.style.borderTopLeftRadius = "clamp(1rem, 2vw, 3rem)";
    }
    else if (winWidth >= 1000){

        languageList.style.height = "0px"
        languageList.style.border = "none"
        languageSelector.style.borderBottomRightRadius = "clamp(1rem, 2vw, 3rem)";
        languageSelector.style.borderBottomLeftRadius = "clamp(1rem, 2vw, 3rem)";
        languageButton.style.borderBottomRightRadius = "clamp(1rem, 2vw, 3rem)";
        languageButton.style.borderBottomLeftRadius = "clamp(1rem, 2vw, 3rem)";

        languageSelector.style.borderTopRightRadius = "clamp(1rem, 2vw, 3rem)";
        languageSelector.style.borderTopLeftRadius = "clamp(1rem, 2vw, 3rem)";
        languageButton.style.borderTopRightRadius = "clamp(1rem, 2vw, 3rem)";
        languageButton.style.borderTopLeftRadius = "clamp(1rem, 2vw, 3rem)";

    }
    else {

        languageList.style.height = "0px"
        languageList.style.border = "none"
        languageSelector.style.borderBottomRightRadius = "clamp(0.2rem, 1vw, 2rem)";
        languageSelector.style.borderBottomLeftRadius = "clamp(0.2rem, 1vw, 2rem)";
        languageButton.style.borderBottomRightRadius = "clamp(0.2rem, 1vw, 2rem)";
        languageButton.style.borderBottomLeftRadius = "clamp(0.2rem, 1vw, 2rem)";

        languageSelector.style.borderTopRightRadius = "clamp(0.2rem, 1vw, 2rem)";
        languageSelector.style.borderTopLeftRadius = "clamp(0.2rem, 1vw, 2rem)";
        languageButton.style.borderTopRightRadius = "clamp(0.2rem, 1vw, 2rem)";
        languageButton.style.borderTopLeftRadius = "clamp(0.2rem, 1vw, 2rem)";

    }

    

}


const openLangList = (winWidth) => {


    if (winWidth >= 2000){

        languageList.style.height = "max-content"
        languageList.style.border = "0.2vh solid var(--nav-text-color)"
        languageSelector.style.borderBottomRightRadius = "0";
        languageSelector.style.borderBottomLeftRadius = "0";
        
        languageButton.style.borderBottomRightRadius = "0";
        languageButton.style.borderBottomLeftRadius = "0";

        languageSelector.style.borderTopRightRadius = "clamp(1rem, 2vw, 2.7rem)";
        languageSelector.style.borderTopLeftRadius = "clamp(1rem, 2vw, 2.7rem)";
        languageButton.style.borderTopRightRadius = "clamp(1rem, 2vw, 2.7rem)";
        languageButton.style.borderTopLeftRadius = "clamp(1rem, 2vw, 2.7rem)";
        

    }
    else if (winWidth >= 1000){

        languageList.style.height = "max-content"
        languageList.style.border = "0.2vh solid var(--nav-text-color)"
        languageSelector.style.borderBottomRightRadius = "0";
        languageSelector.style.borderBottomLeftRadius = "0";
        
        languageButton.style.borderBottomRightRadius = "0";
        languageButton.style.borderBottomLeftRadius = "0";

        languageSelector.style.borderTopRightRadius = "clamp(1rem, 2vw, 1.7rem)";
        languageSelector.style.borderTopLeftRadius = "clamp(1rem, 2vw, 1.7rem)";
        languageButton.style.borderTopRightRadius = "clamp(1rem, 2vw, 1.7rem)";
        languageButton.style.borderTopLeftRadius = "clamp(1rem, 2vw, 1.7rem)";
        

    }
    else {
        languageList.style.height = "max-content"
        languageList.style.border = "1px solid var(--nav-text-color)"
        languageSelector.style.borderBottomRightRadius = "0";
        languageSelector.style.borderBottomLeftRadius = "0";
        languageButton.style.borderBottomRightRadius = "0";
        languageButton.style.borderBottomLeftRadius = "0";
    }
    

}


const calcWindowWidth = () => {

    return window.innerWidth
}

const switcherAction = () => {

    let resolution = calcWindowWidth()
    languageList.clientHeight ? closeLangList(resolution) : openLangList(resolution);

}

languageButton.addEventListener('click', () => {

    switcherAction()
})

window.addEventListener("resize", () => {

    closeLangList(calcWindowWidth());

})