const express = require('express');
const router = express.Router();

const UserService = require("../services/user-service");
const SongService = require("../services/song-service");

//USERS

// Get users from the user-database.json
router.get('/all', async (req, res) => {
    try {
        const users = await UserService.findAll()
        res.send(users)
    } catch (err) {
        res.status(404);
        res.send({
            error: "Users get operation is failed" + err,
        });
    }
})


// Get user from the user-database.json
router.get('/:id', async (req, res) => {
    try {
        const user = await UserService.find(req.params.id)
        if (!user) res.status(404);
        res.send(user);
    } catch (err) {
        res.status(404);
        res.send({
            error: "User get operation is failed" + err,
        });
    }
})

// Add new user using the console to database (axios.post('/user', { name: 'Aslı'}).then(console.log))
router.post('/', async (req, res) => {
    try {
        const user = await UserService.add(req.body)
        res.send(user);
    } catch (err) {
        res.status(404);
        res.send({
            error: "User post operation is failed" + err,
        });
    }
})

// Delete user using the console to database (axios.delete('/user/3').then(console.log))
router.delete('/:id', async (req, res) => {
    try {
        await UserService.del(req.params.id)
        res.send('ok');
    } catch (err) {
        res.status(404);
        res.send({
            error: "User delete operation is failed" + err,
        });
    }
})

router.post('/add-playlist', async (req, res) => {
    try {
        const user = await UserService.find(req.body.userId)
        const song = await SongService.find(req.body.songId)
        await UserService.addPlaylist(user, song)
        res.send('ok');
    } catch (err) {
        res.status(404);
        res.send({
            error: "User add-playlist is failed" + err,
        });
    }
})

router.post('/delete-playlist', async (req, res) => {
    try {
        const user = await UserService.find(req.body.userId)
        const song = await SongService.find(req.body.songId)
        await UserService.deletePlaylist(user, song)
        res.send('ok');
    } catch (err) {
        res.status(404);
        res.send({
            error: "User delete-playlist is failed" + err,
        });
    }
})

module.exports = router