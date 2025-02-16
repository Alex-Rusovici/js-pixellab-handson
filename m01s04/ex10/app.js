var person = {
  name: 'Alexandru',
  surname: 'Rusovici',
  age: 34,
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

console.warn(
  `Folosind obiectul person si forEach, afiseaza skillurile din pozitiile impare ale arrayului.`,
);

person.skills.forEach(function (skill, index) {
  if (index % 2 !== 0) {
    console.log(skill);
  }
});

console.warn(`In mod similar, afiseaza skillurile care contin litera a`);

person.skills.forEach(function (skill) {
  if (skill.includes('a') || skill.includes('A')) {
    console.log(skill);
  }
});

console.warn(
  `Folosind forEach afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy si xxx yyy."`,
);

var message = 'Prietenii mei se numesc ';

person.friends.forEach(function (friend, index, friends) {
  var punctuation = ', ';
  var arrayLength = friends.length;

  if (index === arrayLength - 1) {
    punctuation = '.';
  }

  // if (index === arrayLength - 2) {
  //   punctuation = ' si ';
  // }

  message += `${friend.name} ${friend.surname}${punctuation}`;
});

console.log(message);

console.warn(
  `Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca au varsta mai mare decat 30 inclusiv.`,
);

var sumBirthYears = 0;

person.friends.forEach(function (friend) {
  if (friend.age >= 30) {
    sumBirthYears += friend.age;
  }
});

console.log(sumBirthYears.toString());

console.warn(
  `Folosind forEach, afiseaza suma anilor de nastere a persoanelor care au varsta impara.`,
);

var oddSumBirthYears = 0;
var currentYear = 2022;

person.friends.forEach(function (friend) {
  if (friend.age % 2 !== 0) {
    oddSumBirthYears += currentYear - friend.age;
  }
});

console.log(oddSumBirthYears.toString());

console.warn(
  `Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends daca aceasta este mai mare sau egala cu 2 ani.`,
);

person.friends.forEach(function (friend) {
  var ageDiff = person.age - friend.age;

  if (Math.abs(ageDiff >= 2)) {
    console.log(ageDiff);
  }
});

console.warn(
  `Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... "`,
);

var message = '';

person.friends.forEach(function (friend) {
  var diff = Math.abs(person.age - friend.age);

  message += `Intre ${person.name} si ${friend.name} este o diferenta de ${diff} ani. `;
});

console.log(message.trim());

console.warn(
  ` Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa elementele arrayului skills.`,
);

// slice clones
// reverse mutates

person.skills
  .slice()
  .reverse()
  .forEach(function (skill) {
    console.log(skill);
  });

console.warn(
  `Folosind obiectul person si forEach, afiseaza in consola skillurile pe care le are persoana.`,
);

person.skills.forEach(function (skill) {
  console.log(skill);
});

console.warn(`In mod similar, afiseaza skillurile care nu incep cu j.`);

person.skills.forEach(function (skill) {
  if (skill.startsWith('j')) {
    console.log(skill);
  }
});

console.warn(
  `Folosind forEach afiseaza propozitia: "Numele mari ale prietenilor mei sunt xxx, xxx, xxx."`,
);

var message = 'Numele mari ale prietenilor mei sunt ';

person.friends.forEach(function (friend, index, friends) {
  var punctuation = ', ';

  if (index === friends.length - 1) {
    punctuation = '.';
  }

  message += `${friend.surname}${punctuation}`;
});

console.log(message);

console.warn(
  `Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends`,
);

var totalBirthYears = 0;

person.friends.forEach(function (friend) {
  totalBirthYears += friend.age;
});

console.log(totalBirthYears.toString());

console.warn(`Folosind forEach, afiseaza suma anilor de nastere a persoanelor`);

var sumOfFriendBirthYear = 0;
var currentYear = new Date().getFullYear();

person.friends.forEach(function (friend) {
  sumOfFriendBirthYear += currentYear - friend.age;
});

console.log(sumOfFriendBirthYear.toString());

// in prezentare nu este cerinta, dar apare in pixeltab :D

console.warn(
  `Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.`,
);

person.friends.forEach(function (friend) {
  console.log((person.age - friend.age).toString());
});

console.warn(
  `Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa numele complet al prietenilor din arrayul friends.`,
);

// person.friends.reverse().forEach(function (friend) {
//   console.log(`${friend.name} ${friend.surname}`);
// });

// in momentul in care rulez rezolvarea asta, functioneaza si apare in consola Carol Carolson etc,
// dar in pixeltab imi spune ca nu sunt facute celelalte exercitii cu reverse, desi in consola apar :))
// nu stiu exact ce se intampla si de asta am comentat ultima rezolvare
