var app = require("../app");

var supertest = require("supertest");
var isIp = require("is-ip");

describe("plain text response", function() {

  var request;
  beforeEach(function() {
    request = supertest(app)
      .get("/")
      .set("Accept", "text/plain");
  });

  it("returns a plain text response", function(done) {
    request
      .expect("Content-Type", /text\/plain/)
      .expect(200)
      .end(done);
  });

  it("returns your IP address", function(done) {
    request
      .expect(function(res) {
        if (!isIp(res.text)) {
          throw new Error("Response is not an IP address");
        }
      })
      .end(done);
  });

});
