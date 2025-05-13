const button = document.querySelector('.learn_More');
const thumbnail = document.querySelector('.thumbnail');

button.addEventListener('mouseenter', () => {
  thumbnail.style.transform = 'scale(1.2)';
});

button.addEventListener('mouseleave', () => {
  thumbnail.style.transform = 'scale(1)';
});