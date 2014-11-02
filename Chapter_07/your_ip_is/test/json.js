var app = require("../app");

var supertest = require("supertest");
var isIp = require("is-ip");

describe("JSON response", function() {

  var request;
  beforeEach(function() {
    request = supertest(app)
      .get("/")
      .set("Accept", "application/json");
  });

  it("returns a JSON response", function(done) {
    request
      .expect("Content-Type", /application\/json/)
      .expect(200)
      .end(done);
  });

  it("returns your IP address", function(done) {
    request
      .expect(function(res) {
        var data = JSON.parse(res.text);
        if (!isIp(data.ip)) {
          throw new Error("Response does not have an IP address");
        }
      })
      .end(done);
  });

});
