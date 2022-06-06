const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const usersRoutes = require('./controllers/users')
const tracksRoutes = require('./controllers/tracks')
const entriesRoutes = require('./controllers/entries')
server.use('/users', usersRoutes)
server.use('/tracks', tracksRoutes)
server.use('/entries', entriesRoutes)

server.get('/', (req, res) => res.send('Welcome to your habit tracker'))

module.exports = server