describe('A test suite', function () {
  var expect = window.expect;

  it('should fail', function () {
    expect(true).to.be.equal(false);
  });

  it('should pass', function () {
    expect(true).to.be.equal(true);
  });
});
