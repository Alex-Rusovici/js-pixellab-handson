var userName = prompt('Introdu prenumele tau.');
var userSurname = prompt('Introdu numele tau.');
var message02 = '';
var message02Element = document.getElementById('message02');

if (
  userName === null ||
  userName.trim().length === 0 ||
  userSurname === null ||
  userSurname.trim().length === 0
) {
  message02 = 'Nu ai introdus un nume sau un prenume corect';
} else {
}
console.log(`${userName} ${userSurname}`);

message02Element.innerText = message02;

// "Numele meu este: -Nume- -Prenume-"

var fullnameElement = document.getElementById('fullname');

fullname = `Numele meu este: ${userName} ${userSurname}.`;

fullnameElement.innerText = fullname;

// Numele introdus are xxx caractere

var charactersElement = document.getElementById('characters');

characters = `Numele introdus are ${
  userName.length + userSurname.length
} caractere, din care prenumele are ${
  userName.length
} caractere, iar numele are ${userSurname.length} caractere.`;

charactersElement.innerText = characters;

// Numele introdus contine / nu contine litra 'a'

var letter = 'a';
var lettersElement = document.getElementById('letters');

if (userName.includes(letter) || userSurname.includes(letter)) {
  letters = `Numele contine litera ${letter}`;
} else {
  letters = `Numele nu contine litera ${letter}`;
}

lettersElement.innerText = letters;
