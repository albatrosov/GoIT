define(

    'model',
    ['jquery'],
    
    function () {
        
        var model = function () {

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
        };
        
        return {
           
            model: model()
        };
        
    }
    
);

