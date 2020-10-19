
//if ($('#home').length > 0) {

//}

// -------------------------------------


var homeSections = new Swiper('#home > .swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: true
});
// -------------------------------------

var landingSection = new Swiper('#home .landing-section .swiper-container', {
    slidesPerView: 1,
    effect: 'fade',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
});
// -------------------------------------


var reg_preferences = new Swiper('.reg-preferences .swiper-container', {
    slidesPerView: 4,
    slidesPerColumn: 2,
    mousewheel: true,
    //spaceBetween: 30,
    spaceBetween: 5,
    //----
    // watchOverflow: true ,
    //----
    //cssMode: true,
    navigation: {
        nextEl: '.reg-preferences .swiper-button-next',
        prevEl: '.reg-preferences .swiper-button-prev',
    },
    //----
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    //----
    breakpoints: {
        320: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        }
    }
    //----

});
// -------------------------------------


// Hide Arrow if no more slides.
// $('.swiper-button-next.swiper-button-disabled').hide().next('.swiper-button-prev.swiper-button-disabled').hide();

// -------------------------------------

$('.article-slider_mainImg.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots:  isMobile ? true : false,
    fade: true,
    asNavFor: '.article-slider_nav.slider-nav'
  });
  $('.article-slider_nav.slider-nav').slick({   // Navigation.
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    // dots: true,
    vertical: true,
    // centerMode: true,
    focusOnSelect: true,
    infinite: false,
    nextArrow: '<i class="icon icon-arrow-down"></i>',
    prevArrow: '<i class="icon icon-arrow-up"></i>',
  });

// -------------------------------------

//function home_isMoreThanSlide() {
//    return setTimeout(function(){
//        console.log($('#home .home-silder').find('.slick-track > .slick-slide').length > 1);
//        // $('#home .home-silder').find('.slick-track > .slick-slide').length > 1;
//        ($('#home .home-silder').find('.slick-track > .slick-slide').length > 1) ? true : false;
//    }, 3000);
//}

$('#home .home-silder').slick({   // Navigation.

    slidesToShow: 1,
    slidesToScroll: 1,
    // ----
    dots: true,
    // ----
    autoplay: true,
    autoplaySpeed: 4000,
    // ----
    focusOnSelect: true,
    infinite: false,
    rtl: isAr,
    arrows: isMobile ? false : true,
    nextArrow: '<i class="icon icon-arrow-next"></i>',
    prevArrow: '<i class="icon icon-arrow-back"></i>'
});
// -------------------------------------

$('.slider_relatedItems').slick({   // Navigation.

    slidesToShow: 3,
    slidesToScroll: 1,
    // ----
    // dots: true,
    // ----
    // arrows: isMobile ? false : true,
    arrows: true,
    nextArrow: '<i class="icon icon-arrow-next"></i>',
    prevArrow: '<i class="icon icon-arrow-back"></i>',
    //-----
    // autoplay: true,
    // autoplaySpeed: 4000,
    // ----
    rtl: isAr,
    // focusOnSelect: true,
    infinite: false,
    //-----
    responsive: [
        {
            breakpoint: 561, 
            // settings: {slidesToShow: 1,arrows: false}
            settings: {slidesToShow: 1}
        },
        {
            breakpoint: 769, 
            // settings: {slidesToShow: 2,arrows: false}
            settings: {slidesToShow: 2}
        },
    ]
});
// -------------------------------------


// -------------------------------------
// -------------------------------------

  

