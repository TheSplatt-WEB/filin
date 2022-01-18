"use strict";

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
$(function () {
  $('.menu__btn, .menu__body').on('click', function () {
    $('.menu__btn, .menu__body').toggleClass('open');
  });
  $(document).on('click', function (e) {
    if (!$('.menu__btn').is(e.target) && $('.menu__btn').has(e.target).length === 0 && !$('.menu__body').is(e.target) && $('.menu__body').has(e.target).length === 0) {
      $('.menu__body, .menu__btn').removeClass('open');
    }
  });
  $('.reviews__slider').slick({
    arrows: true,
    prevArrow: '<button class="reviews__btn reviews__btn--prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"> <path fill="#000" d="M14 20c0.128 0 0.256-0.049 0.354-0.146 0.195-0.195 0.195-0.512 0-0.707l-8.646-8.646 8.646-8.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-9 9c-0.195 0.195-0.195 0.512 0 0.707l9 9c0.098 0.098 0.226 0.146 0.354 0.146z"></path></svg></button>',
    nextArrow: '<button class="reviews__btn reviews__btn--next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path fill="#000" d="M5 20c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l8.646-8.646-8.646-8.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l9 9c0.195 0.195 0.195 0.512 0 0.707l-9 9c-0.098 0.098-0.226 0.146-0.354 0.146z"></path></svg></button>',
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 992,
      settings: {
        prevArrow: false,
        nextArrow: false
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        prevArrow: false,
        nextArrow: false
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        prevArrow: false,
        nextArrow: false
      }
    }]
  });
  $('.scroll-btn').on('click', function (event) {
    event.preventDefault();
    $('.scroll-btn').removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('href'),
        top = $(id).offset().top - 60;
    $('body,html').animate({
      scrollTop: top
    }, 800);
  });
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 150) {
      $('.header').addClass('fixed');
    } else {
      $('.header').removeClass('fixed');
    }
  });
  var windowHeight = $(window).height();
  $(document).on('scroll', function () {
    $('.counter').each(function () {
      var self = $(this),
          height = self.offset().top + self.height();

      if ($(document).scrollTop() + windowHeight >= height) {
        $('.counter').each(function () {
          if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).prop('Counter', 0).animate({
              Counter: $(this).text()
            }, {
              duration: 2000,
              easing: 'swing',
              step: function step(now) {
                $(this).text(Math.ceil(now));
              }
            });
          }
        });
      }
    });
  });
});