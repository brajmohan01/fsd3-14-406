import http from 'http';

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET')
        res.end('Home Page');
    else if (req.url === '/product' && req.method === 'GET') {
        const products = [
            { id: 1, name: 'mobile', price: 10 },
            { id: 2, name: 'duster', price: 20 }
        ];
        res.end(JSON.stringify(products));
    }
    else if (req.url === '/product' && req.method === 'POST'){
        // retrive data from request body
        let body ;
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', (chunk) => {
            const product = JSON.parse(body);
            res.end(`Product ${product.name} added successfully`);
        });

        // add data to database
        res.writeHead(201,{
            "content-type": "application/json"
        })

        // send back the status
        res.end(JSON.stringify({message: 'Product added successfully', product: product, status: 201}));
f
        res.end('add Page');
    }
    else if (req.url === '/product' && req.method === 'PUT')
        res.end('update Page');
    else if (req.url === '/product' && req.method === 'DELETE')
        res.end('delete Page');
    else {
        res.statusCode = 404;
        res.end('Page Not Found');
    }
});

server.listen(3001, () => {console.log('prg11 is running on port 3001')});