const {
    response
} = require('express');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const ArtistService = require("../services/artist-service");
const SongService = require("../services/song-service");
const GenreService = require("../services/genre-service");
const Song = require('../models/song-model');

//ARTIST

//Get artists from the artist-database.json
router.get('/all', async (req, res) => {
    const artists = await ArtistService.findAll();
    console.log(artists);
    res.render('artist', {
        artists
    })
})

// Get artists from the artist-database.json
router.get('/:id', async (req, res) => {
    const artist = await ArtistService.find(req.params.id)
    res.send(artist);
})

// Add new artist using the console to database (axios.post('/artist', { name: 'x'}).then(console.log))
router.post('/', async (req, res) => {
    const artist = await ArtistService.add(req.body)
    res.send(artist);
})

// Delete artist using the console to database (axios.delete('/artist/3').then(console.log))
router.delete('/:id', async (req, res) => {
    await ArtistService.del(req.params.id)
    res.send('ok');
})

router.post("/release", async (req, res) => {

    const artist = await ArtistService.find(req.body.artistId)
    const genre = await GenreService.find(req.body.genreId)
    const newSong = new Song({
        name: req.body.name,
        artist: artist,
        genre: genre
    })
    const song = await SongService.add(newSong)
    await ArtistService.release(artist, genre, song);
    res.send('song released');
})

module.exports = router