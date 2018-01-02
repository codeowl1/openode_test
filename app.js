var http = require('http'),
    app = require('./app');

//var port = '80',
//    host = 'regio.fr.openode.io';
    //host = 'localhost';

var port = normalizePort(process.env.PORT || '3002');
app.set('port', port);
var server = http.createServer(app);
server.listen(port);
server.on('listening', onListening);
server.on('request', function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');

});

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Listening on ' + bind);
}


function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}