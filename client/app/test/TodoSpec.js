describe('A test suite', function () {
  var expect = window.expect;

  before(function() {

    if (window.__html__) {
      document.body.innerHTML = window.__html__['test/app-fixture.html'];
    }

    // start the TodoMVC app (defined in js/TodoMVC.js)
    TodoMVC.start();
  });

  beforeEach(function() {
    window.localStorage.removeItem('todos-backbone-marionette', '');
  });

  var addTodo = function(text) {
    var input = $('#new-todo');
    var e = $.Event("keypress");
    e.which = e.keyCode = 13;
    input.val(text);
    input.trigger(e);
  };

  it("Add a new Todo", function () {
    addTodo('TODO A');
    expect($('#todo-list li').length).to.be.equal(1);
  });

  it("Deleting TODO", function () {
    addTodo('This should be deleted');
    $('#todo-list li:first-child .destroy').click();
    expect($('#todo-list li').length).to.be.equal(1);
  });

});
