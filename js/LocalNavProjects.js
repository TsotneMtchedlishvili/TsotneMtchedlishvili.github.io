const navFilter = document.querySelector(".nav_Filter");
let filterButton;
let navFilterButtons = Array.from(document.getElementsByClassName("category"));
let MenuFilterButtons = Array.from(document.getElementsByClassName("category")) ?? null;


const assignBtnsFunctionality = (buttons) => {

    buttons.forEach((button) => {
    
        button.addEventListener("click", () => {


        for(let i = 0; i < buttons.length; i++) {

            if (buttons[i].classList.contains("pressed") && buttons[i] !== button) {

                buttons[i].classList.remove("pressed");
                console.log(button)
            }
            
        }

        button.classList.toggle("pressed");
        fillOutList(projectList, button, projects);

    })})
}



if (window.innerWidth < 750) {

    navFilter.innerHTML = `<button class="filter_Button"">Filters</button>`;
    let filterBtn = document.querySelector(".filter_Button");
    filterBtn.addEventListener("click", () => {

        const filterElement = document.createElement("div");
        filterElement.classList.add("filter_Element");
        filterElement.innerHTML = `<button class="category all pressed">All Projects</button>
        <button class="category residential">Residential Construction</button>
        <button class="category renovation">Renovation</button>
        <button class="category landscaping">Landscaping</button>`
        navFilter.appendChild(filterElement);
    
        const closeButtonLocal = document.createElement("div");
    
        const closeButtonIcon = document.createElement("img");
        closeButtonIcon.src = "../Images/Icons/close-circle-svgrepo-com.svg";
        closeButtonIcon.height = 40;
    
        closeButtonLocal.appendChild(closeButtonIcon);
        closeButtonLocal.classList.add("closeBtn");
        filterElement.appendChild(closeButtonLocal);
    
        const backdrop = document.createElement("div");
        backdrop.classList.add("page_Background");
        navFilter.appendChild(backdrop);
        document.body.style.overflow = "hidden";
    
        backdrop.style.top = "0";
        backdrop.style.left = "0";
        backdrop.style.zIndex = "1";
        filterElement.style.zIndex = "2";

        MenuFilterButtons = Array.from(document.getElementsByClassName("category"))
        assignBtnsFunctionality(MenuFilterButtons);
    
        closeButtonLocal.addEventListener('click', () => {
            document.body.style.overflow = "scroll";
            filterElement.remove();
            backdrop.remove();
    
        });
    });

}
else {

    navFilter.innerHTML = `<button class="category all pressed">All Projects</button>
            <button class="category residential">Residential Construction</button>
            <button class="category renovation">Renovation</button>
            <button class="category landscaping">Landscaping</button>`;

            navFilterButtons = Array.from(document.getElementsByClassName("category"));
    assignBtnsFunctionality(navFilterButtons);
}



window.addEventListener("resize", () => {

    document.body.style.overflow = "scroll";


    if (window.innerWidth < 750) {

        navFilter.innerHTML = `<button class="filter_Button">Filters</button>`;
        filterButton = document.querySelector(".filter_Button");
        filterButton.addEventListener("click", () => {

            const filterElement = document.createElement("div");
            filterElement.classList.add("filter_Element");
            filterElement.innerHTML = `<button class="category all pressed">All Projects</button>
            <button class="category residential">Residential Construction</button>
            <button class="category renovation">Renovation</button>
            <button class="category landscaping">Landscaping</button>`
            navFilter.appendChild(filterElement);
        
            const closeButtonLocal = document.createElement("div");
        
            const closeButtonIcon = document.createElement("img");
            closeButtonIcon.src = "../Images/Icons/close-circle-svgrepo-com.svg";
            closeButtonIcon.height = 40;
        
            closeButtonLocal.appendChild(closeButtonIcon);
            closeButtonLocal.classList.add("closeBtn");
            filterElement.appendChild(closeButtonLocal);
        
            const backdrop = document.createElement("div");
            backdrop.classList.add("page_Background");
            navFilter.appendChild(backdrop);
            document.body.style.overflow = "hidden";
        
            backdrop.style.top = "0";
            backdrop.style.left = "0";
            backdrop.style.zIndex = "1";
            filterElement.style.zIndex = "2";

            MenuFilterButtons = Array.from(document.getElementsByClassName("category"))
            assignBtnsFunctionality(MenuFilterButtons);
        
            closeButtonLocal.addEventListener('click', () => {
                document.body.style.overflow = "scroll";
                filterElement.remove();
                backdrop.remove();
        
            });
        
        });
    }
    else {

        navFilter.innerHTML = `<button class="category all pressed">All Projects</button>
                <button class="category residential">Residential Construction</button>
                <button class="category renovation">Renovation</button>
                <button class="category landscaping">Landscaping</button>`;
    
                

                navFilterButtons = Array.from(document.getElementsByClassName("category"));
                assignBtnsFunctionality(navFilterButtons);
    }

});

