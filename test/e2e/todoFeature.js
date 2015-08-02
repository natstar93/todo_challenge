describe('To do list', function() {

  var descriptionBox = element(by.model('todoCtrl.taskDescription'));
  var addTaskButton = element(by.className('add-task-btn'));
  var editTaskButton = element(by.className('edit-task-btn'));
  var doneEditingButton = element(by.className('done-editing-btn'));
  var errorBox = element(by.className('error-msg'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Todo List of Joy');
  });

  describe('adding tasks', function(){
    it('can add a new task', function() {
      descriptionBox.sendKeys('Write feature test');
      addTaskButton.click();
      expect(element.all(by.binding('task.description')).last().getText()).toContain('Write feature test');
    });

    it('does not add task if description too short', function() {
      descriptionBox.sendKeys('W');
      addTaskButton.click();
      expect(element.all(by.binding('task.description')).last().getText()).toNotContain('W');
      expect(errorBox.element(by.className('length-error')).getText()).toEqual('Description must be 2 or more characters long.')
    });    

    it('does not add task if description missing', function() {
      descriptionBox.sendKeys(' ');
      addTaskButton.click();
      expect(element.all(by.binding('task.description')).last().getText()).toNotEqual(' ');
      expect(errorBox.element(by.className('required-error')).getText()).toEqual('Description is required.')
    });  
  });

  it('can edit task', function() {
    editTaskButton.click();
    editBox.sendKeys('edited')
    doneEditingButton.click();
    expect(element.all(by.binding('task.description')).getText()).toContain('edited');
  });
});