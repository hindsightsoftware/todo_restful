describe('A test suite', function () {
  var expect = window.expect;

  it('should fail', function (done) {

    var todos = new TodoMVC.Todos.TodoList;
    todos.fetch({success: function() {
      console.log(todos); // "Chance, Churc"
      done();
    }});

  });

  it('should pass', function () {
    expect(true).to.be.equal(true);
  });
});
