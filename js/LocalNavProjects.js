const navFilter = document.querySelector(".nav_Filter");
let filterButton;
let navFilterButtons = Array.from(document.getElementsByClassName("category"));

if (window.innerWidth < 750) {

    navFilter.innerHTML = `<button class="filter_Button"">Filters</button>`;
    let filterButton = document.querySelector(".filter_Button");
    filterButton.addEventListener("click", () => {

        // console.log("no");
        const filterElement = document.createElement("div");
        filterElement.classList.add("filter_Element");
        filterElement.innerHTML = `<button class="category all pressed">All Projects</button>
        <button class="category residential">Residential Construction</button>
        <button class="category renovation">Renovation</button>
        <button class="category landscaping">Landscaping</button>`
        // console.log(filterElement);
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
}








// console.log(window.innerWidth)



window.addEventListener("resize", () => {

    document.body.style.overflow = "scroll";

    

        
        // filterButton.addEventListener("click", filterNavPopOut());


    if (window.innerWidth < 750) {

        navFilter.innerHTML = `<button class="filter_Button">Filters</button>`;
        filterButton = document.querySelector(".filter_Button");
        filterButton.addEventListener("click", () => {

            console.log("no");
            const filterElement = document.createElement("div");
            filterElement.classList.add("filter_Element");
            filterElement.innerHTML = `<button class="category all pressed">All Projects</button>
            <button class="category residential">Residential Construction</button>
            <button class="category renovation">Renovation</button>
            <button class="category landscaping">Landscaping</button>`
            // console.log(filterElement);
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
    }
});

