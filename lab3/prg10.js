import http from 'http';
import { createReadStream } from 'fs';
const server = http.createServer((req, res) => {
    if(req.url == '/' && req.method == 'GET') {
        res.end('<h1>Product Details</h1>');
    }
    else if(req.url == '/product' && req.method == 'GET') {
        res.writeHead(200, {'Content-Type': 'text/json'});
        const stream = createReadStream('./data/products.json', {encoding: 'utf-8'});
        stream.pipe(res);
    }
    else{
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(3000, () => console.log('prg10 is running at 3000...'));