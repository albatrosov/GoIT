$(function () {

    
//  var li = function(tag) {
//        
//        var li = $(tag).children('li');
//        
//        return li;
//        
//    }
//  
//      
//var ul = function(li, i) {
//    
//    var ul = li.eq(i).children('ul');
//    
//    return ul;
//}
//
//var hover = function(i, li, ul) {
//    
//    li.eq(i).hover(function () {
//    
//        ul.eq(0).slideDown();
//        
//    },
//    
//    function() {
//                    
//        ul.eq(0).slideUp();
//    }
//        
//    )}
//
//
//function showMenu(i) {
//    
//    li('.MainMenu');
//    ul(li, i);
//    hover(i, li, ul);
//    
//}
//    
//for (i = 0; i < 15; i++) {
//    
//    showMenu(i)
//}

  
    var $mainLi = $('.mainMenu').children('li');

    var $subLi = $('.subMenu').children('li');


    function showMenu(number) {

        var $mainUl = $mainLi.eq(number).children('ul');

        $mainLi.eq(number).hover(function () {

                $mainUl.eq(0).slideDown(200);

            },

            function () {

                $mainUl.eq(0).slideUp(200);
            }

        )
        var $subUl = $subLi.eq(number).children('ul')

        $subLi.eq(number).hover(function () {

                $subUl.eq(0).slideDown(200)

            },

            function () {

                $subUl.eq(0).slideUp(200)
            }
        )
    }

    var menuLenght = $subLi.length

    for (i = 0; i < menuLenght; i++) {

        showMenu(i)
    }



    $("#country_id").selectbox(); 
       
    
    
});


