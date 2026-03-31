const intro_Home = document.querySelector('.intro_Home');
const intro_Container = document.querySelector('.intro_Container');

let multiplier = 0;

if (window.innerWidth < 620) {

    multiplier = 0.6;
}
else {
    multiplier = 0.8 ;
}


window.addEventListener("resize", () => {

    if (window.innerWidth < 620) {

        multiplier = 0.6;
    }
    else {
        multiplier = 0.8;
    }

})