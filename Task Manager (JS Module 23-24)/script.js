

// MODEL

function Model() {
    
    var self = this;
    
    self.data = {
        
        tasks: ['task 1', 'task 2', 'task 3']
        
    } 
      
    self.add = function(item) {
        
        if (item.length == 0) {
            
            alert('Unable set empty task');
            
            return;
        };
        
        console.log(self.data.tasks)
        
        self.data.tasks.push(item);
        
        return self.data;
    };
    
    self.removeArrTask = function(item) {
        
        var index = $.inArray(item, self.data.tasks);
        
        if (index == -1) {
            
            return;
        };
        
        self.data.tasks.splice(index, 1);
        
        return self.data;
    };
}

// VIEW

function View(model) {
    
    var self = this;
    
    var structure = $('#template__item').html();

    function renderStructure() {
    
     
      let rendered = Mustache.render(structure);
      $('.input').html(rendered);
        
      self.elems = {
          
          input: $('.item__new'),
          button: $('.item__add'),          
          item: $('.list__item')
      }
      
    self.renderList(model.data)
      
    };    
    

    var taskList = $('#template__list').html()        
        
    self.renderList = function(data) {    
       
        let rendered = Mustache.render(taskList, data);
        
        $('.tasks').html(rendered);

        };   
    
    renderStructure()
};

// CONTROLLER

function Controller(model, view){
    
    var self = this;
    
    view.elems.button.on('click', addTask);
    view.elems.item.on('click', 'li', removeTask);
    $('.tasks').on('click', 'i', removeTask)
     
    
    function addTask() {
        
        var newTask = view.elems.input.val();        
        model.add(newTask);
        view.renderList(model.data);
        view.elems.input.val('');
    };
    
    function removeTask() {
        
        
        var taskValue = $(this).attr('data');
        console.log('taskValue = ' + taskValue)
        
        model.removeArrTask(taskValue);
        
        console.log(model.data.tasks);
        
        view.renderList(model.data)
    };
    
    
}

$(function() {

var b = new Model()
var a = new View(b)
var c = new Controller(b, a)
    
    
}) 