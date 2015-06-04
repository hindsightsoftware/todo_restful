describe('A test suite', function () {
  var expect = window.expect;

  before(function() {

    this.timeout(50000);

    if (window.__html__) {
      document.body.innerHTML = window.__html__['test/app-fixture.html'];
    }

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

  it("Add a new Todo", function (done) {

    $.mockjax({
      url: "api/todos",
      responseText: [{ id: 1, title: "Foo", completed: false }],

      onAfterComplete: function() {
        // do any required cleanup
        expect($('#todo-list li').length).to.be.equal(1);
        done();
      }
    });

    //addTodo('TODO A');

  });

});
