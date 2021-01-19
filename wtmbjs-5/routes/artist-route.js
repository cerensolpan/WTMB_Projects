const express = require('express');
const router = express.Router();

const ArtistService = require("../services/artist-service");

//ARTIST

//Get artists from the artist-database.json
router.get('/artist/all', async (req, res) => {
    const artists = await ArtistService.findAll()
    res.render('artist', {
        artists
    })
})

// Get artists from the artist-database.json
router.get('/artist/:id', async (req, res) => {
    const artist = await ArtistService.find(req.params.id)
    res.send(artist);
})

// Add new artist using the console to database (axios.post('/artist', { name: 'x'}).then(console.log))
router.post('/artist', async (req, res) => {
    const artist = await ArtistService.add(req.body)
    res.send(artist);
})

// Delete artist using the console to database (axios.delete('/artist/3').then(console.log))
router.delete('/artist/:id', async (req, res) => {
    await ArtistService.del(req.params.id)
    res.send('ok');
})

module.exports = router