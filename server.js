var http = require("http");
var url = require("url");
var querystring = require("querystring");
var router = require("./router");

function start (port) {
	console.log("Starting simple HTTP server using Node.js");
	var onRequest = function(request, response) {
		var pathname = url.parse(request.url).pathname;
		//console.log("Request received ");
		router.route(pathname);
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.write("\nHTTP Server started at port: " + port);
		response.end();
	}
	var server = http.createServer(onRequest).listen(port);

	console.log("Simple HTTP server now running on port: " + port);
}

exports.start = start;