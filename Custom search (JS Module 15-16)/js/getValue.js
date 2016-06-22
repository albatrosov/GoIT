$(function() {
    
    
    $('.btn').on('click', function() {
        
        setValue()
    });
    
    $('window').keydown(function(e) {
        
        e.which = 13;
        
        setValue()
    })
    
})