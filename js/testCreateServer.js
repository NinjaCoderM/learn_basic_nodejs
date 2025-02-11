"use strict"

const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Response from Node.js');
  res.end();
})

server.listen(3_000);
//Aufruf mit curl http://localhost:3000 -> Ergebnis: Response form Node.js
