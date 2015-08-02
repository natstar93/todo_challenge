todo.controller('TodoController', [function() {

  var self = this;

  self.taskList = {
    "items": [
    ]
  }

  self.addTask = function() {
    if (self.taskDescription) {
      self.taskList.items.push( { "description" : self.taskDescription, "completed": false } );
    }
  };

}]);