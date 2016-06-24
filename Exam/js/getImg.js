$(function() {
    
    var template = $('#template').html();
    Mustache.parse(template); 
      
    function getImg(value) {
        
         var img = $.getJSON('http://api.pixplorer.co.uk/' + value + '&amount=7&size=tb', function(data){             
        
          var rendered = Mustache.render(template, data);
          $('.activity').html(rendered);
       
           var $grid = $('.grid').masonry({
            itemSelector: '.grid-item',               
            percentPosition: true
          
        });
        // layout Masonry after each image loads
        $grid.imagesLoaded().progress( function() {
          $grid.masonry('layout');
        });

            }
         ) 
    }
    
    
    getImg('image?word=nature')
    
    $('.ideas__search').on('click', function() {
        
        var value = $('input').val();
        
        getImg('image?word=' + value)
    })
     
     
   
     
    
})