$(function () {
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

    var swiper = new Swiper('.utilization-examples-list__container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.exam-button-next',
            prevEl: '.exam-button-prev',
        },
    });

    // Модалки

    $('#open-modal__request1').click(function () {
        $('#modal__request').fadeIn();
        $('body').css('overflow', 'hidden');
    });

    $('#open-modal__request').click(function () {
        $('#modal__request').fadeIn();
        $('body').css('overflow', 'hidden');
    });

    $('#close-modal__request').click(function () {
        $('#modal__request').fadeOut();
        $('body').css('overflow', 'auto');
    });

    $('.utilization-prices-item-btn').click(function () {
        $('#modal__request').fadeIn();
        $('body').css('overflow', 'hidden');
    });

    $('#choose__region').click(function () {
        $('#modal__region').fadeIn();
        $('body').css('overflow', 'hidden');
    });

    $('#close-modal__region').click(function () {
        $('#modal__region').fadeOut();
        $('body').css('overflow', 'auto');
    });

    $('#call').click(function () {
        $('#modal__call').fadeIn();
        $('body').css('overflow', 'hidden');
    });

    $('#call1').click(function () {
        $('#modal__call').fadeIn();
        $('body').css('overflow', 'hidden');
    });

    $('#close-modal__call').click(function () {
        $('#modal__call').fadeOut();
        $('body').css('overflow', 'auto');
    });


    $('.header-dropdown-btn.green').click(function () {
        // Показать/скрыть блок с текстом
        $(this).find('.white',0).css('display', function(index, value) {
            return value === 'none' ? 'inline-block' : 'none';
        });

        // Показать/скрыть блок с иконкой
        $(this).find('.black',0).css('display', function(index, value) {
            return value === 'none' ? 'inline-block' : 'none';
        });
        // Показать/скрыть блок .header-dropdown
        $('.header-dropdown').slideToggle();
    });

    $('.header-dropdown-btn.frst').click(function () {
        // Показать/скрыть блок с текстом
        $(this).find('.white', 1).css('display', function(index, value) {
            return value === 'none' ? 'inline-block' : 'none';
        });

        // Показать/скрыть блок с иконкой
        $(this).find('.black',1).css('display', function(index, value) {
            return value === 'none' ? 'inline-block' : 'none';
        });
        // Показать/скрыть блок .header-dropdown
        $('.header-dropdown1').slideToggle();
    });

    $('.header-dropdown-btn.sec').click(function () {
        // Показать/скрыть блок с текстом
        $(this).find('.white',2).css('display', function(index, value) {
            return value === 'none' ? 'inline-block' : 'none';
        });

        // Показать/скрыть блок с иконкой
        $(this).find('.black',2).css('display', function(index, value) {
            return value === 'none' ? 'inline-block' : 'none';
        });
        // Показать/скрыть блок .header-dropdown
        $('.header-dropdown2').slideToggle();
    })

    baguetteBox.run('.baguetteBoxOne');
});