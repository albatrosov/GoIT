$(function () {
    
    var $input = $('.formWrapper .row');
    
    var $cards = $('.cardWrapper .row');
       
    $input.eq(0).on('click', function() {
        
        $cards.eq(0).show('slow');
        $cards.eq(1).hide();
        $cards.eq(2).hide();
    });
    
    $input.eq(1).on('click', function() {
        
        $cards.eq(1).show('slow');
        $cards.eq(0).hide();
        $cards.eq(2).hide();
    });
    
    $input.eq(2).on('click', function() {
        
        $cards.eq(2).show('slow');
        $cards.eq(1).hide();
        $cards.eq(0).hide();
    });
    
    var $button = $('.button a');
    
    $button.on('click', function(){
        
        $cards.show('slow');
        $cards.css('position', 'static');
         $cards.css('display', 'inline-block');
    })
})