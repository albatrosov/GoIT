var names = [];

var countArr = ['first', 'second', 'third', 'fourth', 'fifth']

    
    for (count of countArr) {
        
         names.push(prompt('Enter ' + count + ' name:'));
    }


var userName = prompt('Enter your name:');


for (name of names) {
    
    
    if (userName == name) {
        
        var flag = true;
    } 
   
}

if (flag == true) {
    
    alert(userName + ', welcome')
}

else {
    
    alert('error')
}

