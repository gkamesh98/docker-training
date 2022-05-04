const http = require("http");
const PORT = 3000;

console.log("starting");

const hp = http
  .createServer(function (request, response) {
    if (request.method === "GET" && request.url === "/assignment") {
      console.log("assignment 2");
      response.writeHeader(200, { "Content-Type": "text/html" });
      response.write(
        "<HTML><head><title>assignment</title></head><body><h1>Assignment 2</h1></body></HTML>"
      );
      response.end();
    } else {
      response.writeHeader(200, { "Content-Type": "text/html" });
      response.write(
        `<HTML><head><title>assignment</title></head><body><h1>Your in ${request.url}</h1></body></HTML>`
      );
      response.end();
    }
  })
  .listen(PORT);

hp.addListener("listening", () => {
  console.log("listing to " + PORT);
});
