var person = {
  firstName: 'Alex',
  lastName: 'Rusovici',
  birthYear: 1992,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(
  `Afiseaza in consola folosind metoda forEach() numele fiecarui animal. `,
);

person.pets.forEach(function (pet) {
  console.log(pet.name);
});

console.warn(`Folosind o bucla for afiseaza suma anilor animalelor. `);

let sumPetAge = 0;

for (let i = 0; i < person.pets.length; i++) {
  // if (true) {
  sumPetAge += person.pets[i].age;
  // }

  // aici ar fi nevoie de if statement? sau este situatia in care este mult mai bine sa o scriem ca sa o putem vedea?
}

console.log(sumPetAge);

console.warn(
  `Folosind forEach() afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.`,
);

person.pets.forEach(function (pet) {
  console.log(`${pet.name} este ${pet.species} si are ${pet.age} ani.`);
});

console.warn(
  `Folosind o bucla for afiseaza cate una pe linie propozitiile:
  “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).`,
);

const currentYear = new Date().getFullYear();

for (let i = 0; i < person.pets.length; i++) {
  const pet = person.pets[i];
  const diff = currentYear - person.birthYear - pet.age;

  console.log(
    `Intre ${person.firstName} si ${pet.name} este o diferenta de ${diff} ani.`,
  );
}

console.warn(
  `Folosind o bucla for afiseaza in ordine inversa numele animalelor din array sub forma de propozitii: “Animalul meu se numeste xxxx.”. `,
);

for (let i = person.pets.length - 1; i >= 0; i--) {
  const pet = person.pets[i];

  console.log(`Animalul meu se numeste ${pet.name}`);
}

console.warn(
  `Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia:
  “xxx este cel mai batran animal pe care il am, dar intre noi este o diferenta de xx ani.” `,
);

let nameOfOldest = '';
let ageOfOldest = 0;

for (i = 0; i < person.pets.length; i++) {
  const pet = person.pets[i];
  const diff = currentYear - person.birthYear - pet.age;

  if (ageOfOldest < pet.age) {
    ageOfOldest = pet.age;
    nameOfOldest = pet.name;

    console.log(
      `${nameOfOldest} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${diff} ani`,
    );
  }
}

// aici nu cred ca am gandit bine algoritmul ... cred ca mai intai trebuie sa trec prin fiecare pets.age si sa vad care este mai mare si ulterior sa ii dau console.log?
// o sa revin peste el

console.warn(
  `Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.`,
);

var message = 'Am ';

person.pets.forEach(function (pet, index) {
  let punctuation = ', ';

  if (index === person.pets.length - 1) {
    punctuation = '.';
  }

  if (index === person.pets.length - 2) {
    punctuation = ' si ';
  }

  message += `${pet.species}${punctuation}`;
});

console.log(message);
