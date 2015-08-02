describe('To do list', function() {

  var descriptionBox = element(by.model('todoCtrl.taskDescription'));
  var addTaskButton = element(by.className('btn'))

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Todo List of Joy');
  });

  it('can add a new task', function() {
    descriptionBox.sendKeys('Write feature test');
    addTaskButton.click();
    expect(element.all(by.binding('task.description')).last().getText()).toContain('Write feature test');
  });

});