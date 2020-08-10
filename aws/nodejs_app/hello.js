var http = require('http');
var content = function(req, res) {
    res.end("Hello Nodejs on the AWS!" + "\n");
    res.writeHead(200);
}

var w = http.createServer(content);
w.listen(8000);
