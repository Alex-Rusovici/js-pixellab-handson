var object = {
  name: 'Alexandru',
  surname: 'Rusovici',
  age: 30,
  petOwner: true,
  carOwner: true,
};

console.warn(`
Folosind codul din index.html
introdu datele tale si afiseaza in consola numele mic si varsta
`);

console.log(object.name);

console.log(object.age.toString());

console.warn(`
Afiseaza fraza “Ma numesc xxx yyy si am xx ani.”
in consola folosind operatorul de concatenare
`);

console.log(
  'Ma numesc ' +
    object.name +
    ' ' +
    object.surname +
    ' si am ' +
    object.age +
    ' ani.',
);

console.log((2022 - object.age).toString());

console.log(
  (
    object.name +
    ' ' +
    object.surname +
    ' are ' +
    object.age +
    ' ani.'
  ).toString(),
);

console.warn(`
Afiseaza fraza “xxx s-a nascut in aaaa.”
Foloseste tot anul curent pentru a scadea varsta
`);

console.log(object.name + ' s-a nascut in ' + (2022 - object.age) + '.');
