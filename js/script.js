var nav = document.querySelector('nav'); // Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY <= 150) { // Just an example
        nav.style.backgroundColor = 'transparent'; // or default color
    } else {
        nav.style.backgroundColor = '#141516';
    }
});

var el = $('.choose-us-list');

$(window).scroll(function(){
    if ( $(this).scrollTop() > el.offset().top - 1130 ) {
        el.addClass('slideUp');
    }
});

$(function(){
  $('.single-slide').slick();
});

$(document).ready(function(){
  $('.menu_burger').click(function(){
    $('.navbar-list').toggleClass('menu_active');
  })
})
