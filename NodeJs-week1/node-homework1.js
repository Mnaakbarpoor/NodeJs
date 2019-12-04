
const http = require('http');

let state = 10;

let server = (req , res) => {
    res.writeHead(200 , {'Content-Type' : 'Text/html'});
    if(req.url === "/state"){
        res.writeHead(200 , {'Content-Type' : 'Text/html'});
        res.end('10');
    }else if(req.url ==="/add"){
        res.writeHead(200 , {'Content-Type' : 'Text/html'});
        res.end("OK");
        state = state + 1;
    }else if(req.url === "/substrac"){
        res.writeHead(200 , {'Content-Type' : 'Text/html'});
        res.end('OK');
        state = state - 1;
    }else if(req.url === "/reset"){
        res.writeHead(200 , {'Content-Type' : 'Text/html'});
        res.end("OK");
    }else if(req.url === "/bsd"){
        res.writeHead(404 , {'Content-Type' : 'Text/html'});
        res.end("not found")
    }
}

let myServer = http.createServer(server);
myServer.listen(8080);

