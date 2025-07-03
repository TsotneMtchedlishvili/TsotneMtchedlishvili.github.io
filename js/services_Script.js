const buttonServices = Array.from(document.querySelectorAll('.learn_More'));
const thumbnail = Array.from(document.querySelectorAll('.thumbnail'));
const serviceContainer = document.querySelector(".service_Container");
const serviceDescripton = document.querySelectorAll(".service_Description")

// console.log(button);
// console.log(thumbnail);

buttonServices.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        thumbnail[buttonServices.indexOf(item)].style.transform = 'scale(1.2)';
      });
});

buttonServices.forEach((item) => {
    item.addEventListener('mouseleave', () => {
        thumbnail[buttonServices.indexOf(item)].style.transform = 'scale(1)';
      });
})

