$(function() {
    
    var templatePartn = $('#templatePartn').html();
    Mustache.parse(templatePartn); 
      
    function getPartn() {
        
         var img = $.getJSON('http://api.pixplorer.co.uk/image?word=girls&amount=4&size=tb', function(data){ 
             
             
             function renderPartners() {
                 
          var renderedImg = Mustache.render(templatePartn, data);
                $('.partners').html(renderedImg); 
                 
             }
            renderPartners()
        
            }
         ) 
    }
    
    
    getPartn()
    
    $('.others').on('click', function() {
        
        getPartn()
    })
    
})