const intro_Home = document.querySelector('.intro_Home');
// const header = document.querySelector('.home_Header');
const intro_Container = document.querySelector('.intro_Container');

let multiplier = 0;

if (window.innerWidth < 620) {

    multiplier = 0.6;
}
else {
    multiplier = 0.8 ;
}


// intro_Home.style.height = `${window.innerHeight - header.clientHeight}px`;
// console.log(intro_Container.style.height);
// intro_Container.style.height = `${intro_Home.clientHeight * multiplier}px`;
// console.log(intro_Container.style.height);

window.addEventListener("resize", () => {

    if (window.innerWidth < 620) {

        multiplier = 0.6;
    }
    else {
        multiplier = 0.8;
    }
    
    
    // intro_Home.style.height = `${window.innerHeight - header.clientHeight}px`;
    // intro_Container.style.height = `${intro_Home.clientHeight * multiplier}px`;
})