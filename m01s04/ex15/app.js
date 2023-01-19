var person = {
  name: 'Alexandru',
  surname: 'Rusovici',
  age: 35,
  petOwner: true,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steve',
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

console.warn(`Folosind fisierele de la exercitiul 06,
si doua bucle for imbricate (nested) afiseaza diferenta de varsta
dintre fiecare membru al arrayului friends si ceilalti membri.
Poti folosi metoda pentru a converti numerele negative in pozitive. `);

for (let i = 0; i < person.friends.length; i++) {
  for (let j = person.friends.length - 1; j >= 0; j--) {
    const diff = Math.abs(person.friends[i].age - person.friends[j].age);

    if (i === j) {
      continue;
    }

    console.log(
      `Intre ${person.friends[i].name} si ${person.friends[j].name} este o diferenta de ${diff} ani.`,
    );
  }
}
