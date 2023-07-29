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
    },
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

  $('#name').replaceWith(
    '<input type=text name=სახელი id=name placeholder=' +
      translations.request.row100.name +
      '>'
  );
  $('#email').replaceWith(
    '<input type=email name=მეილი id=email placeholder=' +
      translations.request.row100.email +
      '>'
  );
  $('#phone').replaceWith(
    '<input type=text name=მობილური id=phone placeholder=' +
      translations.request.row100.phone +
      '>'
  );

  $('#email').html(translations.request.row100.email);
  $('#phone').html(translations.request.row100.phone);

  $('#close').text(translations.request.close);

  // contact
  $('#contact_title').html(translations.contact.contact_title);
  // contact-form
  $('#name').text(translations.contact.contact_form.name);
  $('#email').text(translations.contact.contact_form.email);
  $('#phone').text(translations.contact.contact_form.phone);
  $('#message').text(translations.contact.contact_form.message);

  $('#submit').replaceWith(
    '<input type=submit id=submit value=' + translations.contact.submit + '>'
  );
}
