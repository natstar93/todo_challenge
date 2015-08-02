describe('TodoController', function() {

  beforeEach(module('Todo'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoController');
  }));

  it('initialises with empty task description', function() {
    expect(ctrl.taskDescription).toBeUndefined();
  })

  xit('initialises with no current tasks', function() {
    expect(ctrl.taskList).toBeUndefined();
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

  it('can add a new task', function() {
    ctrl.taskDescription = 'New task';  
    ctrl.addTask();
    expect(ctrl.taskList.items[2].description).toContain('New task'); 
  })
})