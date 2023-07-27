// const num = document.querySelector('.num');
// window.addEventListener('scroll', function () {
//   var header = document.querySelector('header');
//   header.classList.toggle('sticky', window.scrollY > 0);
//   num.classList.toggle('sticky');
// });
// function toggle() {
//   var header = document.querySelector('header');
//   header.classList.toggle('active');
// }

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

// Function to change the language
function changeLanguage(lang) {
  $.ajax({
      url: 'translations.json',
      dataType: 'json',
      success: function (data) {
          updateContent(data[lang]);
          updateLangAttribute(lang);
      },
      error: function () {
          console.error('Error fetching translations.');
      }
  });
}

// Function to update the content on the page
function updateContent(translations) {
  // navigation
  $('#nav-req').text(translations.header.nav_req);
  $('#nav-serv').text(translations.header.nav_serv);
  $('#nav-cont').text(translations.header.nav_cont);
  $('#nav-num').html(translations.header.nav_num);
  $('#selected-lang').text(translations.header.selected_lang);

  // services
  $('#serv-title').text(translations.services.serv_title);
  $('#serv-p').html(translations.services.serv_p);
  $('#content-1').html(translations.services.content_1);
  $('#content-2').html(translations.services.content_2);
  $('#content-3').html(translations.services.content_3);

  // about
  $('#mxw800px').html(translations.about.mxw800p);
  $('#box1').html(translations.about.box1);
  $('#box2').html(translations.about.box2);

  // request
  $('#mxw800p').html(translations.request.mxw800p);
  $('#hireBtn').text(translations.request.hireBtn);
  $('#firstMenu').html(translations.request.firstMenu);

  // request.row100
  $('#name').html(translations.request.row100.name);

  $('#name').replaceWith("<input type=`text` name=`სახელი` id=`name` placeholder=" + translations.request.row100.name + ">");
  $('#email').replaceWith("<input type=`email` name=`მეილი` id=`email` placeholder=" + translations.request.row100.email + ">");
  $('#phone').replaceWith("<input type=`text` name=`მობილური` id=`phone` placeholder=" + translations.request.row100.phone + ">");

  $('#email').html(translations.request.row100.email);
  $('#phone').html(translations.request.row100.phone);

  $('#close').text(translations.request.close);

  // contact
  $('#contact-title').html(translations.contact.contact_title);
  // contact-form
  $('#name').text(translations.contact.contact_form.name);
  $('#email').text(translations.contact.contact_form.email);
  $('#phone').text(translations.contact.contact_form.phone);
  $('#message').text(translations.contact.contact_form.message);

  $('#submit').text(translations.contact.submit);
}

// Function to update the lang attribute
function updateLangAttribute(lang) {
  $('html').attr('lang', lang);
}

// By default, load the content in English
// $(document).ready(function () {
//   changeLanguage('en');
// });
