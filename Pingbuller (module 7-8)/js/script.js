$(function() {
    
    $(window).resize(function() {
        
    if ($(window).width() < 480) {
        
        $('.firstLink').on('click', function() {
            
            $('.menu li').toggle();
            
            $('.firstLink').css('display', 'block')
            
        })        
    }
        
    if (($(window).width() > 480)) {
        
        $('.menu li').css('display', 'block')
    }
    })
})