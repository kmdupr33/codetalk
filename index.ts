import * as http from 'http';

const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {
  
  response.end();
})

server.listen(8080);