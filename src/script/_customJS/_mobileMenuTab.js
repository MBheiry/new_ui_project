

// if( isMobile ) {

    // Main menu toggle.
    // $('.mobile-menuTab li.mobMenu > .icon').on('click', function(){
    //     $(this).parent().toggleClass('active');
    //     $(this).next('.mobMenu-content').toggle();

    //     menuRoot(); // Reset Menu root on close.
    // });
    // //------------
    // $('.mobile-menuTab li.mobNotification > .icon').on('click', function(){
    //     $(this).parent().toggleClass('active');
    //     $(this).next('.mobNotification-content').toggle();
    // });
    //------------
    $('.mobile-menuTab li > .icon').on('click', function(){
        $(this).parent().toggleClass('active')
            .siblings('li').removeClass('active')
            .find('[class*="-content"]').hide();
            
        $(this).next('[class*="-content"]').toggle();

        menuRoot(); // Reset Menu root on close.
    });
    //------------




    $('.mobile-menuTab li.mobMenu-item.child').on('click', function(){
        $(this).addClass('active');
        $('.mobile-menuTab .mobMenu-content').addClass('subIsActive');
        
        // var currentTitle = $(this).children('.mobMenu-item-title')[0].innerText;
        var currentTitle = $(this).children('.mobMenu-item-title').text();
        $('#currentLevel').text(currentTitle);
        // $('#currentLevel')[0].innerText = currentTitle;

    });
    //------------
    function menuRoot() {
        if( $('.mobile-menuTab .mobMenu-content').hasClass('subIsActive') ) {
            // $('.mobile-menuTab li.mobMenu-item.child').removeClass('active');
            // $('.mobile-menuTab .mobMenu-content').removeClass('subIsActive');
            // $('#currentLevel').text( $('#currentLevel').attr('title') );

            $('.mobile-menuTab .mobMenu-content')
                .removeClass('subIsActive')
                .find('li.mobMenu-item.child').removeClass('active')
                .parents('.mobMenu-content')
                .find('#currentLevel').text( $('#currentLevel').attr('title') );

        }
        
        
    }
    
    $('.mobile-menuTab #mobBackBtn').on('click', function(){menuRoot()} );
    
    //------------


    // Settings in Profile menu.
    $('.mobProfile .mobProfile-group.settings ul').on('click', function() {
    // $('.mobProfile .mobProfile-group.settings ul').not('#mobBackBtn_Settings').on('click', function() {
        $(this).parent('.mobProfile-group.settings').addClass('active')
    });
    $('.mobProfile .mobProfile-group.settings #mobBackBtn_Settings').on('click', function(event) {
        $('.mobProfile-group.settings').removeClass('active');
        // event.preventDefault();
    });
    //------------



// }

