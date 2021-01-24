const test = require('ava');
const request = require('supertest')
const app = require('../app')

test('Delete a song', async t => {
    t.plan(3)

    // create a song
    const newSong = {
        name: 'Dance Monkey',
        artistId: '600c5eccf046e1a63ae8a40d',
        genreId: '600978742ea9694e3d4bbf57'
    }
    const song = (await request(app)
        .post('/song')
        .send(newSong)).body

    // delete the song
    const deleteRes = await request(app).delete(`/song/${song._id}`)
    // checking for server response status success
    t.is(deleteRes.status, 200)
    t.is(deleteRes.ok, true)

    // trying to render the detail page for the deleted song
    const notFound = await request(app).get(`/song/${song._id}`)
    // expect status 404
    t.is(notFound.status, 404)
})

test('Get list of song', async t => {
    t.plan(1)

    // get the list of gender - render view
    const res = await request(app).get('/song/all')
    // checking for server response status success
    t.is(res.status, 200)
})