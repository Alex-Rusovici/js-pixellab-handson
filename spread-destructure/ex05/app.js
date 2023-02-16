/**
 *
 * Folosind destructurarea salveaza primul si ultimul skill in variabile numite skill1 si
 * skill3, apoi folosind aceaste variabile, afiseaza intr-un paragraf propozitia:
 * “Cunosc html si css.”.
 *
 * Intr-un mod similar destructureaza arrayul friends pentru a obtine obiectul de pe
 * pozitia 1 apoi destructureaza obiectul obtinut in variabilele friend2Name,
 * friend2Surname si friend2Age astfel incat sa le poti folosi in propozitia:
 * Ma numesc Steven Stevenson si am 31 de ani.
 *
 * Destructureaza obiectul person pentru a obtine o variabila hasPet si in functie
 * de aceasta afiseaza propozitia: “Persoana are/nu are animale”
 *
 * Destructureaza arrayul friends si obiectele de pe pozitia 0 si 2,
 * astfel incat sa poti afisa propozitiile:
 * “Prietenul meu este Larry Larryson”
 * “Carol Carolson este prietena mea”.
 */

let person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: true,
  skills: ['html', 'javascript', 'css'],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

// first exercise
const [skill1, , skill3] = person.skills;

const message1 = `Cunosc ${skill1} si ${skill3}.`;

const p1 = document.createElement('p');
p1.innerText = message1;
document.body.append(p1);

// second exercise
const [, friend2] = person.friends;
const { name: friend2Name, surname: friend2Surname, age: friend2Age } = friend2;

const message2 = `Ma numesc ${friend2Name} ${friend2Surname} si am ${friend2Age} de ani.`;

console.log(message2);

const p2 = document.createElement('p');
p2.innerText = message2;
document.body.append(p2);

// third exercise
const { petOwner: hasPet } = person;
// const hasPet = person.petOwner;

console.log(
  `Persoana ${hasPet === true ? 'are' : 'nu are'} animal de companie.`,
);

const message3 = ` Persoana ${
  hasPet === true ? 'are' : 'nu are'
} animal de companie.`;

const p3 = document.createElement('p');
p3.innerText = message3;
document.body.append(p3);

// forth exercise

const [larry, , carol] = person.friends;

const message4 = `Prietenul meu este ${larry.name} ${larry.surname}.`;
const message5 = `${carol.name} ${carol.surname} este prietena mea.`;

console.log(`Prietenul meu este ${larry.name} ${larry.surname}.`);
console.log(`${carol.name} ${carol.surname} este prietena mea.`);

const p4 = document.createElement('p');
const p5 = document.createElement('p');

p4.innerText = message4;
p5.innerText = message5;

document.body.append(p4, p5);
