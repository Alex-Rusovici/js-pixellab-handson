// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.appendChild(p);

const $body = $('body');

const $p = $('<p>', {
  id: 'myParagraph',
  text: 'Textul care trebuie sa apara in paragraf.',
  class: 'clase de css',
}).appendTo($body);

const $p2 = $('<p>', {
  id: 'message',
  text: 'Parola nu trebuie sa fie mai mica de 5 caractere.',
});

$body.append($p2);

setTimeout(() => {
  $p2.addClass('error');
}, 5 * 1000);

// bad jQuery
$('#message').text('Am schimbat dinamic acest paragraf.').removeClass('error');

$('<span>', {
  id: 'example',
  text: ' Parola mea',
}).appendTo($p2);

$('#myParagraph, #message').wrapAll(
  $('<div>', {
    class: 'container',
  }),
);

$('<h2>', {
  text: 'Mesaje',
}).prependTo($('.container'));

const $nav = $('<nav>', {
  class: 'navigation',
});

$('.container')
  .after($nav)
  .before(
    $('<h1>', {
      text: 'Invat jQuery',
    }),
  );
$('<h2>', {
  text: 'Navigatie',
}).prependTo($nav);

$(`
  <a href="/">
  <sup>1</sup>
  Primul link
  </a>
`).appendTo($nav);

$('<p>', {
  text: 'Documentatia jQuery poate fi gasita ',
})
  .append(
    $('<a>', {
      text: 'aici',
      href: 'https://pixellab.ro',
      target: '_blank',
    }),
  )
  .append(
    $('<span>', {
      text: '.',
    }),
  )
  .appendTo($(document.body));
