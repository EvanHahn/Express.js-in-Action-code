var capitalize = require("../capitalize");

var chai = require("chai");
var expect = chai.expect;

describe("capitalize", function() {

  it("leaves empty strings alone", function() {
    expect(capitalize("")).to.equal("");
  });

  it("leaves strings with no words alone", function() {
    expect(capitalize("  ")).to.equal("  ");
    expect(capitalize("123")).to.equal("123");
  });

  it("capitalizes single words", function() {
    expect(capitalize("express")).to.equal("Express");
    expect(capitalize("cats")).to.equal("Cats");
  });

  it("makes the rest of the string lowercase", function() {
    expect(capitalize("javaScript")).to.equal("Javascript");
  });

  it("capitalizes multiple-word strings", function() {
    expect(capitalize("what is Express?")).to.equal("What is express?");
    expect(capitalize("i love lamp")).to.equal("I love lamp");
  });

  it("leaves already-capitalized words alone", function() {
    expect(capitalize("Express")).to.equal("Express");
    expect(capitalize("Evan")).to.equal("Evan");
    expect(capitalize("Catman")).to.equal("Catman");
  });

  it("capitalizes String objects without changing their values", function() {
    var str = new String("who is JavaScript?");
    expect(capitalize(str)).to.equal("Who is javascript?");
    expect(str.valueOf()).to.equal("who is JavaScript?");
  });

});
