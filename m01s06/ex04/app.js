(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const stage = document.querySelector('.stage');

    stage.addEventListener('mouseover', () => {
      const message = 'Mouseul este pe scena';
      console.log(message);
      showMessage(message);

      document.body.append(paragraphElement);
    });

    stage.addEventListener('mouseout', () => {
      const message = 'Mouseul nu este pe scena';
      console.log('Mouseul nu este pe scena');
      console.log(message);
      showMessage(message);
    });

    // function functions are hoisted
    function showMessage(message) {
      const paragraphElement = document.createElement('p');
      paragraphElement.innerText = message;
      paragraphElement.classList.add('message');

      document.body.append(paragraphElement);
    }
  });
})();
