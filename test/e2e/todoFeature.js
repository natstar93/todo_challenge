describe('To do list', function() {

  var descriptionBox = element(by.model('todoCtrl.taskDescription'));
  var addTaskButton = element(by.className('add-task-btn'));
  var editTaskButton = element(by.className('edit-task-btn'));
  var doneEditingButton = element(by.className('done-editing-btn'));
  var errorBox = element(by.className('error-msg'));
  var editBox = element(by.className('edit-box'));
  var completedTick = element(by.className('completed-tick'));
  var activeBtn = element(by.className('active-btn'));
  var completedBtn = element(by.className('completed-btn'));
  var deleteCompletedBtn = element(by.className('delete-completed-btn'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Todo List of Joy');
  });

  createTask = function() {
    descriptionBox.sendKeys('Buy Vietnamese food');
    addTaskButton.click();
  }

  describe('adding tasks', function(){
    it('can add a new task', function() {
      descriptionBox.sendKeys('Write feature test');
      addTaskButton.click();
      expect(element.all(by.binding('task.description')).last().getText()).toContain('Write feature test');
    });

    it('does not add task if description too short', function() {
      descriptionBox.sendKeys('W');
      addTaskButton.click();
      expect(browser.isElementPresent(by.binding('task.description'))).toBe(false);
      expect(errorBox.element(by.className('length-error')).getText()).toEqual('Description must be 2 or more characters long.')
    });    

    it('does not add task if description missing', function() {
      descriptionBox.sendKeys(' ');
      addTaskButton.click();
      expect(browser.isElementPresent(by.binding('task.description'))).toBe(false);
      expect(errorBox.element(by.className('required-error')).getText()).toEqual('Description is required.')
    });  
  });

  it('can edit task', function() {
    createTask();
    editTaskButton.click();
    editBox.clear();
    editBox.sendKeys('edited');
    doneEditingButton.click();
    expect(element.all(by.binding('task.description')).getText()).toContain('edited');
  });

  it('can filter by completed tasks', function() {
    createTask();
    completedTick.click();
    completedBtn.click();
    expect(element.all(by.binding('task.description')).getText()).toContain('Buy Vietnamese food');
  });

  it('can filter by active tasks', function() {
    createTask();
    activeBtn.click();
    expect(element.all(by.binding('task.description')).getText()).toContain('Buy Vietnamese food');
  });

  it('can delete completed tasks', function() {
    createTask();
    completedTick.click();
    deleteCompletedBtn.click();
    expect(element.all(by.binding('task.description')).getText()).toNotContain('Buy Vietnamese food');
  });
});
