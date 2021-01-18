const express = require('express');
const router = express.Router();

const GenreService = require("./services/genre-service");

//GENRE

//Get genres from the genre-database.json
router.get('/genre/all', async (req, res) => {
    const genres = await GenreService.findAll()
    res.render('genre', {
        genres
    })
})

// Get genres from the genre-database.json
router.get('/genre/:id', async (req, res) => {
    const genre = await GenreService.find(req.params.id)
    res.send(genre);
})

// Add new genre using the console to database (axios.post('/genre', { name: 'x'}).then(console.log))
router.post('/genre', async (req, res) => {
    const genre = await GenreService.add(req.body)
    res.send(genre);
})

// Delete genre using the console to database (axios.delete('/genre/3').then(console.log))
router.delete('/genre/:id', async (req, res) => {
    await GenreService.del(req.params.id)
    res.send('ok');
})