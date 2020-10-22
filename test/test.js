const request = require("supertest");
const app = require("../index.js");

describe("GET /", () => {
    it("respond with test message", (done) => {
        request(app).get("/").expect("Hello World", done);
    })
});