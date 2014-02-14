var http = require("http");
var port = 8888;

console.log("Starting simple HTTP server using Node.js");

var onRequest = function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}
var server = http.createServer(onRequest).listen(port);

console.log("Simple HTTP server now running on port: " + port);