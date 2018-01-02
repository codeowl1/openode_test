// Requires
var http = require('http');
// Variables
var port = '80',
    host = 'regio.fr.openode.io';
    //host = 'localhost';

// Server
http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');

}).listen(port, host);

console.log('Server running at ' + host + ':' + port);

