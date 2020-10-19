
//   Function to close/hide on click outside your target.
function clickOutSide(selector, funName) {
    !$(selector).is(event.target) && !$(selector).has(event.target).length ? funName() : '';
}
// ----------------------

$(document).click(function() {
    // For Main Menu navigation.
    clickOutSide('.menuNav .menuItem', function(){
        $('.menuNav .menuItem').removeClass('active').children('.menuItem-drop').slideUp();
    });
    
    // For custom dropdown list.
    clickOutSide('.ub-select', function(){
        $('.ub-select').removeClass('active').children('ul').slideUp();
    });

});

// ----------------------

// $('.menuItem-drop.settings .radioToggle input[type=checkbox]').on('change', function(){
$('.menuItem-drop.settings .radioToggle input[type=checkbox]').change(function(e){

    // e.preventDefault();

    if($(this).is(':checked')) {
        // Checkbox is checked..
        $('body').addClass('newContrast');
    } else {
        // Checkbox is not checked..
        $('body').removeClass('newContrast');
    }
});