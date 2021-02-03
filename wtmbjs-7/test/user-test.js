// const test = require('ava');
// const request = require('supertest')
// const app = require('../app')

// test('Create new user', async t => {
//     t.plan(3);
//     const newUser = {
//         name: 'Aslı',
//         playlist: []
//     }
//     // create user 
//     const res = (await request(app)
//         .post('/user')
//         .send(newUser))

//     t.is(res.status, 200)
//     t.is(res.body.name, newUser.name)

//     t.deepEqual(res.body.playlist, newUser.playlist)
// })


// test('Song is added users playlist', async t => {
//     t.plan(1)
//     const addPlaylist = {
//         userId: '600b59f139f7ee212c1b274a',
//         songId: '600d8ff6932e85075c816ee6'
//     }
//     //console.log(addPlaylist);
//     const res = await request(app)
//         .post('/user/add-playlist')
//         .send(addPlaylist)
//     t.is(res.status, 200)
// })

// test('Get list of user', async t => {
//     t.plan(1)

//     // get the list of users - render view
//     const res = await request(app).get('/user/all')
//     // checking for server response status success
//     t.is(res.status, 200)
// })