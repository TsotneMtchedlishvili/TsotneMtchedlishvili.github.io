const servicesList =Array.from( document.getElementsByClassName("service_Container"));
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



console.log(thePage);

servicesList.forEach((item) => {

    item.addEventListener('click', () => {

        thePage.classList.remove("slide_Up");
        
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
            thePage.style.background = "rgb(24, 24, 24)";

            // for (const child of thePage.children) {
            //     child.style.display = "flex"
            //   }

            let topic = item.getElementsByTagName("h4").item(0).textContent;
            thePage.innerHTML = serviceTextContent[topic];
            thePage.classList.remove("slide_Up")
            thePage.classList.add("slide_Up")
            
            

        }
        // serviceInfoPage.classList.add('service_Info_Page_Activate');
    })
})  