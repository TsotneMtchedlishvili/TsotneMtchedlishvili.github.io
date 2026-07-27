const servicesList = Array.from( document.getElementsByClassName("service_Container"));
const serviceInfoPage = document.querySelector(".service_Info_Page");
const thePage = document.querySelector(".page_Contents");
const serviceTextContent = {
    "Renovation Operations": `  <div class="page_Img_Wrapper">
                                    <img src="Images/Services/7F8A1341-HDR-панорама.jpg" 
                                    alt="" class="thumbnail">
                                </div>
                                <div class="page_Description">
                                    <h4 id="service-title-renovation">Renovation Operations</h4>
                                    <p>Full interior and exterior renovation — from demolition and structural work to finishes and fixtures.</p>
                                    <div class="learn_More_Container">
                                    <a href="" class="learn_More_Page">Learn More</a>
                                    <div class="arrow-Right"></div></div>
                                </div>`,
    "Construction Operations": `<div class="page_Img_Wrapper">
                                    <img src="./Images/Services/construction.jpg" 
                                    alt="" class="thumbnail">
                                </div>
                                <div class="page_Description">
                                    <h4 id="service-title-construction">Construction Operations</h4>
                                    <p>New builds and major structural works, managed end-to-end with certified construction teams.</p>
                                    <div class="learn_More_Container">
                                    <a href="" class="learn_More_Page">Learn More</a>
                                    <div class="arrow-Right"></div></div>
                                </div>`,
    "Landscaping": `<div class="page_Img_Wrapper">
                                    <img src="./Images/Services/landscaping.jpg" 
                                    alt="" class="thumbnail">
                                </div>
                                <div class="page_Description">
                                    <h4 id="service-title-landscaping">Landscaping</h4>
                                    <p>Outdoor design and implementation — gardens, terraces, driveways, and green spaces.</p>
                                    <div class="learn_More_Container">
                                    <a href="" class="learn_More_Page">Learn More</a>
                                    <div class="arrow-Right"></div></div>
                                </div>`,
    "Coordination with architects and designers": `<div class="page_Img_Wrapper">
                                    <img src="https://www.bestdegreeprograms.org/wp-content/uploads/2021/12/shutterstock_275946575-scaled.jpg" 
                                    alt="" class="thumbnail">
                                </div>
                                <div class="page_Description">
                                    <h4 id="service-title-coordination">Coordination with architects and designers</h4>
                                    <p>We liaise directly with your architect or designer, or connect you with trusted professionals from our network.</p>
                                    <div class="learn_More_Container">
                                    <a href="" class="learn_More_Page">Learn More</a>
                                    <div class="arrow-Right"></div></div>
                                </div>`,
    "HVAC systems installation": `<div class="page_Img_Wrapper">
                                    <img src="./Images/Services/7F8A1768-HDR-редакт.jpg" 
                                    alt="" class="thumbnail">
                                </div>
                                <div class="page_Description">
                                    <h4 id="service-title-hvac">HVAC systems installation</h4>
                                    <p>Supply, installation, and commissioning of heating, ventilation, and air conditioning systems.</p>
                                    <div class="learn_More_Container">
                                    <a href="" class="learn_More_Page">Learn More</a>
                                    <div class="arrow-Right"></div></div>
                                </div>`,
    "Furniture Production Oversight": `<div class="page_Img_Wrapper">
                                    <img src="https://p2mnet.com/wp-content/uploads/2016/10/Aegis-furniture2-1920x1080.jpg" 
                                    alt="" class="thumbnail">
                                </div>
                                <div class="page_Description">
                                    <h4 id="service-title-furniture">Furniture Production Oversight</h4>
                                    <p>We manage custom furniture production and procurement, ensuring quality and on-time delivery.</p>
                                    <div class="learn_More_Container">
                                    <a href="" class="learn_More_Page">Learn More</a>
                                    <div class="arrow-Right"></div></div>
                                </div>`,
    "Cleaning Operations": `<div class="page_Img_Wrapper">
                                    <img src="https://mistyclean.com/wp-content/uploads/2024/07/Banner-img-Professional-cleaning-Services-in-Maryland-scaled.webp" 
                                    alt="" class="thumbnail">
                                </div>
                                <div class="page_Description">
                                    <h4 id="service-title-cleaning">Cleaning Operations</h4>
                                    <p>Post-construction and ongoing cleaning services to prepare your space for use.</p>
                                    <div class="learn_More_Container">
                                    <a href="" class="learn_More_Page">Learn More</a>
                                    <div class="arrow-Right"></div></div>
                                </div>`,
    "Purchase and Logistics of Building Material": `<div class="page_Img_Wrapper">
                                    <img src="https://www.mintsoft.com/media/chzlxsn3/types_of_warehouse_blog.png?width=1200&height=630&v=1dab8149acd8d70" 
                                    alt="" class="thumbnail">
                                </div>
                                <div class="page_Description">
                                    <h4 id="service-title-building">Purchase and Logistics of Building Material</h4>
                                    <p>We source, price-check, and deliver all materials — saving you time and reducing costs through supplier relationships.</p>
                                    <div class="learn_More_Container">
                                    <a href="" class="learn_More_Page">Learn More</a>
                                    <div class="arrow-Right"></div></div>
                                </div>`
}

const wwaIntro = document.querySelector('.wwa_Intro');
const serviceBox = document.querySelector(".service_Box");
const serviceText = document.querySelector(".service_Text");
let autoSlideOngoing = false;
let isPaused = false;
let quedued = false;

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

                    selected.setAttribute('aria-expanded', 'false');
                    
                }
                
                let lastFocused = document.activeElement;

                item.classList.add("selected");

                item.setAttribute('aria-expanded', 'true');

                thePage.style.background = "var(--distinguished-window)";
    
                let topic = item.getElementsByTagName("h3").item(0).textContent;
                thePage.innerHTML = serviceTextContent[topic];
                thePage.classList.remove("slide_Up");

                serviceInfoPage.classList.add('service_Info_Page_Activate');
                serviceInfoPage.setAttribute('role', 'dialog');
                serviceInfoPage.setAttribute('aria-modal', 'true');
                serviceInfoPage.setAttribute('aria-labelledby', `${thePage.getElementsByTagName("h4").item(0).id}`);


                const closeButton = document.createElement("button");
                closeButton.setAttribute('aria-label', 'Close service details');

                const closeButtonIcon = document.createElement("img");
                closeButtonIcon.src = "../Images/Icons/close-circle-svgrepo-com.svg";
                closeButtonIcon.height = 40;

                closeButton.appendChild(closeButtonIcon);
                closeButton.classList.add("closeBtn");
                thePage.appendChild(closeButton);


                closeButton.addEventListener('click', () => {

                    clearServiceItem();
                    if (lastFocused) lastFocused.focus();
                    document.removeEventListener('keydown', modalEscHandler)
                });

                const backdrop = document.createElement("div");
                backdrop.classList.add("page_Background");
                thePage.appendChild(backdrop);
                document.body.style.overflow = "hidden"
                document.querySelector(".top_Panel").classList.add("hidden");
                
                if (lastFocused) closeButton.focus();

                thePage.addEventListener('keydown', (e) => {
                    if (e.key !== 'Tab') return;

                    const focusables = thePage.querySelectorAll('button, a, input, [tabindex]:not([tabindex="-1"])');
                    
                    if(focusables.length > 0) {
                        const first = focusables[0];
                        const last = focusables[focusables.length - 1];

                        if (e.shiftKey && document.activeElement === first) {
                            last.focus();
                            e.preventDefault();
                        } else if (!e.shiftKey && document.activeElement === last) {
                            first.focus();
                            e.preventDefault();
                        }
                    }

                });

                const modalEscHandler = (e) => {
                    if (e.key === 'Escape') {
                        document.removeEventListener('keydown', modalEscHandler);
                        clearServiceItem();
                        lastFocused.focus();
                    }
                }
                
                document.addEventListener('keydown', modalEscHandler);
    
            }

        }
        else {

            if (!item.classList.contains("selected")) {
    
                let selected = document.querySelector(".selected");
                
                if (selected) {
    
                    selected.classList.remove("selected");
                    selected.setAttribute('aria-expanded', 'false');
                    
                }
                
                item.classList.add("selected");
                serviceInfoPage.classList.add('service_Info_Page_Activate');
                thePage.style.background = "var(--distinguished-window)";
    
                let topic = item.getElementsByTagName("h3").item(0).textContent;
                thePage.innerHTML = serviceTextContent[topic];
                thePage.classList.remove("slide_Up");
                thePage.classList.add("slide_Up");

                item.setAttribute('aria-expanded', 'true');
                serviceInfoPage.setAttribute('aria-labelledby', `${thePage.getElementsByTagName("h4").item(0).id}`);

            }

        }
        
}

const autoSlide = () => {
    let selectedService = () => document.querySelector(".selected");
    let selectedServiceIndex;
    let nextSelection;
    autoSlideOngoing = true;
    
    if(selectedService()) {
        if (quedued) return;
        quedued = true;

        if (window.innerWidth < 1220) {
            return; // cancels the function to avoid a bug on mobile where if you quickly select an item after resizing the viewport it enables autoplay, which should be off for mobile by default.
        }

        if (isPaused) {
            setTimeout(() => {quedued = false;}, 5000);
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
        
        autoSlideOngoing = false;
        setTimeout(() => {quedued = false;}, 5000); // This is here to prevent a rapid fire autoslide after repeatedly selecting and deselecting a service window, this ensures that multiple async autoslide functions do not get queued together.
        setTimeout(autoSlide, 5000);
        
    }
        
    
}


const clearServiceItem = () => {
    const selected = document.querySelector(".selected");
    if (selected) {

        selected.setAttribute('aria-expanded', 'false');
        selected.classList.remove("selected");
    }
    serviceInfoPage.classList.remove('service_Info_Page_Activate');
    thePage.style.background = "transparent";
    thePage.innerHTML = '';
    document.body.style.overflow = "scroll";
    document.querySelector(".top_Panel").classList.remove("hidden");
    navbar.style.top = `${header.clientHeight / 2}px`;
}

if (window.innerWidth > 1220) {

    
    window.onload = () => {
        if(!document.querySelector(".selected")) {

            selectServiceFunction(servicesList[0]);
        }
    }

    setTimeout(autoSlide, 5000);
    serviceBox.addEventListener('mouseenter', () => {isPaused = true;});
    serviceBox.addEventListener('mouseleave', () => {if(!serviceBox.matches(':focus-within')) isPaused = false;});
    serviceBox.addEventListener('focusin', () => { isPaused = true; });
    serviceBox.addEventListener('focusout', () => {if(!serviceBox.matches(':hover')) isPaused = false;});
    if (serviceBox.matches(':hover') || serviceBox.matches(':focus-within')) {
        isPaused = true;
    }
}


servicesList.forEach((item, i, items) => {


    let selectItem = () => {selectServiceFunction(item);
        if (window.innerWidth > 1220) {setTimeout(autoSlide, 5000)};
    };
    
    item.addEventListener('click', selectItem);

    item.addEventListener('keydown', (e) => {

        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            selectItem();
        }

        if (e.key === 'ArrowUp') {

            e.preventDefault();
            items[i-1] ? items[i-1].focus() : items[items.length - 1].focus()

        }
        else if (e.key === 'ArrowDown') {

            e.preventDefault();
            items[i+1] ? items[i+1].focus() : items[0].focus()

        }
        else if (e.key === 'ArrowLeft') {

            e.preventDefault();
            let contactButton = serviceText.children[2];
            contactButton.focus();
            contactButton.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    items[i].focus();
                }
            }, { once: true });

        }
        else if (e.key === 'ArrowRight') {

            e.preventDefault();
            let learnMoreButton = serviceBox.querySelector(".learn_More_Page");
            learnMoreButton.focus();
            learnMoreButton.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    items[i].focus();
                }
            }, { once: true });

        }

    });

});

if (serviceBox) {
    
    if (window.innerWidth < 1220) {

        serviceBox.style.marginLeft = `0px`;
    }
    else {
        // serviceBox.style.marginLeft = `${(window.innerWidth - (serviceBox.clientWidth - serviceInfoPage.clientWidth + serviceText.clientWidth)) / 2}px`;
        // wwaIntro.style.width = `${serviceBox.clientWidth - serviceInfoPage.clientWidth + serviceText.clientWidth}px`;
        wwaIntro.style.width = `100vw`;

    }
}

window.addEventListener("resize", () => {

    if (window.innerWidth < 1220) {

        clearServiceItem();
        // if (autoSlideOngoing) {console.log(autoSlideOngoing)};
        setTimeout(clearServiceItem, 100);
    }

    if (window.innerWidth > 1220 && !document.querySelector(".selected")) {

        clearServiceItem();
        selectServiceFunction(servicesList[0])

    }

    if(window.innerWidth > 1220){
        // wwaIntro.style.width = `90vw`;

        wwaIntro.style.width = `100vw`;
    }

    if (serviceBox) {
    
        if (window.innerWidth < 1220) {

            serviceBox.style.marginLeft = `0px`;

            if(serviceInfoPage.clientHeight > 1) {
                

                if (!document.querySelector(".closeBtn")) {

                    const closeButton = document.createElement("div");

                    const closeButtonIcon = document.createElement("img");
                    closeButtonIcon.src = "../Images/Icons/close-circle-svgrepo-com.svg";
                    closeButtonIcon.height = 40;

                    closeButton.appendChild(closeButtonIcon);
                    closeButton.classList.add("closeBtn");
                    thePage.appendChild(closeButton);


                    closeButton.addEventListener('click', clearServiceItem);

                }

                if(!document.querySelector(".page_Background")) {

                    const backdrop = document.createElement("div");
                    backdrop.classList.add("page_Background");
                    thePage.appendChild(backdrop);
                    document.body.style.overflow = "hidden";
                    document.querySelector(".top_Panel").classList.add("hidden");
                }



            }
        }
        else {
            // serviceBox.style.marginLeft = `${(window.innerWidth - ((3 * serviceText.clientWidth + 8 * window.innerWidth/100))) / 2}px`;
            // wwaIntro.style.width = `${3 * serviceText.clientWidth + 8 * window.innerWidth/100}px`;
            wwaIntro.style.width = `100vw`;
            if (serviceInfoPage.clientHeight > 1) {

                document.body.style.overflow = "scroll";
                document.querySelector(".top_Panel").classList.remove("hidden");
        
                if (document.querySelector(".page_Background")){
                    document.querySelector(".page_Background").remove();
                }

                if (document.querySelector(".closeBtn")){
                    document.querySelector(".closeBtn").remove();
                }
                
            }
        }
    }
})

