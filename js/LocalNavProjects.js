const navFilter = document.querySelector(".nav_Filter");

const filters = [
    {
        className: "all",
        label: "All Projects"
    },
    {
        className: "residential",
        label: "Residential Construction"
    },
    {
        className: "renovation",
        label: "Renovation"
    },
    {
        className: "landscaping",
        label: "Landscaping"
    }
];



const createCategoryButtons = () => {

    return filters.map((filter, index) => {

        return `
            <button
                class="category ${filter.className} ${index === 0 ? "pressed" : ""}"
                data-category="${filter.className}"
                aria-pressed="${index === 0 ? "true" : "false"}">
                ${filter.label}
            </button>
        `;

    }).join("");

};



const assignBtnsFunctionality = (buttons) => {

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            buttons.forEach((btn) => {

                btn.classList.remove("pressed");
                btn.setAttribute("aria-pressed", "false");

            });

            button.classList.add("pressed");
            button.setAttribute("aria-pressed", "true");

            fillOutList(projectList, button, projects);

        });

    });

};



const openMobileFilters = () => {

    const filterElement = document.createElement("div");
    filterElement.classList.add("filter_Element");
    filterElement.setAttribute("role", "dialog");
    filterElement.setAttribute("aria-modal", "true");

    filterElement.innerHTML = createCategoryButtons();

    const closeButton = document.createElement("button");
    closeButton.classList.add("closeBtn");
    closeButton.setAttribute("aria-label", "Close filters");

    const closeButtonIcon = document.createElement("img");
    closeButtonIcon.src = "../Images/Icons/close-circle-svgrepo-com.svg";
    closeButtonIcon.height = 40;
    closeButtonIcon.alt = "";
    closeButtonIcon.setAttribute("aria-hidden", "true");

    closeButton.appendChild(closeButtonIcon);
    filterElement.appendChild(closeButton);



    const backdrop = document.createElement("div");
    backdrop.classList.add("page_Background");

    
    backdrop.style.position = "fixed";
    backdrop.style.inset = "0";
    backdrop.style.zIndex = "999";

    filterElement.style.position = "fixed";
    filterElement.style.zIndex = "1000";



    const closeFilters = () => {

        document.body.style.overflow = "";

        filterElement.remove();
        backdrop.remove();

        document.removeEventListener("keydown", handleEscape);

    };



    const handleEscape = (e) => {

        if (e.key === "Escape") {
            closeFilters();
        }

    };



    backdrop.addEventListener("click", closeFilters);
    closeButton.addEventListener("click", closeFilters);
    document.addEventListener("keydown", handleEscape);



    navFilter.appendChild(backdrop);
    navFilter.appendChild(filterElement);

    document.body.style.overflow = "hidden";



    const mobileButtons = Array.from(
        filterElement.querySelectorAll(".category")
    );

    assignBtnsFunctionality(mobileButtons);



    const firstButton = filterElement.querySelector(".category");
    if (firstButton) firstButton.focus();

};



const renderDesktopFilters = () => {

    navFilter.innerHTML = createCategoryButtons();

    const buttons = Array.from(
        navFilter.querySelectorAll(".category")
    );

    assignBtnsFunctionality(buttons);

};



const renderMobileTrigger = () => {

    navFilter.innerHTML = `
        <button
            class="filter_Button"
            aria-label="Open project filters">
            Filters
        </button>
    `;

    const filterButton = document.querySelector(".filter_Button");

    filterButton.addEventListener("click", openMobileFilters);

};



const renderFilters = () => {

    if (window.innerWidth < 750) {

        renderMobileTrigger();

    }
    else {

        renderDesktopFilters();

    }

};



renderFilters();



window.addEventListener("resize", () => {

    document.body.style.overflow = "scroll";

    renderFilters();

});