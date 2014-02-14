var server = require("./server");
var defaultPort = 8888;
var port = defaultPort;

process.argv.forEach(function (val, index, array) {
	if (index == '02') {
		port = val;
	}
});

server.start(port);