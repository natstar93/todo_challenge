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
    for (var i = 0; i < self.taskList.items.length; i++) {
      if (self.taskList.items[i].completed) {
        self.taskList.items.splice(i, 1);
      }
    }
  };
}]);