

// Resize Font, on Click on font size icons.
$('.fontResize .label').on('click', function () {
    $(this).addClass('active').siblings('.label').removeClass('active');
    
    if( $(this).hasClass('font-l') ) {
        $('html').css('font-size', '20px');
    }
    else if( $(this).hasClass('font-m') ) {
        $('html').css('font-size', '13px');
    }
    else if( $(this).hasClass('font-s') ) {
        $('html').css('font-size', '10px');
    }
})