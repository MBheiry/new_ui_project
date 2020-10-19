

// ----------------------


  



// ----------------------
// Work on it soon...
// var allOption = [...$('select.ub-select').children()];
// // [...allOption].forEach(function(item){
// allOption.forEach(function(item){
//     console.log( $(item).text() )
// });

// Toggle custom dropdown select.
$(document).on('click', '.ub-select', function() {
    if( !$(this).hasClass('active') ) {

        $('.ub-select').removeClass('active').children('ul').slideUp();
        $(this).addClass('active').children('ul').slideDown();
    } 
    else {
        $(this).removeClass('active').children('ul').slideUp();
    }
});

// ----------------------

