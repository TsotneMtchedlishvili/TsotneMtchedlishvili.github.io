const servicesList = Array.from( document.getElementsByClassName("service_Container"));
const serviceInfoPage = document.querySelector(".service_Info_Page");
const thePage = document.querySelector(".page_Contents");
const serviceTextContent = {
    "Renovation Operations": `  <div class="page_Img_Wrapper">
                                    <img src="https://cdn.prod.website-files.com/64a4ff71754d001d8b63f41d/64a50acd5fab23fac7baca5f_REBUILD%20Construction%20Webflow%20Template%20-%20interior%20plan-p-800.jpeg" 
                                    alt="" class="thumbnail">
                                </div>
                                <div class="page_Description">
                                    <h3>Renovation Operations</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div class="learn_More_Container">
                                    <a href="" class="learn_More_Page">Learn More</a>
                                    <div class="arrow-Right"></div></div>
                                </div>`,
    "Construction Operations": `<div class="page_Img_Wrapper">
                                    <img src="https://thumbs.dreamstime.com/b/professional-caucasian-gardener-building-plants-irrigation-system-developed-garden-industrial-theme-plants-irrigation-system-157982906.jpg" 
                                    alt="" class="thumbnail">
                                </div>
                                <div class="page_Description">
                                    <h3>Construction Operations</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div class="learn_More_Container">
                                    <a href="" class="learn_More_Page">Learn More</a>
                                    <div class="arrow-Right"></div></div>
                                </div>`,
    "Landscaping": `<div class="page_Img_Wrapper">
                                    <img src="https://theremotegroup.com/wp-content/uploads/2024/05/Property-Management-Company-scaled.webp" 
                                    alt="" class="thumbnail">
                                </div>
                                <div class="page_Description">
                                    <h3>Landscaping</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div class="learn_More_Container">
                                    <a href="" class="learn_More_Page">Learn More</a>
                                    <div class="arrow-Right"></div></div>
                                </div>`,
    "Coordination with architects and designers": `<div class="page_Img_Wrapper">
                                    <img src="https://www.bestdegreeprograms.org/wp-content/uploads/2021/12/shutterstock_275946575-scaled.jpg" 
                                    alt="" class="thumbnail">
                                </div>
                                <div class="page_Description">
                                    <h3>Coordination with architects and designers</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div class="learn_More_Container">
                                    <a href="" class="learn_More_Page">Learn More</a>
                                    <div class="arrow-Right"></div></div>
                                </div>`,
    "HVAC systems installation": `<div class="page_Img_Wrapper">
                                    <img src="https://t3.ftcdn.net/jpg/10/90/34/40/360_F_1090344066_emRaz82WCy0e1zjY1jM4fDW4rrV2Yh0D.jpg" 
                                    alt="" class="thumbnail">
                                </div>
                                <div class="page_Description">
                                    <h3>HVAC systems installation</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div class="learn_More_Container">
                                    <a href="" class="learn_More_Page">Learn More</a>
                                    <div class="arrow-Right"></div></div>
                                </div>`,
    "Furniture Production Oversight": `<div class="page_Img_Wrapper">
                                    <img src="https://p2mnet.com/wp-content/uploads/2016/10/Aegis-furniture2-1920x1080.jpg" 
                                    alt="" class="thumbnail">
                                </div>
                                <div class="page_Description">
                                    <h3>Furniture Production Oversight</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div class="learn_More_Container">
                                    <a href="" class="learn_More_Page">Learn More</a>
                                    <div class="arrow-Right"></div></div>
                                </div>`,
    "Cleaning Operations": `<div class="page_Img_Wrapper">
                                    <img src="https://mistyclean.com/wp-content/uploads/2024/07/Banner-img-Professional-cleaning-Services-in-Maryland-scaled.webp" 
                                    alt="" class="thumbnail">
                                </div>
                                <div class="page_Description">
                                    <h3>Cleaning Operations</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div class="learn_More_Container">
                                    <a href="" class="learn_More_Page">Learn More</a>
                                    <div class="arrow-Right"></div></div>
                                </div>`,
    "Purchase and Logistics of Building Material": `<div class="page_Img_Wrapper">
                                    <img src="https://www.mintsoft.com/media/chzlxsn3/types_of_warehouse_blog.png?width=1200&height=630&v=1dab8149acd8d70" 
                                    alt="" class="thumbnail">
                                </div>
                                <div class="page_Description">
                                    <h3>Purchase and Logistics of Building Material</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div class="learn_More_Container">
                                    <a href="" class="learn_More_Page">Learn More</a>
                                    <div class="arrow-Right"></div></div>
                                </div>`
}

const wwaIntro = document.querySelector('.wwa_Intro');
const serviceBox = document.querySelector(".service_Box");
const serviceText = document.querySelector(".service_Text")

const selectServiceFunction = (item) => {

        thePage.classList.remove("slide_Up");

        if (window.innerWidth < 1220) {

            if (item.classList.contains("selected")) {

                item.classList.remove("selected");
                serviceInfoPage.classList.remove('service_Info_Page_Activate');
                thePage.style.background = "transparent";
                thePage.innerHTML = '';
                
            }
            else if (!item.classList.contains("selected")) {
    
                let selected = document.querySelector(".selected");
                
                if (selected) {
    
                    selected.classList.remove("selected");
                    
                }
                
                item.classList.add("selected");
                serviceInfoPage.classList.add('service_Info_Page_Activate');
                thePage.style.background = "var(--distinguished-window)";
    
                let topic = item.getElementsByTagName("h4").item(0).textContent;
                thePage.innerHTML = serviceTextContent[topic];
                thePage.classList.remove("slide_Up");
                thePage.classList.add("slide_Up");


                const closeButton = document.createElement("div");

                const closeButtonIcon = document.createElement("img");
                closeButtonIcon.src = "../Images/Icons/close-circle-svgrepo-com.svg";
                closeButtonIcon.height = 40;

                closeButton.appendChild(closeButtonIcon);
                closeButton.classList.add("closeBtn");
                thePage.appendChild(closeButton);


                closeButton.addEventListener('click', () => {
                    item.classList.remove("selected");
                    serviceInfoPage.classList.remove('service_Info_Page_Activate');
                    thePage.style.background = "transparent";
                    if (backdrop) {
                        backdrop.remove();
                    }
                    if (closeButton) {
                        closeButton.remove();
                    }
                    thePage.innerHTML = '';
                    document.body.style.overflow = "scroll";
                    document.querySelector(".top_Panel").classList.remove("hidden");
                });

                const backdrop = document.createElement("div");
                backdrop.classList.add("page_Background");
                thePage.appendChild(backdrop);
                document.body.style.overflow = "hidden"
                 document.querySelector(".top_Panel").classList.add("hidden");

                
                
                
    
            }

        }
        else {

            if (item.classList.contains("selected")) {

                item.classList.remove("selected");
                serviceInfoPage.classList.remove('service_Info_Page_Activate');
                thePage.style.background = "transparent";
                // for (const child of thePage.children) {
                //     child.style.display = "none"
                //   }
    
                thePage.innerHTML = '';
                
                
    
            }
            else if (!item.classList.contains("selected")) {
    
                let selected = document.querySelector(".selected");
                
                if (selected) {
    
                    selected.classList.remove("selected");
                    
                }
                
                item.classList.add("selected");
                serviceInfoPage.classList.add('service_Info_Page_Activate');
                thePage.style.background = "var(--distinguished-window)";
    
                // for (const child of thePage.children) {
                //     child.style.display = "flex"
                //   }
    
                let topic = item.getElementsByTagName("h4").item(0).textContent;
                thePage.innerHTML = serviceTextContent[topic];
                thePage.classList.remove("slide_Up");
                thePage.classList.add("slide_Up");

                
                
                
    
            }

        }
        
        
        // serviceInfoPage.classList.add('service_Info_Page_Activate');
}


if (window.innerWidth > 1220) {

    let isPaused = false;
    let selectedService = () => document.querySelector(".selected");
    console.log(selectedService())
    let selectedServiceIndex;
    let nextSelection;

    if(!selectedService()) {

        selectServiceFunction(servicesList[0]);
    }
    // else {

    //     selectedService = servicesList.findIndex((selection) => {selection.classList.contains("selected")});
    //     console.log(selectedService)
    // }

    let autoSlide = () => {
            if (isPaused) {
                setTimeout(autoSlide, 5000); // checks again later if paused
                return;
            }
            selectedServiceIndex = servicesList.findIndex((x) => x.classList.contains("selected"));
            nextSelection = selectedServiceIndex + 1;

            if(selectedServiceIndex === servicesList.length - 1) {
                selectServiceFunction(servicesList[0])
                selectedServiceIndex = 0;
            }
            else {

                selectServiceFunction(servicesList[nextSelection])

            }
            
            setTimeout(autoSlide, 5000);

        }

    setTimeout(autoSlide, 5000);
    serviceBox.addEventListener('mouseenter', () => {isPaused = true;});
    serviceBox.addEventListener('mouseleave', () => {isPaused = false;});
    if (serviceBox.matches(':hover')) {
        isPaused = true;
    }
}


servicesList.forEach((item) => {


    let selectItem = () => {selectServiceFunction(item);};
    
    item.addEventListener('click', selectItem);

});

    // console.log(serviceBox.clientWidth);
    // console.log(serviceInfoPage.clientWidth);
    // console.log(serviceText.clientWidth);
    if (serviceBox) {
        
        if (window.innerWidth < 1220) {

            serviceBox.style.marginLeft = `0px`;
        }
        else {
            serviceBox.style.marginLeft = `${(window.innerWidth - (serviceBox.clientWidth - serviceInfoPage.clientWidth + serviceText.clientWidth)) / 2}px`;
            wwaIntro.style.width = `${serviceBox.clientWidth - serviceInfoPage.clientWidth + serviceText.clientWidth}px`;

        }
    }

    window.addEventListener("resize", () => {

        if (serviceBox) {
        
        if (window.innerWidth < 1220) {

            serviceBox.style.marginLeft = `0px`;
            // console.log(serviceInfoPage.clientHeight);

            if(serviceInfoPage.clientHeight > 1) {
                

                if (!document.querySelector(".closeBtn")) {

                    console.log("button Made")
                    const closeButton = document.createElement("div");

                    const closeButtonIcon = document.createElement("img");
                    closeButtonIcon.src = "../Images/Icons/close-circle-svgrepo-com.svg";
                    closeButtonIcon.height = 40;

                    closeButton.appendChild(closeButtonIcon);
                    closeButton.classList.add("closeBtn");
                    thePage.appendChild(closeButton);


                    closeButton.addEventListener('click', () => {
                        const selected = document.querySelector(".selected");
                        selected.classList.remove("selected");
                        serviceInfoPage.classList.remove('service_Info_Page_Activate');
                        thePage.style.background = "transparent";
                        thePage.innerHTML = '';
                        document.body.style.overflow = "scroll";
                        document.querySelector(".top_Panel").classList.remove("hidden");
                        navbar.style.top = `${header.clientHeight / 2}px`;
                    });

                }

                if(!document.querySelector(".page_Background")) {

                    const backdrop = document.createElement("div");
                    console.log("Backdrop Made");
                    backdrop.classList.add("page_Background");
                    thePage.appendChild(backdrop);
                    document.body.style.overflow = "hidden";
                    document.querySelector(".top_Panel").classList.add("hidden");
                }



            }
        }
        else {
            serviceBox.style.marginLeft = `${(window.innerWidth - (serviceBox.clientWidth - serviceInfoPage.clientWidth + serviceText.clientWidth)) / 2}px`;
            wwaIntro.style.width = wwaIntro.style.width = `${serviceBox.clientWidth - serviceInfoPage.clientWidth + serviceText.clientWidth}px`;
            if (serviceInfoPage.clientHeight > 1) {

                // console.log("x1")

                    document.body.style.overflow = "scroll";
                    document.querySelector(".top_Panel").classList.remove("hidden");
            
                    if (document.querySelector(".page_Background")){
                        document.querySelector(".page_Background").remove();
                        console.log("111")
                    }

                    if (document.querySelector(".closeBtn")){
                        document.querySelector(".closeBtn").remove();
                        console.log("222")
                    }
                

            }
        }
    }
    })
    // console.log(serviceBox.style.marginLeft);

