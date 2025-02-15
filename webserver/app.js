"strict mode"
import {server, PORT} from "./server.js"; //"type": "module" in package.json notwendig
import {ProfileRoutes} from  "./routes/ProfileRoutes.js"

server.get('/', (req, res) => {
  res.send("Hallo Welt");
})

server.use("/profil",ProfileRoutes);

server.use((req, res) => {
  res.status(404).send("Not Found");
})

server.listen(PORT, ()=> console.log("Server ist gestartet auf PORT: " + PORT))

console.log("gestartet ... ")
