const intro_Home = document.querySelector('.intro_Home');
const intro_Container = document.querySelector('.intro_Container')
let multiplier = 0;
const topPanel = document.querySelector(".top_Panel");
let topPanelMargin = parseFloat(window.getComputedStyle(topPanel).marginTop);
const navbar = document.querySelector(".global_Nav");
const toggleBtn = document.querySelector(".navbarToggleBtn");
const logoAndHamburger = document.querySelector(".logo_And_Hamburger")
const navbarContainer = document.querySelector(".navbarContainer");
const header = document.querySelector(".home_Header");
let retracted = true;

if (window.innerWidth < 620) {

    multiplier = 0.6;
}
else {
    multiplier = 0.8 ;
}

navbar.style.top = `${topPanel.clientHeight / 2 + topPanelMargin}px`;

window.addEventListener("resize", () => {

    if (window.innerWidth < 620) {

        multiplier = 0.6;
    }
    else {
        multiplier = 0.8;
    }
    
})

if (window.innerWidth < 1000) {

    topPanel.style.height = `${logoAndHamburger.clientHeight}px`;
    topPanel.style.borderRadius = `${topPanel.clientHeight * 0.6}px`;
}
else {

    topPanelMargin = Number(window.getComputedStyle(topPanel).marginTop);
    navbar.style.top = `${topPanel.clientHeight / 2 + topPanelMargin}px`;
}

toggleBtn.addEventListener("click", () => {

    toggleBtn.classList.toggle("hamburger_Pressed");
        
        if (retracted) {

            topPanel.style.height = `${2 * logoAndHamburger.clientHeight + navbarContainer.clientHeight}px`;
            retracted = false;
            if (topPanel.clientHeight === logoAndHamburger.clientHeight) {

                topPanel.style.borderRadius = `${topPanel.clientHeight * 0.6}px`;
            }
            
        }
        else {

            retracted = true;
            
            topPanel.style.height = `${logoAndHamburger.clientHeight}px`;
            
        }


  });

  window.addEventListener("resize", () => {

    if (window.innerWidth < 1000 && window.innerWidth >= 800) {

        retracted = true;
        topPanel.style.height = `${logoAndHamburger.clientHeight}px`;
        
        toggleBtn.classList.remove("hamburger_Pressed");
        topPanel.style.borderRadius = `${logoAndHamburger.clientHeight * 0.6}px`;
    }
    else if (window.innerWidth < 800) {

        retracted = true;
        topPanel.style.height = `${logoAndHamburger.clientHeight}px`;
        
        toggleBtn.classList.remove("hamburger_Pressed");
        
        topPanel.style.borderRadius = `${logoAndHamburger.clientHeight * 0.6}px`;

    }
    else {
        
        topPanelMargin = Number(window.getComputedStyle(topPanel).marginTop);
        navbar.style.top = `${topPanel.clientHeight / 2 + topPanelMargin}px`;
    }
    


  });