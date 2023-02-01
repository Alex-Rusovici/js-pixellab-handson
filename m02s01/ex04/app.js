class Car {
  areHazardsOn = false;
  areLightsOn = false;

  constructor(left = 0, top = 0, color = 'black') {
    this.left = left;
    this.top = top;
    this.color = color;

    this.intervalId = -1;

    this.frame = document.createElement('div');
    this.frame.classList.add('frame');
    this.changePosition(this.left, this.top);

    this.createFragment();
  }

  createFragment() {
    this.car = this.createElement('div', ['car']);
    this.car.classList.add('car');
    this.frame.append(this.car);

    // roof
    this.carTop = document.createElement('div');
    this.carTop.classList.add('car__top');
    this.carTop.style.backgroundColor = this.color;
    this.car.append(this.carTop);

    // body
    this.carBody = document.createElement('div');
    this.carBody.classList.add('car__body');
    this.carBody.style.backgroundColor = this.color;
    this.car.append(this.carBody);

    // car lights back
    // this.carLightsBack = document.createElement('div');
    // this.carLightsBack.classList.add('light', 'light--back');
    this.carLightsBack = this.createElement('div', ['light', 'light-back']);
    this.carBody.append(this.carLightsBack);

    // car lights front
    this.carLightsFront = document.createElement('div');
    this.carLightsFront.classList.add('light', 'light--front');
    this.carBody.append(this.carLightsFront);

    // wheels back
    this.carWheelsBack = document.createElement('div');
    this.carWheelsBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.carBody.append(this.carWheelsBack);

    // wheel caps back
    this.wheelCapsBack = document.createElement('div');
    this.wheelCapsBack.classList.add('wheel__cap');
    this.carWheelsBack.append(this.wheelCapsBack);

    // wheels front
    this.carWheelsFront = document.createElement('div');
    this.carWheelsFront.classList.add(
      'wheel',
      'car__wheel',
      'car__wheel--front',
    );
    this.carBody.append(this.carWheelsFront);

    // wheel caps front
    this.wheelCapsFront = document.createElement('div');
    this.wheelCapsFront.classList.add('wheel__cap');
    this.carWheelsFront.append(this.wheelCapsFront);
  }

  turnLightsOn() {
    // this.carLightsFront.style.backgroundColor = 'yellow';

    this.carLightsFront.classList.add('light--on');
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.carLightsFront.classList.remove('light--on');
    this.areLightsOn = false;
  }

  changePosition(left = 0, top = 0) {
    this.frame.style.left = `${left}px`;
    this.frame.style.top = `${top}px`;
  }

  createElement(nodeName = '', classListArray = []) {
    const element = document.createElement(nodeName);
    // element.classList.add(...classListArray);

    classListArray.forEach((className) => {
      element.classList.add(className);
    });

    return element;
  }

  toggleHazards() {
    if (this.areHazardsOn === true) {
      // stop hazards
      clearInterval(this.intervalId);
      this.areHazardsOn = false;
    } else {
      // start hazards
      this.intervalId = setInterval(() => {
        if (this.areLightsOn === true) {
          this.turnLightsOff();
        } else {
          this.turnLightsOn();
        }
      }, 800);
      this.areHazardsOn = true;
    }

    return this;
  }

  render() {
    document.body.append(this.frame);

    // method chaining
    return this;
  }
}

const car = new Car(20, 20, 'red');
car.render();
