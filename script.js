const section = document.querySelector('.request'),
  hireBtn = section.querySelector('#hireBtn'),
  popup = section.querySelector('.popup-box'),
  cancelBtn = document.querySelectorAll('#close');

hireBtn.addEventListener('click', () => {
  section.classList.add('show');
});

hireBtn.addEventListener('click', () => {
  section.classList.add('active');
});

cancelBtn.forEach((cBtn) => {
  cBtn.addEventListener('click', () => {
    section.classList.remove('show');
    section.classList.remove('active');
  });
});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  });

  options.forEach((option) => {
    option.addEventListener('click', () => {
      selected.value = option.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
    });
  });

  options.forEach((option) => {
    option.addEventListener('click', () => {
      selected.value = option.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
      options.forEach((option) => {
        option.classList.remove('active');
      });
      option.classList.add('active');
    });
  });
});
