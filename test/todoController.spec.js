describe('TodoController', function() {

  beforeEach(module('Todo'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoController');
  }));

  it('initialises with empty task description', function() {
    expect(ctrl.taskDescription).toBeUndefined();
  })

  var items = [
      {
        "description": "Buy Vietnamese food"
      },
      {
        "description": "Finish homework"
      }
    ]

  it('displays tasks', function() {
    expect(ctrl.taskList.items).toEqual(items); 
  })
})