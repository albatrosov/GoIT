define(

    'ctrl',
    ['jquery', 'model', 'view'],
    function() {
        
        var ctrl = function (model, view){

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
        }
        
            return {

                ctrl: ctrl()
            }
        };
    }
);