const heroElement = document.querySelector('.hero');
const controls = document.querySelector('.controls');
const step = 50;
const stage = document.querySelector('.stage');
const heroData = {
  x: 0,
  y: 0,
  width: heroElement.clientWidth,
  height: heroElement.clientHeight,
};

const axisMap = {
  N: { y: -1 },
  E: { x: 1 },
  S: { y: 1 },
  W: { x: -1 },
};

const keysMap = {
  ArrowUp: axisMap.N,
  ArrowRight: axisMap.E,
  ArrowDown: axisMap.S,
  ArrowLeft: axisMap.W,
};

// click on DOM buttons
controls.addEventListener('click', (event) => {
  // event.target = elementul de pe care a plecat eventul
  const target = event.target;
  const direction = target.dataset.direction;

  // is it button?
  if (target.nodeName !== 'BUTTON' || direction.length <= 0) {
    return;
  }

  // vizibility
  const button = target;

  const axisDirection = axisMap[direction];

  updateHeroData(axisDirection);

  renderHero();
});

// use arrow keys to move the hero
document.addEventListener('keydown', (event) => {
  const keyCode = event.code;

  const axisDirection = keysMap[keyCode];

  if (!axisDirection) {
    return;
  }

  updateHeroData(axisDirection);

  renderHero();
});

// function functions are hoisted
function updateHeroData(axisDirection) {
  // ['x'], ['y'], ['x', 'y']
  const axes = Object.keys(axisDirection);

  axes.forEach((axis) => {
    // axis poate fi x sau y
    heroData[axis] = heroData[axis] + step * axisDirection[axis];
  });

  if (heroData.x <= 0) {
    heroData.x = 0;
  }

  if (heroData.y <= 0) {
    heroData.y = 0;
  }

  if (heroData.x >= stage.clientWidth) {
    heroData.x = stage.clientWidth - heroData.width;
  }

  if (heroData.y >= stage.clientHeight) {
    heroData.y = stage.clientHeight - heroData.width;
  }
}

function renderHero() {
  // update hero in DOM
  const cssText = `transform: translate(${heroData.x}px, ${heroData.y}px)`;

  heroElement.setAttribute('style', cssText);
}
