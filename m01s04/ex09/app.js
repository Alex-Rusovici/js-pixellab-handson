// var i = 101;

// // do {
// //   console.log(i);
// //   i++;
// // } while (i <= 100);

// var i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i < 100);

// var i = 1;

// do {
//   i++;
//   console.log(i);

//   if (i === 50) {
//     break;
//   }
// } while (i < 100);

// do {
//   i++;
//   console.log(i);
// } while (i < 52);

// do {
//   i++;
//   console.log(i);
// } while (i < 51);

// do {
//   i++;
//   console.log(i);

//   if (i === 12) {
//     break;
//   }
// } while (i < 51);

// var i = 8;

// do {
//   i++;

//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log(i);
// } while (i < 32);

var multiplicator = prompt(`Adauga un multiplicator`);
var lowerLimit = prompt(`Adauga limita minima`);
var upperLimit = prompt(`Adauga limita maxima`);

var i = lowerLimit;

do {
  i++;

  if (i % multiplicator === 0) {
    console.log(i);
  }
} while (i < upperLimit);
