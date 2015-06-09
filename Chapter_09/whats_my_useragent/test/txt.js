var app = require("../app");

var supertest = require("supertest");

describe("plain text response", function() {

  var request;
  beforeEach(function() {
    request = supertest(app)
      .get("/")
      .set("User-Agent", "a cool browser")
      .set("Accept", "text/plain");
  });

  it("returns a plain text response", function(done) {
    request
      .expect("Content-Type", /text\/plain/)
      .expect(200)
      .end(done);
  });

  it("returns your User Agent", function(done) {
    request
      .expect(function(res) {
        if (res.text !== "a cool browser") {
          throw new Error("Response does not contain User Agent");
        }
      })
      .end(done);
  });

});
