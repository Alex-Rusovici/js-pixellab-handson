var person = {
  name: 'Alex',
  surname: 'Rusovici',
  age: 30,
  petOwner: true,
  skills: ['html', 'javascript', 'css'],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },

    { name: 'Steven', surname: 'Stevenson', age: 31 },

    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(`"Ma numesc Alex Rusovici si stiu html si css."`);

console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
    person.surname +
    ' si stiu ' +
    person.skills[0] +
    ' si ' +
    person.skills[2] +
    '.',
);

console.warn(`"Sunt Alex si acum invat JavaScript."`);

console.log('Sunt ' + person.name + ' si acum invat JavaScript.');

console.warn(`"Am 3 prieteni: Larry, Steven si Carol."`);

console.log(
  'Am ' +
    person.friends.length +
    ' prieteni: ' +
    person.friends[0].name +
    ', ' +
    person.friends[1].name +
    ' si ' +
    person.friends[2].name +
    '.',
);

console.warn(`"Ma numesc Alex Rusovici si vreau sa invat javascript."`);

console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
    person.surname +
    ' si vreau sa invat ' +
    person.skills[1] +
    '.',
);

console.warn(`"Sunt Alex si stiu HTML si CSS."`);

console.log('Sunt ' + person.name + ' si stiu HTML si CSS.');

console.warn(`"Am 3 prieteni: Larryson, Stevenson si Carolson."`);

console.log(
  'Am ' +
    person.friends.length +
    ' prieteni: ' +
    person.friends[0].surname +
    ', ' +
    person.friends[1].surname +
    ' si ' +
    person.friends[2].surname +
    '.',
);

console.warn(`"Numele meu este Alex Rusovici, am 30 ani si 3 prieteni."`);

console.log(
  'Numele meu este ' +
    person.name +
    ' ' +
    person.surname +
    ', am ' +
    person.age +
    ' ani si ' +
    person.friends.length +
    ' prieteni.',
);
