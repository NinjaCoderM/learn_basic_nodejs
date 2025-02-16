import express from "express";

"strict mode"
import {server, PORT} from "./server.js"; //"type": "module" in package.json notwendig
import {ProfileRoutes} from  "./routes/ProfileRoutes.js";
import MainLayouts from "express-ejs-layouts";
import {logger} from "../middleware/logger.js"
import {logJson2FS} from "../middleware/jsonLoggerFS.js";
import {connection} from "../db/db.js";

//MySQL
//connection.query(
//  'select * from `student`',
//  function (error, results, fields) {
//    console.log(results);
//  }
//)

(async () => {
  const students = await connection`select * from student`;
  console.log(students);
})();

server.use(express.urlencoded({ extended: true }));

//server.use(logger)
server.use(logJson2FS);

server.use(express.static("views/public"));

server.use(MainLayouts);
server.set("layout", "layouts/template") //Standart - Abweichung mit res.render option layout: "layouts/templateEx"
server.set("view engine", "ejs");

server.get('/', /*logger,*/ (req, res) => {
  res.render("main/index", {name: "Simone", nachname:"Müllller", title:"Title Simone", path: req.path});
})

server.use("/profil",ProfileRoutes);

server.use((req, res) => {
  res.status(404).send("Not Found");
})

server.listen(PORT, ()=> console.log("Server ist gestartet auf PORT: " + PORT))

console.log("gestartet ... ")
