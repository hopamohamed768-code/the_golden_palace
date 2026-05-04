
document.addEventListener('DOMContentLoaded', function () {

  var hamburger = document.getElementById('hamburger');
  var navLinks  = document.getElementById('nav-links');

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });

  var links = navLinks.querySelectorAll('a');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });


  var navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.6)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

  var checkin  = document.getElementById('checkin');
  var checkout = document.getElementById('checkout');

  var today = new Date().toISOString().split('T')[0];
  checkin.min  = today;
  checkout.min = today;

  checkin.addEventListener('change', function () {
    checkout.min = this.value;

    if (checkout.value && checkout.value <= this.value) {
      checkout.value = '';
    }
  });

  function fail(inputEl, errId) {
    inputEl.classList.add('invalid');
    document.getElementById(errId).classList.add('show');
    valid = false;
  }

  function pass(inputEl, errId) {
    inputEl.classList.remove('invalid');
    document.getElementById(errId).classList.remove('show');
  }

  var form       = document.getElementById('bookForm');
  var successMsg = document.getElementById('successMsg');
  var valid; 

  form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    var name     = document.getElementById('name');
    var email    = document.getElementById('email');
    var cin      = document.getElementById('checkin');
    var cout     = document.getElementById('checkout');
    var room     = document.getElementById('room');

    valid = true; 

    name.value.trim()  ? pass(name,  'errName')  : fail(name,  'errName');
    email.value.trim() ? pass(email, 'errEmail') : fail(email, 'errEmail');
    cin.value          ? pass(cin,   'errIn')    : fail(cin,   'errIn');
    cout.value         ? pass(cout,  'errOut')   : fail(cout,  'errOut');
    room.value         ? pass(room,  'errRoom')  : fail(room,  'errRoom');

    if (valid) {
      successMsg.classList.add('show');
      form.reset();
  
      setTimeout(function () {
        successMsg.classList.remove('show');
      }, 7000);
    }
  });

});
