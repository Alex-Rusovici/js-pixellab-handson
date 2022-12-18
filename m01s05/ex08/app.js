const button = document.getElementById('clicker');
const removeEventButton = document.getElementById('remove-event');

function clickHandler() {
  alert('Ai apasat butonoul!');
}

// Folosind codul de la exercitiul 08, numeste functia
// care ruleaza la click clickHandler si foloseste-i numele ca parametru
// al metodei addEventListener in locul celei anonime.

button.addEventListener('click', clickHandler);

// La click pe acest buton nou, foloseste metoda
// removeEventListener al variabilei button si foloseste numele
// clickHandler ca parametru.

removeEventButton.addEventListener('click', () => {
  button.removeEventListener('click', clickHandler);
});

// Adauga un buton nou in document cu id-ul query si
// folosind addEventListener() ataseaza un eveniment
// care sa foloseasca metoda prompt() pentru a afla varsta utilizatorului.

const homeworkButton = document.getElementById('home-event');

let message = '';

function clickEvent() {
  const userAge = prompt(`Cati ani ai?`);

  message += `Ai ${userAge} ani.`;

  console.log(message);
}

// Salveaza rezultatul metodei prompt intr-o variabila
// si afiseaza in consola folosind template strings: “Ai aa ani.”.

homeworkButton.addEventListener('click', clickEvent);

// Creaza un paragraf cu idul message si folosind getElementById(‘message’)
// stocheaza elementul intr-o variabila (paragraphElement),
// apoi folosind innerText, afiseaza mesajul de mai devreme in acest paragraf.

const paragraphElement = document.getElementById('paragraph');
paragraphElement.innerText = message;

// nu inteleg de ce nu merge sa imi scrie in paragraf .. si nu stiu ce nu merge
