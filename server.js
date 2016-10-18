var http = require('http');

http.createServer(function(req, res){

if(req.url==='/hello'){
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Hello World!\n');
    }
else if (req.url === '/goodbye') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Goodbye World!\n');
    }
else if (req.url ==='/PinkFloyd') {
        res.writeHead (200, {'Content-Type' : 'text/plain'});
	res.end ('I wll see you on the dark side of the moon\n');
	}
else if (req.url === '/cake') {
        res.writeHead (200, {'Content-Type' : 'text/plain'});
	res.end ('Yummy!\n');
	}
else if (req.url === '/coffee') {
        res.writeHead (200, {'Content-Type' : 'text/plain'});
	res.end ('Yay!\n');
    }
else if (req.url === '/TheBestCartoon') {
        res.writeHead (200, {'Content-Type' : 'text/plain'});
	res.end ('Rick and Morty\n');
    }
else {
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end("Nope!");
    }
}).listen(756);
