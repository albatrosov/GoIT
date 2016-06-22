$(function () {
    
    var $tabs = $('li');
    
    var $contents = $('.contents');
    
     $tabs.eq(0).on('click', function() {
        
        
        $contents.eq(0).show();
        $contents.eq(1).hide();
        $contents.eq(2).hide();
        
    })
    
    
    $tabs.eq(1).on('click', function() {
        
        
        $contents.eq(1).show();
        $contents.eq(0).hide();
        $contents.eq(2).hide();
        
    })
    
      $tabs.eq(2).on('click', function() {
        
        
        $contents.eq(2).show();
        $contents.eq(1).hide();
        $contents.eq(0).hide();
        
    })
      
 
    
});

