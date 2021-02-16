// const test = require('ava');
// const request = require('supertest')
// const app = require('../app')

// test('Create new genre', async t => {
//     t.plan(3);
//     const newGenre = {
//         name: 'Blues',
//         songs: []
//     }
//     // create genre 
//     const res = await request(app)
//         .post('/genre')
//         .send(newGenre)

//     // checking for server response status success
//     t.is(res.status, 200)
//     // comparing the created genre's data
//     t.is(res.body.name, newGenre.name)
//     t.deepEqual(res.body.songs, newGenre.songs)
// })

// test('Delete a genre', async t => {
//     t.plan(3)

//     // create a genre
//     const newGenre = {
//         name: 'Rap',
//         songs: []
//     }
//     const genre = (await request(app)
//         .post('/genre')
//         .send(newGenre)).body

//     // delete the genre
//     const deleteRes = await request(app).delete(`/genre/${genre._id}`)
//     // checking for server response status success
//     t.is(deleteRes.status, 200)
//     t.is(deleteRes.ok, true)

//     // trying to render the detail page for the deleted genre
//     const notFound = await request(app).get(`/genre/${genre._id}`)
//     // expect status 404
//     t.is(notFound.status, 404)
// })

// test('Get list of genre', async t => {
//     t.plan(1)

//     // get the list of gender - render view
//     const res = await request(app).get('/genre/all')
//     // checking for server response status success
//     t.is(res.status, 200)
// })