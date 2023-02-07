/**Foloseste elementul image pentru a afisa intr-un paragraf mesajul
 * “Imaginea s-a incarcat.”, folosind eventul load.  */

const image = document.querySelector('.image');

console.log(image.complete);

const log = (message = '', cssClass = 'log') => {
  let paragraph = document.querySelector(`.${cssClass}`);

  if (paragraph === null) {
    paragraph = document.createElement('p');
    paragraph.classList.add(cssClass);
    document.body.prepend(paragraph);
  }

  paragraph.innerText = message;
};

log('Imaginea se incarca');

image.addEventListener('load', () => {
  log('Imaginea a fost incarcata');
});

// history DOM level 0

// image.onload = () => {
//   log('Imaginea s-a incarcat');
// };
