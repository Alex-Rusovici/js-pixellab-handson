const box = document.querySelector('.box');
const controlButton = document.querySelector('.control');
const animationClass = 'animate-class';

setTimeout(() => {
  box.classList.add(animationClass);

  // callback hell
  setTimeout(() => {
    box.classList.remove(animationClass);
  }, 4 * 1000);
}, 4 * 1000);

controlButton.addEventListener('click', (event) => {
  // this este window
  const controlButton = event.currentTarget;

  const box = controlButton.previousElementSibling;

  if (box.classList.contains(animationClass)) {
    box.classList.remove(animationClass);
    controlButton.innerText = 'Aplica';
  } else {
    box.classList.add(animationClass);
    controlButton.innerText = 'Elimina';
  }
});
