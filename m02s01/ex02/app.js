class Vehicle {
  constructor(make, color, wheels, speed, topSpeed, topReverseSpeed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;
  }

  displaySpeed() {
    console.log(`Viteza curenta este: ${this.speed}.`);
  }

  accelerate() {
    this.setSpeed(this.speed + 1);
  }

  decelerate() {
    this.setSpeed(this.speed - 1);
  }

  setSpeed(speed = 0) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;
    this.displaySpeed();
  }
}

class Car extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    super(make, color, 4, speed, topSpeed, topReverseSpeed);
  }
}

class Bicycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 2, speed, topSpeed, 0);
  }

  decelerate() {
    if (--this.speed < 0) {
      this.speed = 0;
    }

    this.displaySpeed();
  }
}

// const bike = brand Pegas, culoare red, viteza 8, viteza maxima 20
const bike = new Bicycle('Pegas', 'red', 8, 20);

// bike - set speed 8
bike.setSpeed(8);

// decelerate bike 3 times
for (i = 0; i < 3; i++) {
  bike.decelerate();
}

// create tricycle

class Tricycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 3, speed, topSpeed, 0);
  }
}

const tryke = new Tricycle('Tryke', 'red', 2, 9, -2);
