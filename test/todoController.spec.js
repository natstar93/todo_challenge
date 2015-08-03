describe('TodoController', function() {

  beforeEach(module('Todo'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoController');
  }));

  it('initialises with empty task description', function() {
    expect(ctrl.taskDescription).toBeUndefined();
  });

  it('initialises with no current tasks', function() {
    expect(ctrl.taskList.items.length).toBe(0);
  });

  it('can add a new task', function() {
    ctrl.taskDescription = 'New task';
    ctrl.addTask();
    expect(ctrl.taskList.items[0].description).toContain('New task'); 
  });

  it('can delete completed tasks', function() {
    ctrl.taskList.items[0] = { "description":"stuff", "completed":true }
    ctrl.deleteCompleted();
    expect(ctrl.taskList.items[0]).toBeUndefined();
  });

  it('knows the total number of tasks', function() {
    ctrl.taskDescription = 'New task';
    ctrl.addTask();
    expect(ctrl.taskList.items.length).toBe(1);
  });
});
