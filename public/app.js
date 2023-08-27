// MENU VARIABLES
const menuButton = document.querySelector('#menu-boton');
const menuItems = document.querySelector('#menu');
const menuButtonSpans = document.querySelectorAll('#menu-boton span');
const links = document.querySelectorAll('#menu a');
const main = document.querySelector('main');
menuButton.addEventListener('click', () => {
  menuItems.classList.toggle('hidden');
  main.classList.toggle('opacity-10');

  menuButtonSpans.forEach((span) => {
    span.classList.toggle('animado');
  });
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    menuItems.classList.add('hidden');
    main.classList.remove('opacity-10');
    menuButtonSpans.forEach((span) => {
      span.classList.remove('animado');
    });
  });
});

// CIERRA MENU ON RESIZE

window.onresize = function () {
  let w = window.outerWidth;
  if (w > 768) {
    menuItems.classList.add('hidden');
    menuButtonSpans.forEach((span) => {
      span.classList.remove('animado');
    });
  }
};

