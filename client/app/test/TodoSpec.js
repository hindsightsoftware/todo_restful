describe('A test suite', function () {
  var expect = window.expect;

  before(function() {

    if (window.__html__) {
      document.body.innerHTML = window.__html__['test/app-fixture.html'];
    }

    window.localStorage.removeItem('todos-backbone-marionette', '');

    TodoMVC.on('start', function () {
      Backbone.history.start();
    });
    // start the TodoMVC app (defined in js/TodoMVC.js)
    TodoMVC.start();
  });

  var addTodo = function(text) {
    var input = $('#new-todo');
    var e = $.Event("keypress");
    e.which = e.keyCode = 13;
    input.val(text);
    input.trigger(e);
  };

  it("Adding new TODOs", function () {
    addTodo('TODO A');
    addTodo('TODO B');
    expect($('#todo-list li').length).to.be.equal(2);
  });

});
