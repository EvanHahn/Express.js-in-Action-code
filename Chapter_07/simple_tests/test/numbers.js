var chai = require('chai');
var expect = chai.expect;

describe('numbers', function() {

  it('has 2 equal to be greater than 0', function() {
    expect(2).to.be.above(0);
  });

  it('has 1 equal to 1', function() {
    expect(1).to.equal(1);
  });

});
