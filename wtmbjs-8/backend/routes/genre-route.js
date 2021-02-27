const express = require('express');
const router = express.Router();

const GenreService = require("../services/genre-service");

//GENRE

//Get genres from the genre-database.json
router.get('/all', async (req, res) => {
    try {
        const genres = await GenreService.findAll()
        res.send(genres)
    } catch (err) {
        res.status(404);
        res.send({
            error: "Genres get operation is failed" + err,
        });
    }
})

// Get genres from the genre-database.json
router.get('/:id', async (req, res) => {
    try {
        const genre = await GenreService.find(req.params.id)
        if (!genre) res.status(404);
        res.send(genre);
    } catch (err) {
        res.status(404);
        res.send({
            error: "Genre get operation is failed" + err,
        });
    }
})

// Add new genre using the console to database (axios.post('/genre', { name: 'x'}).then(console.log))
router.post('/', async (req, res) => {
    try {
        const genre = await GenreService.add(req.body)
        res.send(genre);
    } catch (err) {
        res.status(404);
        res.send({
            error: "Genre post operation is failed" + err,
        });
    }
})

// Delete genre using the console to database (axios.delete('/genre/3').then(console.log))
router.delete('/:id', async (req, res) => {
    try {
        await GenreService.del(req.params.id)
        res.send('ok');
    } catch (err) {
        res.status(404);
        res.send({
            error: "Genre delete operation is failed" + err,
        });
    }
})

module.exports = router