$(function(){
  $('.presentation__slider').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 5000,
  });
    

   
    $('.search_submit').on('click', function() {
        
        
    })
    
    $('.panels__accordion').accordion({
        active: 0,
        heightStyle: "content",        
    });
    
    function minus(i) {
        
    if ($('.panels__head').eq(i).hasClass('ui-accordion-header-active')) {


        $('.plus').eq(i).text('-')

    }
        
    else(
    
        $('.plus').eq(i).text('+')
    
    )
              
    
    }
    
    minus(0)
 
    var accLenght = $('.panels__head').length
    
    for (j = 0; j < accLenght; j++) {
        
        $('.panels__head').eq(j).on('click', function() {
        
            for (i = 0; i < accLenght; i++){
            
                minus(i)
            
            }        
        
    })  
    }
    
    for (i = 0; i < $('.footer__menu').length; ++i){
        
        $('.footer__menu').eq(i).find('li').last().css('border', 'none')
        
    }
    
   

    


});