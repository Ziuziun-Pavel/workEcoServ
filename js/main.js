$(function(){
    $('#tel').inputmask('+7 (999) 999-99-99'); // Замените на нужную маску
    $('#tel1').inputmask('+7 (999) 999-99-99'); // Замените на нужную маску
    $('#tel2').inputmask('+7 (999) 999-99-99'); // Замените на нужную маску

    var swiper = new Swiper('.utilization-messages-list', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.mess-button-next',
            prevEl: '.mess-button-prev',
        },
    });

    var swiper = new Swiper('.utilization-certificates-list', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.cert-button-next',
            prevEl: '.cert-button-prev',
        },
    });

    var swiper = new Swiper('.utilization-examples-list__conta', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.exam-button-next',
            prevEl: '.exam-button-prev',
        },
    });
});
