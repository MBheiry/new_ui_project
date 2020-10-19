

// Toggle main menu.
// if (!isMobile) {

    $('.menuNav .menuItem').on('click', function(e) {

        // e.preventDefault();

        if( !$(this).hasClass('active') ) {

            $(this).addClass('active')  // add class Active for current tab.
                .siblings('.menuItem').removeClass('active')    // Remove Active from other tabs.
                .children('.menuItem-drop').slideUp();  // close other tabs.
            // -----
            $(this).children('.menuItem-drop').slideDown(); //Open Active tab.
        } 
        else {
            $(this).removeClass('active').children('.menuItem-drop').slideUp();

        }
    });
    
// }






// $(function () {

//     var menu = {
//         init: function () {
//             this.cacheDom();
//             this.bindEvents();
//         },
//         cacheDom: function () {
//             this.$body = $('body');
//             this.$el = $('#menu');
//             this.$burger = $('.b-menu-bar__burger');
//             this.$menuListToggler = $('.b-menu__list-title');
//             this.$menuLists = $('.b-menu__list-links-wrp');
//         },
//         bindEvents: function () {
//             this.$burger.click(this.toggleMenu.bind(this));
//             this.$body.find('.overlay').click(function () {
//                 menu.closeMenu();
//             });

//             $(window).keyup(function (e) {
//                 if (e.keyCode === 27) {
//                     menu.closeMenu();
//                 }
//             });

//             if ($(window).innerWidth() <= 1024) {
//                 this.$menuListToggler.click(this.toggleMenuList);
//             }
//         },
//         toggleMenu: function () {
//             this.$body.toggleClass('menu-opened no-scroll');
//             this.$body.find('.overlay').fadeIn();
//             this.$el.toggleClass('opened');
//         },
//         closeMenu: function () {
//             this.$body.removeClass('menu-opened no-scroll');
//             this.$el.removeClass('opened');
//             this.$body.find('.overlay').fadeOut();
//         },
//         toggleMenuList: function () {
//             var closestList = $(this).siblings('.b-menu__list-links-wrp');
//             menu.$menuLists.not(closestList).slideUp();
//             closestList.slideToggle();

//             menu.$menuListToggler.not($(this)).removeClass('open');
//             $(this).toggleClass('open');
//         }
//     };

//     menu.init();
// });









