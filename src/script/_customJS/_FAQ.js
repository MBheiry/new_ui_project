


$('.FAQ-body .tabs li').on('click', function() {
    // Change Active Tab.
    $(this).addClass('active').siblings('li').removeClass('active');
    // Change current tab.
    $('.FAQ-body .currentTab')
        .find('#'+ $(this).attr('for')) // convert format to ID.
        .addClass('active').siblings().removeClass('active');
});


$('.FAQ-body .FAQ-item').on('click', function() {

    $(this).toggleClass('active');  // Toggle Active Class on FAQ-item.

    // open description of this item, if FAQ-item is active.
    $(this).hasClass('active') ? 
        $(this).find('.FAQ-A').slideDown() 
        : 
        $(this).find('.FAQ-A').slideUp();
});