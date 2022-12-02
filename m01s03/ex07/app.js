var person = {
  firstName: 'Alexandru',
  lastName: 'Rusovici',
  email: 'alex@rusovici.com',
  birthYear: 1992,
  pets: [
    (archie = {
      name: 'Archie',
      species: 'pisica',
      age: 1,
    }),
    (kido = {
      name: 'Kido',
      species: 'pisica',
      age: 14,
    }),
    (argo = {
      name: 'Argo',
      species: 'dog',
      age: 7,
    }),
  ],
  zipCode: '077160',
};

console.warn(
  `Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”. Nu uita de proprietatea length a arrayului pets.`,
);

console.log(
  `Numele meu este: ${person.firstName} ${person.lastName} si am ${person.pets.length} animale.`,
);

console.warn(`Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.`);

console.log(`Am acelasi email din copilarie: ${person.email}.`);

console.warn(
  `Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”`,
);

console.log(
  `Unul din cele ${person.pets.length} animale ale mele este ${person.pets[1].species} si are ${person.pets[1].age} ani.`,
);

console.warn(
  `Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.`,
);

var currentTime = new Date();
var year = currentTime.getFullYear();

console.log((year - person.pets[2].age).toString());

console.warn(
  `Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent.`,
);

var difference = year - person.birthYear - person.pets[0].age;

console.log(difference.toString());

console.warn(
  `Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”`,
);

var petName = person.pets[0].name;

console.log(
  `Intre ${person.firstName} si ${petName} este o diferenta de ${
    year - person.birthYear - person.pets[0].age
  } ani.`,
);

console.warn(
  `Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa” (folosind bracket notation pe arrayul pets)`,
);

var elementProp01 = document.getElementById('prop01');

var prop01 = `${person.firstName}, ${person.pets[0].name}, ${person.pets[1].name}, ${person.pets[2].name} locuiesc toti in aceeasi casa.`;

elementProp01.innerText = prop01;

console.warn(
  `Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2 `,
);

var elementProp02 = document.getElementById('prop02');

var prop02 = `Diferenta de varsta dintre ${person.pets[0].name} si ${
  person.pets[2].name
} este ${person.pets[2].age - person.pets[0].age} ani.`;

elementProp02.innerText = prop02;

console.warn(
  `Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”`,
);

var elementProp03 = document.getElementById('prop03');

var prop03 = `Ma numesc ${person.firstName} ${person.lastName}, m-am nascut in ${person.birthYear} si codul meu postal este: ${person.zipCode}.`;

elementProp03.innerText = prop03;

console.warn(
  `Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent pentru a efectua scaderea.`,
);

var elementProp04 = document.getElementById('prop04');

var prop04 = `Animalele mele s-au nascut in ${year - person.pets[0].age}, ${
  year - person.pets[1].age
} respectiv ${year - person.pets[2].age}.`;

elementProp04.innerText = prop04;
