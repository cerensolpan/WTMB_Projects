const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const ArtistService = require("./services/artist-service");
const GenreService = require("./services/genre-service");
const SongService = require("./services/song-service");
const UserService = require("./services/user-service");

app.use(bodyParser.json());

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index')
})

// Specify the port
app.listen(2000, () => {
    console.log('working..')
})

// Get users from the user-database.json
app.get('/user/all', async (req, res) => {
    const users = await UserService.findAll()
    res.render('user', {
        users
    })
})

// Get user from the user-database.json
app.get('/user/:id', async (req, res) => {
    const user = await UserService.find(req.params.id)
    res.send(user);
})

// Add new user from the console to database (axios.post('/user', { userName: 'Aslı'}).then(console.log))
app.post('/user', async (req, res) => {
    const user = await UserService.add(req.body)
    res.send(user);
})