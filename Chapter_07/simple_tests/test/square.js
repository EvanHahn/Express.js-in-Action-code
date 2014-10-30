var square = require('../square');

var chai = require('chai');
var expect = chai.expect;

describe('square', function() {

  it('can square 0', function() {
    expect(square(0)).to.equal(0);
  });

  it('can square 1', function() {
    expect(square(1)).to.equal(1);
  });

  it('can square positive numbers other than 1', function() {
    expect(square(2)).to.equal(4);
    expect(square(12)).to.equal(144);
    expect(square(10.3)).to.be.closeTo(106.09, 0.1);
  });

  it('can square -1', function() {
    expect(square(-1)).to.equal(1);
  });

  it('can square negative numbers other than -1', function() {
    expect(square(-2)).to.equal(4);
    expect(square(-12)).to.equal(144);
    expect(square(-10.3)).to.be.closeTo(106.09, 0.1);
  });

});
