console.warn(
  `Folosind un bloc if si keywordul continue,
  afiseaza mesajul "Acest numar este multiplu de 7."
  atunci cand este cazul.`,
);

var i = 0;

for (i = 0; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log(`${i} Este un numar este divizibil cu 7`);
    continue;
  }
}

console.warn(
  `Folosind metoda prompt cere utilizatorului numarul pentru care
  trebuie sa gasesti multipli si afiseaza mesajul: “Acest numar este multiplu de x.” `,
);

// var i = 0;
// var userInput = prompt(`Introdu un numar`);

// for (i = 0; i <= 100; i++) {
//   if (i % userInput === 0) {
//     console.log(`${i} este multiplu de ${userInput}.`);
//   }
// }

console.warn(
  `Folosind metoda prompt cere utilizatorului
  numarul pentru care trebuie sa gasesti multipli si afiseaza mesajul:
  “Acest numar este multiplu de x.” Afla multiplii pentru acest numar intre 1 si 1000. `,
);

// var i = 0;
// var userInput = prompt(`Introdu un numar`);

// for (i = 0; i <= 1000; i++) {
//   if (i % userInput === 0) {
//     console.log(`${i} este multiplu de ${userInput}.`);
//   }
// }

console.warn(
  `Folosind inca o metoda prompt, cere utilizatorului si
  limita superioara pana la care sa numere bucla si sa afiseze multipli.`,
);

var i = 0;
var multiplicator = prompt(`Introduc numarul multiplicator.`);
var limit = prompt(`Introduc limita maxima.`);

for (i = 0; i <= limit; i++) {
  if (i % multiplicator === 0) {
    console.log(`${i} este multiplu de ${multiplicator}.`);
  }
}
