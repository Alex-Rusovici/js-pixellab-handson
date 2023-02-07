class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = 150;
    this.topReverseSpeed = -80;
  }

  // accelerate si decelerate sa primeasca un coeficient
  accelerate(deltaSpeed = 1) {
    this.speed = this.speed + deltaSpeed;

    return this;
  }

  decelerate(deltaSpeed = 1) {
    this.speed = this.speed - deltaSpeed;

    return this;
  }
  // tema:
  // implementarea metodei setSpeed() + protectiile de supra si subaccelerare + chaining
  // refactorizarea metodelor accelerate si decelerate pentru a folosi metoda setSpeed()
}

const audi = new Car('Audi', 'black', 4, 50);

audi.accelerate();
