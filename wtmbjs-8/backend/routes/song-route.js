const express = require('express');
const router = express.Router();

const SongService = require("../services/song-service");

//SONGS

//Get songs from the song-database.json
router.get('/all', async (req, res) => {
    try {
        const songs = await SongService.findAll()
        res.send(songs)
    } catch (err) {
        res.status(404);
        res.send({
            error: "Songs get operation is failed" + err,
        });
    }
})

// Get songs from the song-database.json
router.get('/:id', async (req, res) => {
    try {
        const song = await SongService.find(req.params.id)
        if (!song) res.status(404);
        res.send(song);
    } catch (err) {
        res.status(404);
        res.send({
            error: "Song get operation is failed" + err,
        });
    }
})

// Add new song using the console to database (axios.post('/song', { name: 'x'}).then(console.log))
router.post('/', async (req, res) => {
    try {
        const song = await SongService.add(req.body)
        res.send(song);
    } catch (err) {
        res.status(404);
        res.send({
            error: "Song post operation is failed" + err,
        });
    }
})

// Delete song using the console to database (axios.delete('/song/3').then(console.log))
router.delete('/:id', async (req, res) => {
    try {
        await SongService.del(req.params.id)
        res.send('ok');
    } catch (err) {
        res.status(404);
        res.send({
            error: "Song delete operation is failed" + err,
        });
    }
})

module.exports = router