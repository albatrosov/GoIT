$(function () {

    var test = localStorage.getItem('test');

    var test = JSON.parse(test);
    
    var rightAnswers = localStorage.getItem('rightAnswers');
    
    var rightAnswers = JSON.parse(rightAnswers);

    var qAmount = ((Object.keys(test).length) / 2 + 1); // for correct test lenght

    var $tmpl = $('#template');

    for (i = 1; i < qAmount; i++) {

        $tmpl.append('<ul>{{q' + i + '}}</ul>') // add qe

    };

    var $ul = $('ul');

    for (i = 0; i < qAmount; i++) {

        $ul.eq(i - 1).append('{{#a' + i + '}}<li><label>{{.}}</label></li>{{/a' + i + '}}') // add answ li

    };

    function addTest() {

        var tmpl = $('#template').html();

        Mustache.parse(tmpl);

        var renderTest = Mustache.render(tmpl, test);

        $('.wrapper').html(renderTest)
    };

    addTest();

    // create checbosex

    var $li = $('li');

    var $label = $('label');

    for (i = 0; i < $li.length; i++) {

        $label.eq(i).before('<input type="checkbox" id="' + i + '">');

        $label.eq(i).attr('for', i)

    };
    
    $('.wrapper').append('<a class="waves-effect waves-light btn">Проверить мои результаты</a>')

//    function remove() {
//
//        var $checked = $('.checked');
//
//        $checked.eq(0).on('click', function () {
//
//        $checked.eq(0).removeAttr('class');
//            
//        check()
//        })
//    }
//
//    function check() {
//
//        $li.eq(0).on('click', function () {
//
//        $li.eq(0).attr('class', 'checked');
//            
//        remove()
//
//        })
//    }
//
//    check()
    
//    $('div').append('<div class="size"></div>');
//    
//    $('.size').on('click', function(){
//        
//        $(this).toggleClass('green');
//    })
//    
//    for (i = 0; i < $li.length; i++) {
//    
//        $li.eq(i).on('click', function() {
//
//            $(this).toggleClass("ch");  
//            
//            
//        })
//
//    };
//    
    var userAnswers = [];
    
     rightAnswers.sort();
    
    
  
     var rightAnswers = rightAnswers.toString();
    
    
    //modale
    
    var resultWindowYes = $('.resultWindowYes');
    var resultWindowNo = $('.resultWindowNo');
    
    var row = $('.row')    
    
    function showWindow(result){
        
    result.show();           
         
         row.animate({
      
             height: 'toggle',
             easing: 'easeInOutCirc'
                         
         });
         
         result.on('click', function(){
             
             result.hide();
             row.hide()
         })
        
    }
    
    // button
    
     var button = $('a');
    
     var input = $('input')   
    
     button.on('click', function(){         
         
         for (i = 0; i < $li.length; i++) {
         
            var checked = input.eq(i).prop('checked')

            if (checked == true) {

                var answerText = $li.eq(i).text();

                userAnswers.push(answerText)           
        
            }       
       
         }         
         
     userAnswers.sort()
      
     var userAnswerStr = userAnswers.toString()        
     
     if (rightAnswers == userAnswerStr) {
        
        showWindow(resultWindowYes)
     }
         
     else{             
             showWindow(resultWindowNo)
         }  
         
     });
     
     var reload = $('.card-action');
    
    reload.on('click', function(){
        
        location.reload()

    })
    
});