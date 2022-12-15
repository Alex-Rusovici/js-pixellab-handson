var dateBuilder = [
  function () {
    return '2022';
  },
  function () {
    return 'Decembrie';
  },
  function () {
    return '15';
  },
];

console.log(dateBuilder);

dateBuilder[3] = () => {
  return 'Joi';
};

console.log(dateBuilder);

console.warn(`Folosidn arrayul dateBuilder. Afiseaza luna curenta`);

console.log(`Astazi este ${dateBuilder[1]()}.`);

console.warn(`Afiseaza propozitia Suntem in anul an.`);

console.log(`Suntem in anul ${dateBuilder[0]()}.`);

console.warn(`Afiseaza propozitia Suntem in luna ll in anul aa.`);

console.log(`Suntem in luna ${dateBuilder[1]()} in anul ${dateBuilder[0]()}.`);

console.warn(`Afiseaza propozitia Astazi este ziua zz.`);

console.log(`Astazi este ziua ${dateBuilder[2]()}.`);
