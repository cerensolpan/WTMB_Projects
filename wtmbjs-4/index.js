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
app.listen(3000, () => {
    console.log('Listening on port 3000..')
})


//USERS

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

// Add new user using the console to database (axios.post('/user', { name: 'Aslı'}).then(console.log))
app.post('/user', async (req, res) => {
    const user = await UserService.add(req.body)
    res.send(user);
})

// Delete user using the console to database (axios.delete('/user/3').then(console.log))
app.delete('/user/:id', async (req, res) => {
    await UserService.del(req.params.id)
    res.send('ok');
})


//SONGS

//Get songs from the song-database.json
app.get('/song/all', async (req, res) => {
    const songs = await SongService.findAll()
    res.render('song', {
        songs
    })
})

// Get songs from the song-database.json
app.get('/song/:id', async (req, res) => {
    const song = await SongService.find(req.params.id)
    res.send(song);
})

// Add new song using the console to database (axios.post('/song', { name: 'x'}).then(console.log))
app.post('/song', async (req, res) => {
    const song = await SongService.add(req.body)
    res.send(song);
})

// Delete song using the console to database (axios.delete('/song/3').then(console.log))
app.delete('/song/:id', async (req, res) => {
    await SongService.del(req.params.id)
    res.send('ok');
})


//ARTIST

//Get artists from the artist-database.json
app.get('/artist/all', async (req, res) => {
    const artists = await ArtistService.findAll()
    res.render('artist', {
        artists
    })
})

// Get artists from the artist-database.json
app.get('/artist/:id', async (req, res) => {
    const artist = await ArtistService.find(req.params.id)
    res.send(artist);
})

// Add new artist using the console to database (axios.post('/artist', { name: 'x'}).then(console.log))
app.post('/artist', async (req, res) => {
    const artist = await ArtistService.add(req.body)
    res.send(artist);
})

// Delete artist using the console to database (axios.delete('/artist/3').then(console.log))
app.delete('/artist/:id', async (req, res) => {
    await ArtistService.del(req.params.id)
    res.send('ok');
})


//GENRE

//Get genres from the genre-database.json
app.get('/genre/all', async (req, res) => {
    const genres = await GenreService.findAll()
    res.render('genre', {
        genres
    })
})

// Get genres from the genre-database.json
app.get('/genre/:id', async (req, res) => {
    const genre = await GenreService.find(req.params.id)
    res.send(genre);
})

// Add new genre using the console to database (axios.post('/genre', { name: 'x'}).then(console.log))
app.post('/genre', async (req, res) => {
    const genre = await GenreService.add(req.body)
    res.send(genre);
})

// Delete genre using the console to database (axios.delete('/genre/3').then(console.log))
app.delete('/genre/:id', async (req, res) => {
    await GenreService.del(req.params.id)
    res.send('ok');
})