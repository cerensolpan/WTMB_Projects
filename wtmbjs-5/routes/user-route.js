const express = require('express');
const router = express.Router();

const UserService = require("../services/user-service");

//USERS

// Get users from the user-database.json
router.get('/user/all', async (req, res) => {
    const users = await UserService.findAll()
    res.render('user', {
        users
    })
})

// Get user from the user-database.json
router.get('/user/:id', async (req, res) => {
    const user = await UserService.find(req.params.id)
    res.send(user);
})

// Add new user using the console to database (axios.post('/user', { name: 'Aslı'}).then(console.log))
router.post('/user', async (req, res) => {
    const user = await UserService.add(req.body)
    res.send(user);
})

// Delete user using the console to database (axios.delete('/user/3').then(console.log))
router.delete('/user/:id', async (req, res) => {
    await UserService.del(req.params.id)
    res.send('ok');
})

module.exports = router