const topPanel = document.querySelector(".top_Panel");
const navbar = document.querySelector(".global_Nav");
const toggleBtn = document.querySelector(".navbarToggleBtn");
const logoAndHamburger = document.querySelector(".logo_And_Hamburger")
const navbarContainer = document.querySelector(".navbarContainer");
const header = document.querySelector(".home_Header");
let retracted = true;

if (window.innerWidth < 1000) {

    topPanel.style.height = `${logoAndHamburger.clientHeight}px`;
    topPanel.style.borderRadius = `${topPanel.clientHeight * 0.6}px`;
    header.style.height = `${logoAndHamburger.clientHeight}px`;
}
else {

    header.style.height = `max-content`;
    navbar.style.top = `${header.clientHeight / 2}px`;
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
        header.style.height = `${logoAndHamburger.clientHeight}px`
        topPanel.style.height = `${logoAndHamburger.clientHeight}px`;
        
        toggleBtn.classList.remove("hamburger_Pressed");
        topPanel.style.borderRadius = `${logoAndHamburger.clientHeight * 0.6}px`;
    }
    else if (window.innerWidth < 800) {

        retracted = true;
        header.style.height = `${logoAndHamburger.clientHeight}px`
        topPanel.style.height = `${logoAndHamburger.clientHeight}px`;
                
        toggleBtn.classList.remove("hamburger_Pressed");
        
        topPanel.style.borderRadius = `${logoAndHamburger.clientHeight * 0.6}px`;
    }
    else {

        navbar.clientHeight > logoAndHamburger.clientHeight ? topPanel.style.height = `${navbar.clientHeight}px`: topPanel.style.height = `${logoAndHamburger.clientHeight}px`;
        header.style.height = `max-content`;
        navbar.style.top = `${header.clientHeight / 2}px`;
    }
    


  });