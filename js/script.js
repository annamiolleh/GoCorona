$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger, .menu__body').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.menu__link').click(function(event){
        $('.header__burger, .menu__body').toggleClass('active');
        $('body').toggleClass('lock');
    });
});