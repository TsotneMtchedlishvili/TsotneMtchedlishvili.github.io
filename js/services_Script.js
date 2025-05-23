const button = Array.from(document.querySelectorAll('.learn_More'));
const thumbnail = Array.from(document.querySelectorAll('.thumbnail'));

// console.log(button);
// console.log(thumbnail);

button.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        thumbnail[button.indexOf(item)].style.transform = 'scale(1.2)';
      });
});

button.forEach((item) => {
    item.addEventListener('mouseleave', () => {
        thumbnail[button.indexOf(item)].style.transform = 'scale(1)';
      });
})

