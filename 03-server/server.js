const http = require("http");


const server = http.createServer((req, res) => {
    console.log(req);
    if(req.url === "/") {
        res.write(`<h1>Hello from ${req.url}</h1>`)
    } else if (req.url === "/about") {
        res.write(`<h1>Hello from ${req.url}</h1>`)
    } else {
        res.write(`<h1>Hello from nowhere</h1>`)
    }
});

server.listen(3000, () => {
    console.log("სერვერი გაეშვა"); 
    console.log("http://localhost:3000");
});