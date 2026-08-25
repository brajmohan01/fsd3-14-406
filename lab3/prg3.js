import http from 'http';
const server = http.createServer((req, res) =>{
    if(req.url === "/"){
        res.end('<h1> Home Page </h1>');
    } else if(req.url === "/about"){
        res.end('<h1> About Page </h1>');
    } else if(req.url === "/product"){
        res.end(`<h1>Mobile Phones</h1>
            <h2>Price: $599</h2>
            <p>Discount: 10%</p>
            <a href="/buy">Buy Now</a>
        `);
    } else if(req.url === "/buy"){
        res.end('<h1>Buy Product</h1><p>Thank you for your purchase!</p>');
    } else {
        res.statusCode = 404;
        res.end(`<h1>404 Not Found</h1>
        <h1>Page Not Found</h1>
        <a href="/">Go to Home Page</a>`);
    }
})
const PORT = 4444;
server.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})