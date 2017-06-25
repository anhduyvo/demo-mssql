﻿// var http = require('http');

// http.createServer(server).listen(server.get('port'), function () {
//     console.log('eInventory Web & API is running on port:' + server.get('port'));    
// });


var http = require('http');
var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello Azure!");
});

var port = process.env.PORT || 1337;
server.listen(port);
console.log("Server running at http://localhost:%d", port);
