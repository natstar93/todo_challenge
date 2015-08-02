describe('TodoController', function() {

  beforeEach(module('Todo'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoController');
  }));

})