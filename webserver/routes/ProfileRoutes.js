import express from 'express';

export let ProfileRoutes = express.Router();

ProfileRoutes.get('/data', (req, res) => {
  res.send(`Data `)
})

ProfileRoutes.route("/userdata").get((req, res) => {
  res.render("main/usrData", {title: "User Data", path: "/profil" + req.path});
}).post((req, res) => {
  res.render("main/index", {name: req.body.eingabe, nachname:"Müllller", title:"Title Simone", path: req.path});
}).delete((req, res) => {
  res.send(`UserData delete `)
}).put((req, res) => {
  res.send(`UserData put `)
})

ProfileRoutes.get('/Horst', (req, res) => {
  res.render("main/profil", {name:"Horst", title:"Title Horst", path: req.path, layout: "layouts/templateEx"})
})

ProfileRoutes.get('/:userId', (req, res) => {
  res.send(`Hello World, im Profil ` + req.params.userId )
})

ProfileRoutes.get('/', (req, res) => {
  res.send('Hello World, im Profil ' + req.query.name + " Json: " + JSON.stringify(req.query))
})

ProfileRoutes.post('/', (req, res) => {
  res.send('Hello World, im Profil')
})
