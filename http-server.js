const http = require("http");

const server = http.createServer(function (req, res) {
    if (req.url === "/getData") {
        res.end("Get the data");
    }
    res.end("Hello world");
});

server.listen(7777);