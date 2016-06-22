//function human() {
//    
//    this.name = 'John';
//    
//    this.age = 23;
//    
//    this.sex = 'male';
//    
//    this.height = 175;
//    
//    this.weight = 80;
//}
//
//var newHuman = new human();
//
//function worker() {
//    
//    this.workplace = 'google';
//    
//    this.payment = 150;
//    
//    this.doWork = function() {
//        
//        console.log('Very hard work')
//    }
//    
//};
//
//function student() {
//    
//    this.university = 'MIT';
//    
//    this.scholarhip = 40;
//    
//    this.viewEpisode = function() {
//        
//        console.log('Another 40 min of life was wasted for nothing')
//    }
//}
//
//// create 
//
//worker.prototype = newHuman;
//
//student.prototype = newHuman;
//
//var newStudent = new student;
//
//var newWorker = new worker();
//
//var worker2 = new worker();
//
//// console
//
//console.log(newWorker.name)
//
//newWorker.doWork()
//
//newStudent.viewEpisode();
//
//console.log(worker2.age)
//
//console.log(worker2)




var human = {
    
    name: 'John',
    
    age: '23',
    
    sex: 'male',
    
    height: '175',
    
    weight: '80'
}

var worker = {
    
    workplace: 'home',
    
    payment: '150',
    
    doWork: function(){
        
        alert('hi')
    }
    
};

var student = {
    
    university: 'MIT',
    
    scholarship: '40',
    
    viewEpisode: function() {
        
        console.log('another 40 min of my life was wasted for nothing')
    }
    
};

worker.__proto__ = human;

student.__proto__ = human;


//worker.doWork()

student.viewEpisode()

console.log(worker.name)
