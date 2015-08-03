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
    self.taskDescription = '';
  };

  self.deleteCompleted = function() {
    for (var i = self.taskList.items.length - 1; i > -1; i--) {
      if (self.taskList.items[i].completed) {
        self.taskList.items.splice(i, 1);
      }
    }
  };
}]);