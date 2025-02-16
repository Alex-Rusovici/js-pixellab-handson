class Car {
  constructor(
    make,
    color,
    wheels,
    speed,
    topSpeed = 160,
    topReverseSpeed = -50,
  ) {
    // referinta cate locatia in moemori a instantei curente
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;

    // v1 syntax
    this.isTrunkOpen = false;
    this.areLightsOn = false;
  }

  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
  }

  stop() {
    this.speed = 0;

    //    console.log(this.speed);
  }

  setSpeed(speed = 0) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    } else {
      this.speed = speed;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
    } else {
      this.speed = speed;
    }
  }
  // Adauga o metoda setSpeed(). Primeste parametru fix
  // Metoda terbuie sa nu depaseasca limitele impuse (-50 si 160)

  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
  // openTrunk si closeTrunk

  turnLightsOn() {
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.areLightsOn = false;
  }
  // turnLightsOn si turnLightsOff

  flashLights() {
    this.turnLightsOn();

    setTimeout(() => {
      this.turnLightsOff();
    }, 5 * 1000);
  }
  // flashLights() cu window.setTimeout()
}

const audi = new Car('Audi', 'black', 4, 50);

//  Instantiaza o alta masina (Opel, red, cu 4 roti si viteza 3).
//   O poti salva intr-o variabila numita opel.

const opel = new Car('Opel', 'red', 4, 3);

// Adauga cele doua variabile (opel si audi) intr-un array numit cars. (var cars = [opel, audi])

const cars = [audi, opel];

// “Masina era marca make si se deplasa cu speed km/h.” - cu forEach

cars.forEach(function (car) {
  console.log(
    `Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`,
  );

  for (i = 0; i < 5; i++) {
    car.decelerate();
  }
  console.log(`Viteza noua este de ${car.speed} km/h.`);
});

// this kills me inside. inteleg ce cauta PixelTab, dar in momentul asta nu stiu exact cum as putea sa trec peste.
// am incercat si cu slice reverse reverse in speranta ca ... splice clones and reverse mutates
// dar tot nu a mers, strica cumva PixelTab-ul
// dar in consola este ok :-/
