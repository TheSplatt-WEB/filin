"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  function headerFixed() {
    if ($(window).scrollTop() > 45.6) {
      $('.header__body, .top').addClass('fixed');
    } else {
      $('.header__body, .top').removeClass('fixed');
    }
  }

  headerFixed();
  $(window).on('scroll', headerFixed);
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
  $('.to-main__btn').on('click', function () {
    $('.to-main__wrapper').toggleClass('open');
    $('body').toggleClass('lock');
  });
  $('.to-main__close').on('click', function () {
    $('.to-main__wrapper').removeClass('open');
    $('body').removeClass('lock');
  });
  $('.footer-list__link--politics').on('click', function () {
    $('.popup--politics').addClass('open');
    $('body').addClass('lock');
  });
  $('.footer-list__link--offer').on('click', function () {
    $('.popup--offer').addClass('open');
    $('body').addClass('lock');
  });
  $('.footer-list__link--requisites').on('click', function () {
    $('.popup--requisites').addClass('open');
    $('body').addClass('lock');
  });
  $('.popup__btn').on('click', function () {
    $('.popup').removeClass('open');
    $('body').removeClass('lock');
  });
});
var questionsLink = document.querySelectorAll('.accordion__btn');

var _iterator = _createForOfIteratorHelper(questionsLink),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var questionsLinkItem = _step.value;
    questionsLinkItem.addEventListener('click', function (el) {
      var _this = this;

      this.classList.toggle('open');

      var dropHidden = function dropHidden() {
        return _this.classList.contains('open');
      };

      if (dropHidden()) {
        this.nextElementSibling.querySelector('.accordion__descr').style.height = this.nextElementSibling.querySelector('.accordion__descr').scrollHeight + 15 + 'px';
        this.nextElementSibling.querySelector('.accordion__descr').classList.add('open');
      } else {
        this.nextElementSibling.querySelector('.accordion__descr').style.height = 0 + 'px';
        this.nextElementSibling.querySelector('.accordion__descr').classList.remove('open');
      }
    });
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

;