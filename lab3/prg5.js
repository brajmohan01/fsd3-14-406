import http from 'http';
const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'application/json'});
    const products = [
        {id: 1, name: 'Mobile Phone', price: 599, discount: '10%'},
        {id: 2, name: 'Laptop', price: 999, discount: '15%'},
        {id: 3, name: 'Tablet', price: 399, discount: '5%'}
    ];
    res.end(JSON.stringify(products));
});

server.listen(4444, () =>{
    console.log(`Server is running on port 4444`);
})