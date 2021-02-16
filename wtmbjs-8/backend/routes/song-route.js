const express = require('express');
const router = express.Router();

const SongService = require("../services/song-service");

//SONGS

//Get songs from the song-database.json
router.get('/all', async (req, res) => {
    const songs = await SongService.findAll()
    res.send(songs)
})

// Get songs from the song-database.json
router.get('/:id', async (req, res) => {
    const song = await SongService.find(req.params.id)
    if (!song) res.status(404);
    res.send(song);
})

// Add new song using the console to database (axios.post('/song', { name: 'x'}).then(console.log))
router.post('/', async (req, res) => {
    const song = await SongService.add(req.body)
    res.send(song);
})

// Delete song using the console to database (axios.delete('/song/3').then(console.log))
router.delete('/:id', async (req, res) => {
    await SongService.del(req.params.id)
    res.send('ok');
})

module.exports = router