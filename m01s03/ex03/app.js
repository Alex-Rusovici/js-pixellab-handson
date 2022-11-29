var person = {
  name: 'Alexandru',
  surname: 'Rusovici',
  friends: {},
};

var larry = {
  name: 'Larry',
  surname: 'Larryson',
  friends: {},
};

var carol = {
  name: 'Carol',
  surname: 'Carolson',
  friends: {},
};

var steven = {
  name: 'Steven',
  surname: 'Stevenson',
  friends: {},
};

var andra = {
  name: 'Andra',
  surname: 'Andrason',
  friends: {},
};

person.friends.larry = larry;
person.friends.steven = steven;
person.friends.andra = andra;

larry.friends.person = person;
steven.friends.person = person;
andra.friends.person = person;

steven.friends.larry = larry;
larry.friends.steven = steven;

steven.friends.andra = andra;
andra.friends.steven = steven;

carol.friends.andra = andra;
andra.friends.carol = carol;

delete larry.friends.person;
delete person.friends.larry;

console.warn(`Afiseaza numele complet al lui Person folosind obiectul Larry.`);

console.log(
  larry.friends.steven.friends.person.name +
    ' ' +
    larry.friends.steven.friends.person.surname,
);

console.warn(`Afiseaza numele complet a lui Larry folosind obiectul person`);

console.log(
  person.friends.steven.friends.larry.name +
    ' ' +
    person.friends.steven.friends.larry.surname,
);

console.warn(`Folosind obiectul Carol afiseaza numele complet al lui person`);

console.log(
  carol.friends.andra.friends.person.name +
    ' ' +
    carol.friends.andra.friends.person.surname,
);

console.warn(
  `Folosind obiectul Andra afiseaza numarul total de caractere al numelui complet al lui Person`,
);

console.log(
  (
    andra.friends.person.name.length + andra.friends.person.surname.length
  ).toString(),
);
