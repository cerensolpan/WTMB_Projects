const express = require('express');
const router = express.Router();

const UserService = require("../services/user-service");
const SongService = require("../services/song-service");

//USERS

// Get users from the user-database.json
router.get('/all', async (req, res) => {
    const users = await UserService.findAll()
    res.send(users)
})

router.get('/all/json', async (req, res) => {
    const users = await UserService.findAll()
    res.send(users)
})

// Get user from the user-database.json
router.get('/:id', async (req, res) => {
    const user = await UserService.find(req.params.id)
    if (!user) res.status(404);
    res.send(user);
})

router.get('/:id/json', async (req, res) => {
    const user = await UserService.find(req.params.id)
    res.send(user);
})

// Add new user using the console to database (axios.post('/user', { name: 'Aslı'}).then(console.log))
router.post('/', async (req, res) => {
    const user = await UserService.add(req.body)
    res.send(user);
})

// Delete user using the console to database (axios.delete('/user/3').then(console.log))
router.delete('/:id', async (req, res) => {
    await UserService.del(req.params.id)
    res.send('ok');
})

router.post('/add-playlist', async (req, res) => {

    const user = await UserService.find(req.body.userId)
    const song = await SongService.find(req.body.songId)
    await UserService.addPlaylist(user, song)
    res.send('ok');
})

router.delete('/delete-playlist', async (req, res) => {

    const user = await UserService.find(req.body.userId)
    const song = await SongService.find(req.body.songId)
    await UserService.deletePlaylist(user, song)
    res.send('ok');
})

module.exports = router