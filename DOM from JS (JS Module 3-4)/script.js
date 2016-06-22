var test = {
    
lenght: 3,

//HEADER
    
createHeader: function() {

var body = document.getElementsByTagName('body');

var header = document.createElement('header');

body[0].appendChild(header);

header.innerHTML = '<h4>Тест по программированию<h4>';

document.body.style.width = '600px';

document.body.style.margin = '0 auto';

header.style.textAlign = 'center';

header.style.marginBottom = '60px'
    
},

//COUNTER



//LIST

createList: function() {
    
var body = document.getElementsByTagName('body');

var div = document.createElement('div');

body[0].appendChild(div); 

var div = document.getElementsByTagName('div');

var form = document.createElement('form');

div[0].appendChild(form);

var form = document.getElementsByTagName('form');
        
for (i = 1; i <= this.lenght; i++) {
    
    var ul = document.createElement('ul');    

    form[0].appendChild(ul);
    
    ul.innerHTML = 'Вопроc № ' + i;
  
    
}

ul.style.marginBottom = '50px';


var ul = document.getElementsByTagName('ul');

for (j = 0; j < this.lenght; j++) {        
        
    for (i = 1; i <= this.lenght; i++) {      
    
        var li = document.createElement('li');
        
        ul[j].appendChild(li);        

        li.innerHTML = '<input type="checkbox" id="answer' + i + ' question' + j + '"><label for="answer' + i + ' question' + j + '">Вариант ответа №</label>' + i;
        
    }

}
    
},


//BUTTON

createButton: function() {
    
var form = document.getElementsByTagName('form');

var button = document.createElement('div');

var div2 = document.getElementsByTagName('div');

form[0].appendChild(button);

div2[1].className = 'button';

button.innerHTML = '<a class="waves-effect waves-light btn">Проверить мои результаты</a>';

button.style.width = '300px';

button.style.margin = '40px auto';


}

}

test.createHeader();
test.createList();
test.createButton();