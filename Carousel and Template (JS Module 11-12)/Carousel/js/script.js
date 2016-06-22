$(function () {   

var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');
    
    var pixelsOffset = 125;
    var currentLeftValue = 0;
    
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;
   

(function($) {
    
    var defaults = {
        
        'shift': '125',
        
        'time': '500'
    };
    
    var options; 
    
    $.fn.carousel = function(params) {  
        
    options = $.extend({}, defaults, options, params);
 
    leftUIEl.click(function() {
        if (currentLeftValue != maximumOffset) {
        
        currentLeftValue += options.shift;
        elementsList.animate({ left : currentLeftValue + "px"}, options.time);
        }
       
    });
 
    rightUIEl.click(function() {
        if (currentLeftValue != minimumOffset) {
        
        currentLeftValue -= options.shift;
        elementsList.animate({ left : currentLeftValue + "px"}, options.time);
        }
    });
        
        return this;       
    }
    
    
})(jQuery);

$('.wrapper').carousel({shift: '250'})


})