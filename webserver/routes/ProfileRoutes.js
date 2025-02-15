import express from 'express';

export let ProfileRoutes = express.Router();

ProfileRoutes.get('/data', (req, res) => {
  res.send(`Data `)
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
