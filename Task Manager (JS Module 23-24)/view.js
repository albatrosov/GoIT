define(

    'view',
    ['jquery', 'model'],
    function() {
        
        var view = function (model) {

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
    }
        
        return {
            
            view: view()
        }
    }
);