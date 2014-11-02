var app = require("../app");

var supertest = require("supertest");
var isIp = require("is-ip");
var cheerio = require("cheerio");

describe("html response", function() {

  var request;
  beforeEach(function() {
    request = supertest(app)
      .get("/")
      .set("Accept", "text/html");
  });

  it("returns an HTML response", function(done) {
    request
      .expect("Content-Type", /html/)
      .expect(200)
      .end(done);
  });

  it("returns your IP address", function(done) {
    request
      .expect(function(res) {
        var $ = cheerio.load(res.text);
        var ip = $(".ip-address").html().trim();
        if (!isIp(ip)) {
          throw new Error("IP address not found");
        }
      })
      .end(done);
  });

});
