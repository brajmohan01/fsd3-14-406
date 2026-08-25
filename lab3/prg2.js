import http from 'http';
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("<h1>Server is running</h1>");
});

const PORT = 4444;
server.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})