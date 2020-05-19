//Mobile menu
$('.menu__btn').click(function() {
  $('.menu__wrap').addClass('menu__wrap--opened');
  $('.menu__wrap').slideDown();
});
$('.menu__close').click(function() {
  $('.menu__wrap').hide();
  $('.menu__wrap').removeClass('menu__wrap--opened');
});

//Mobile search
$('.search__open').click(function() {
  $('.search__wrap').addClass('search__wrap--open')
});
$('.search__close').click(function() {
  $('.search__wrap').removeClass('search__wrap--open');
});
