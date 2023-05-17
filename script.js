const num = document.querySelector('.num');
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
  num.classList.toggle('sticky');
});
function toggle() {
  var header = document.querySelector('header');
  header.classList.toggle('active');
}

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

const add_functionality_to_dropdowns = (dropdown) => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');

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
};

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

const firstDropdownMenu = document.querySelector('#firstMenu');
const firstDropdownValue = document.querySelector('#first');
const secondDropdown = document.querySelector('#second');
const second_dropdown_menu = document.querySelector('#last');

for (const child of firstDropdownMenu.children) {
  child.addEventListener('click', swapOptions);
}

const real_estate_options_en = [
    'Apartment',
    'Land',
    'Commercial Space',
    'House',
    'Other real estate',
  ],
  movable_property_options_en = [
    'Car',
    'Special Technology',
    'Inventory',
    'Furniture',
    'Other movable property',
  ],
  business_options_en = ['Share of the company', 'Total company share', 'other'];

const real_estate_options_ru = [
    'Квартира',
    'Земля',
    'Коммерческое помещение',
    'House',
    'Другая недвижимость',
  ],
  movable_property_options_ru = [
    'Машина',
    'Специальная технология',
    'Инвентарь',
    'Мебель',
    'Другое движимое имущество',
  ],
  business_options_ru = ['Доля компании', 'Общая доля компании', 'другой'];

const real_estate_options_ka = [
    'ბინა',
    'მიწა',
    'კომერციული ფართი',
    'სახლი',
    'სხვა უძრავი ქონება',
  ],
  movable_property_options_ka = [
    'მანქანა',
    'სპეციალური ტექნოლოგია',
    'ინვენტარი',
    'ავეჯი',
    'სხვა მოძრავი ქონება',
  ],
  business_options_ka = ['კომპანიის წილი', 'კომპანიის მთლიანი წილი', 'სხვა'];

function swapOptions() {
  second_dropdown_menu.innerHTML = ``;
  secondDropdown.querySelector('.selected').value = '-';
  switch (firstDropdownValue.value) {
    case 'Real estate':
      real_estate_options_en.forEach((option) => {
        second_dropdown_menu.innerHTML += `<li>${option}</li>`;
      });
      break;
    case 'Movable property':
      movable_property_options_en.forEach((option) => {
        second_dropdown_menu.innerHTML += `<li>${option}</li>`;
      });
      break;
    case 'Business':
      business_options_en.forEach((option) => {
        second_dropdown_menu.innerHTML += `<li>${option}</li>`;
      });
      break;

    case 'Недвижимость':
      real_estate_options_ru.forEach((option) => {
        second_dropdown_menu.innerHTML += `<li>${option}</li>`;
      });
      break;
    case 'Движимое имущество':
      movable_property_options_ru.forEach((option) => {
        second_dropdown_menu.innerHTML += `<li>${option}</li>`;
      });
      break;
    case 'Бизнес':
      business_options_ru.forEach((option) => {
        second_dropdown_menu.innerHTML += `<li>${option}</li>`;
      });
      break;

    case 'უძრავი ქონება':
      real_estate_options_ka.forEach((option) => {
        second_dropdown_menu.innerHTML += `<li>${option}</li>`;
      });
      break;
    case 'მოძრავი ქონება':
      movable_property_options_ka.forEach((option) => {
        second_dropdown_menu.innerHTML += `<li>${option}</li>`;
      });
      break;
    case 'ბიზნესი':
      business_options_ka.forEach((option) => {
        second_dropdown_menu.innerHTML += `<li>${option}</li>`;
      });
      break;
    default:
      break;
  }
  add_functionality_to_dropdowns(secondDropdown);
}
