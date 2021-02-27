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
    try {
        const artists = await ArtistService.findAll();
        res.send(artists)
    } catch (err) {
        res.status(404);
        res.send({
            error: "Artists get operation is failed" + err,
        });
    }
})

// Get artists from the artist-database.json
router.get("/:id", async (req, res) => {
    try {
        const artist = await ArtistService.find(req.params.id);
        if (!artist) res.status(404);
        res.send(artist);
    } catch (err) {
        res.status(404);
        res.send({
            error: "Artist get operation is failed" + err,
        });
    }
})

// Add new artist using the console to database (axios.post('/artist', { name: 'x'}).then(console.log))
router.post('/', async (req, res) => {
    try {
        const artist = await ArtistService.add(req.body)
        res.send(artist);
    } catch (err) {
        res.status(404);
        res.send({
            error: "Artist post operation is failed" + err,
        });
    }
})

// Delete artist using the console to database (axios.delete('/artist/3').then(console.log))
router.delete('/:id', async (req, res) => {
    try {
        await ArtistService.del(req.params.id)
        res.send('ok');
    } catch (err) {
        res.status(404);
        res.send({
            error: "Artist delete operation is failed" + err,
        });
    }
})

router.post("/release", async (req, res) => {
    try {
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
    } catch (err) {
        res.status(404);
        res.send({
            error: "Release is failed" + err,
        });
    }
})

module.exports = router