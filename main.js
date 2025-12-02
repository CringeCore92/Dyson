
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.header__nav');
  const body = document.body;

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('open');
    body.classList.toggle('lock'); // если хочешь запретить скролл
  });



