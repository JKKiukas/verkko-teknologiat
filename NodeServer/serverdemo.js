var num1 = 2;
var num2 = 5;
var sum = num1 + num2;
console.log('Summa on ' + sum);

/*
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/plain; charset=utf8'});
    res.end('Palvelin vastaa\n');
}).listen(3000, '127.0.0.1');

console.log('Palvelin odottaa pyyntöäsi osoitteesta http://127.0.0.1:3000');
*/

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var qHref = q.href;

    res.writeHead(200, {'Content-type': 'text/plain; charset=utf8'});
    res.write('Palvelin vastaa, url:iin lisätty '+qHref+'\n');
    res.end();
}).listen(3000, '127.0.0.1');

console.log('Palvelin odottaa pyyntöäsin osoitteessa http://127.0.0.1:3000\nLisää url:iin "/jokusana"');
