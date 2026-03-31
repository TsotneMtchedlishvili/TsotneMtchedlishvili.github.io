const projects = Array.from(document.querySelectorAll('.project_Card'));
const projectList = document.querySelector(".projects_Grid");

console.log(projects);

const fillOutList = (list, button, projs) => {

    let filterBias;
    let selectedProjects = [];

    Array.from(button.classList).forEach((classItem) => {

        if (classItem !== "category" && classItem !== "pressed") {

            filterBias = classItem;
        }
    })
    
    console.log(filterBias);
    console.log(projs.length);
        

    if(filterBias === "all") {

        for (let i = 0; i < projs.length; i++) {

            selectedProjects.push(projs[i]);
            
        }
    
    }
    else {

        for (let i = 0; i < projs.length; i++) {

            if (projs[i].classList.contains(filterBias)) {

                selectedProjects.push(projs[i]);
            }

        }
    
    }

    list.replaceChildren(...selectedProjects);
    selectedProjects = [];
    
};



