"strict mode"
import {server, PORT} from "./server.js"; //"type": "module" in package.json notwendig

server.get('/', function (req, res) {
  res.send('Hello World ...+')
})

server.listen(PORT, ()=> console.log("Server ist gestartet auf PORT: " + PORT))

console.log("gestartet ... ")
