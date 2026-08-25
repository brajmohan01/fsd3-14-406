import http from "http";
const server = http.createServer((req, res) => {4
    console.log("req.url:" ,req.url);

    if(req.url === "/product") res.end("<h1>Product Page</h1>");
    else if(req.url === "/about") res.end("<h1>About Page</h1>");
    else if(req.url === "/contact") res.end("<h1>Contact Page</h1>");
    else if(req.url === "/") res.end("<h1>Home Page</h1>");
    else res.end("<h1>404 Not Found</h1><p>Page Not Found</p><a href='/'>Go to Home Page</a>");
});
const PORT = 4444;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});