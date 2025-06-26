const projects = document.querySelectorAll('.project_Card');
const projectList = document.querySelector(".projects_Grid");


const fillOutList = (list, button, projs) => {

    let filterBias;
    let selectedProjects = [];

    Array.from(button.classList).forEach((classItem) => {

        if (classItem !== "category" || classItem !== "pressed") {

            filterBias = classItem;
        }
    })
    
console.log(filterBias);
console.log(projs.length);
    

     if(filterBias === "all") {

        for (let i = 0; i < projs.length; i++) {

            list.innerHTML =+ projs[i].innerHTML;
            
        }
        
     }
     else {

        for (let i = 0; i < projs.length; i++) {

            if (projs[i].classList.contains(filterBias)) {
    
                selectedProjects.push(projs[i]);
                console.log(`added ${projs[i]}`)
            }

        }
        
        for (let i = 0; i < selectedProjects.length; i++) {

            list.innerHTML += selectedProjects[i].innerHTML;
        }
        
     }
    
};

// console.log(nav)

navFilterButtons.forEach((button) => {
    
    button.addEventListener("click", () => {


    for(let i = 0; i < navFilterButtons.length; i++) {

        if (navFilterButtons[i].classList.contains("pressed") && navFilterButtons[i] !== button) {

            navFilterButtons[i].classList.remove("pressed");
            console.log(button)
        }
        
    }

    button.classList.toggle("pressed");
    fillOutList(projectList, button, projects);

})}


)

