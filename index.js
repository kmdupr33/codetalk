"use strict";
const http = require('http');
const server = http.createServer((request, response) => {
    response.end();
});
server.listen(8080);
