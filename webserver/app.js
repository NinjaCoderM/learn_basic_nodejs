"strict mode"
import {server, PORT} from "./server.js"; //"type": "module" in package.json notwendig
import {ProfileRoutes} from  "./routes/ProfileRoutes.js";
import MainLayouts from "express-ejs-layouts";

server.use(MainLayouts);
server.set("layout", "layouts/template")
server.set("view engine", "ejs");

server.get('/', (req, res) => {
  res.render("main/index", {name: "Simone", nachname:"Müllller", title:"Title Simone", path: req.path});
})

server.use("/profil",ProfileRoutes);

server.use((req, res) => {
  res.status(404).send("Not Found");
})

server.listen(PORT, ()=> console.log("Server ist gestartet auf PORT: " + PORT))

console.log("gestartet ... ")
