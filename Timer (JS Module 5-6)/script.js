//have HTML

var h2 = document.getElementsByTagName('h2');  

var h4 = document.getElementsByTagName('h4');

// units

var ms = 0;

var s = 0;

var m = 0;

var h = 0;

//start time

h2[0].innerHTML = '0:0:0';    
h4[0].innerHTML = '.0';

// TIMER

function timer() {
    
    time = h2[0].innerHTML = h + ':' + m + ':' + s;
    
    milsec = h4[0].innerHTML = '.' + ms;
    
    ms++;      // every 1 millisecond
    
    if (ms == 200) {
        
        ms = 0;
        
        s++;
        
    }
    
    if (s == 60) {
        
        s = 0;
        
        m++;
    }
    
    if (m == 60) {
        
        m = 0;
        
        h++;
    }
    
    if (h == 24) {
        
        ms = 0;
        
        s = 0; 
        
        m = 0;
        
        h = 0;
        
    }   
    
};

// buttons

function addPoint(name) {
    
     var h5 = document.createElement('h5');
    
     var split = document.querySelectorAll('div');
    
     split[1].appendChild(h5);
    
     var h5 = document.getElementsByTagName('h5');
        
     var h5Lenght = h5.length; 
    
     h5[h5Lenght-1].innerHTML = name + time + milsec;
    
};




var buttons = document.querySelector('.buttons');

var startButton = document.createElement('a');

buttons.insertBefore(startButton, buttons.firstChild)

var startButton = document.querySelectorAll('a');

startButton[0].innerHTML = '<a class="waves-effect waves-light btn">Start</a>'



var stopButton = document.createElement('a');

buttons.insertBefore(stopButton, buttons.firstChild);

var stopButton = document.querySelectorAll('a');

stopButton[0].innerHTML = '<a class="waves-effect waves-light btn">Stop</a>'

stopButton[0].style.display = 'none';

stopButton[0].onclick = function () {

  clearInterval(fullTimer);
    
  startButton[0].style.display = 'inline-block';
    
  stopButton[0].style.display = 'none';
    
  addPoint('Pause ');

  
}



startButton[0].onclick = function () {

  fullTimer = setInterval(timer, 1);
    
  stopButton[0].style.display = 'inline-block';
    
  startButton[0].style.display = 'none';

};

var button = document.querySelectorAll('.btn');

 button[2].onclick = function () {
    
     addPoint('Split ')
    
 }

 button[3].onclick = function () {   
  
     
     ms = 0;
        
     s = 0; 
        
     m = 0;
        
     h = 0;
     
     timer();
     
     startButton[0].style.display = 'inline-block';
    
     stopButton[0].style.display = 'none';    
        
     clearTimeout(fullTimer);
     
     var split = document.querySelectorAll('div');
     
     var h5 = document.querySelectorAll('h5');
     
     for (i = 0; i < h5.length; i++) {
     
     split[1].removeChild(h5[i]);
         
     };
 }

