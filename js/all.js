$(document).ready(function () {
    $('.fa-bars').click(function(){
        $('body').addClass('active')
    });
    $('.fa-times').click(function(){
        $('body').removeClass('active'); 
    });
    
});