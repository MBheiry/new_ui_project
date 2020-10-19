
// innerCardSlider
//_fireSlider(".innerCardSlider");
//_fireSlider(".innerCardSlider", true);    // Call this function in Vue-js (( your html slider should have attr "Async" ))
//---------------

function _fireSlider($slideHolder, runAsync) {
    // Create your Arrow:
    function _arrowDir($iconDir, $slickDir) { return '<div class="slick-arrow ' + $slickDir + '"><i class="icon ' + $iconDir + '"></i></div>'; }
    //--------------------

    $($slideHolder).each(function (index) {

        var $this_slideHolder = this;   // this - each scope
        //var $moreThanItem = $(this).find('.slick-track > .slick-slide').length > 1; // Slides length.
        var $NumOfCards = $(this).attr('NumOfCards');
        //var $ToScroll = $(this).attr('ToScroll');
        // var $byClick = $(this).attr('byClick'); //byClick="true" 
        var $isVertical = ($(this).attr('isVertical') === "true") ? true : false;    // Check If slider Vertical or not
        // var $dots = ( $(this).attr('dots') === "true" && isMobile ) ? true : false;
        //---------
        var async = $(this).attr('Async');  // Work with Async Sliders
        //---------
        // $sliderOption = !$(this).attr('sliderOption') ? null : JSON.parse( $(this).attr('sliderOption') );
        // console.log($sliderOption.slidesToShow);
        //---------

        // change Arrow icon regarding to slider type
        // $NArrow_icon = !$isVertical ? 'icon-iconfinder_arrow_up2_18140871' : 'icon-back';
        // $PArrow_icon = !$isVertical ? 'icon-iconfinder_arrow_up2_1814087' : 'icon-like-item';
        $NArrow_icon = 'icon-back';
        $PArrow_icon = 'icon-like-item';
        //---------
        if (!async || runAsync) {
            
            // jQuery($this_slideHolder).not('.slick-initialized').slick({ // use "not('.slick-initialized')" to prevind dublicate issues
            $($this_slideHolder).not('.slick-initialized').slick({ // use "not('.slick-initialized')" to prevind dublicate issues
                // slidesToShow: ( $NumOfCards && $NumOfCards > 0) ? $NumOfCards : 3,
                slidesToShow: 3,
                slidesToScroll: 1,
                // rows: 2,
                //-----
                dots: isMobile ? true : false,
                //-----
                // arrows: isMobile ? false : true,
                arrows: true,
                nextArrow: '<i class="icon icon-arrow-next"></i>',
                prevArrow: '<i class="icon icon-arrow-back"></i>',
                // nextArrow: _arrowDir($NArrow_icon, 'slick-next'),
                // prevArrow: _arrowDir($PArrow_icon, 'slick-prev'),
                //-----
                // vertical: ($isVertical && !isMobile) ? true : false,
                // verticalSwiping: ($isVertical && !isMobile) ? true : false,
                //-----
                rtl: isAr,
                infinite: false,
                centerMode: false,
                // focusOnSelect: $byClick ? true : false,
                //useTransform: false,
                //adaptiveHeight: true,
                //-----
                responsive: [
                    {
                        breakpoint: 769, settings: {
                            infinite: ($isVertical && isMobile) ? false : true,
                            slidesToShow: ($isVertical && isMobile) ? 4 : 2,
                        }
                    },
                    {
                        breakpoint: 561, settings: {
                            infinite: ($isVertical && isMobile) ? false : true,
                            slidesToShow: ($isVertical && isMobile) ? 3 : 1,
                        }
                    }
                ]
            });
        }
    });
}

// Run
$(document).ready(function () {
    _fireSlider(".innerCardSlider");
    _fireSlider(".innerCardSlider1");

    // $('[data-slick]').not('.slick-initialized').slick();
});
//_fireSlider(".innerCardSlider", true);    // Call this function in Vue-js (( your html slider should have attr "Async" ))

//--------------------

