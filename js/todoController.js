todo.controller('TodoController', [function() {

  var self = this;

  self.taskList = {
    "items": [
      {
        "description": "Buy Vietnamese food"
      },
      {
        "description": "Finish homework"
      }
    ]
  }

  self.addTask = function() {
    if (self.taskDescription) {
      self.taskList.items.push( { "description" : self.taskDescription } );
    }
  };

}]);