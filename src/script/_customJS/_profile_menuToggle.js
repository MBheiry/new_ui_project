

//----------------------
// Profile Page
$('.aside-menu-list > li').on('click', function () {
    $(this).addClass('active').siblings('li').removeClass('active');
    // ------
    var activeTab = $(this).attr('name')+'-active';
    $('#aside_result').removeClass().addClass(activeTab);
    
});


//----------------------