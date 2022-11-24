var person = {
  name: 'Alexandru',
  surname: 'Rusovici',
  age: 30,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: false,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  },
};

console.warn(`Afiseaza varsta prietenei Carol`);

console.log(person.friends.carol.age.toString());

console.warn(
  `Folosind anul curent calculeaza si afiseaza anul de nastere al lui Larry`,
);

console.log((2022 - person.friends.larry.age).toString());

console.warn(`

`);

console.log(
  person.friends.steven.name +
    ' este cu ' +
    (person.friends.steven.age - person.friends.larry.age) +
    ' ani mai mare decat ' +
    person.friends.larry.name +
    '.',
);

console.warn(`
Prietenul meu Steven Stevenson are xx ani
`);

console.log(
  'Prietenul meu ' +
    person.friends.steven.name +
    ' ' +
    person.friends.steven.surname +
    ' are ' +
    person.friends.steven.age +
    ' ani.',
);

console.warn(`Prietenii mei sunt: steven, carol si larry`);

console.log(
  'Prietenii mei sunt: ' +
    person.friends.steven.name +
    ', ' +
    person.friends.carol.name +
    ' si ' +
    person.friends.larry.name +
    '.',
);

console.warn(`numarul de caractere al numeul de familie al lui steven`);

console.log(person.friends.steven.surname.length.toString());
