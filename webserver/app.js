"strict mode"
import {server, PORT} from "./server.js"; //"type": "module" in package.json notwendig

server.get('/', (req, res) => {
  res.send("Hallo Welt");
})

server.get('/profil/:userId', (req, res) => {
  res.send(`Hello World, im Profil ` + req.params.userId )
})


server.post('/profil', (req, res) => {
  res.send('Hello World, im Profil')
})

server.use((req, res) => {
  res.status(404).send("Not Found");
})

server.listen(PORT, ()=> console.log("Server ist gestartet auf PORT: " + PORT))

console.log("gestartet ... ")
