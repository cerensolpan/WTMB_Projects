const test = require('ava');
const request = require('supertest')
const app = require('../app')

test('Create new user', async t => {
    t.plan(3);
    const newUser = {
        name: 'Aslı',
        playlist: []
    }
    // create user
    const res = (await request(app)
        .post('/user')
        .send(newUser))
    // console.log(res);
    t.is(res.status, 200)
    t.is(res.body.name, newUser.name)

    t.deepEqual(res.body.playlist, newUser.playlist)

})

test('New song released by artist', async t => {
    t.plan(1)
    const newSong = {
        artistId: '60089d768dde461e50cb5e2b',
        genreId: '600978742ea9694e3d4bbf57',
        name: 'Diamond',
    }

    // create song
    const res = (await request(app)
        .post('/artist/release')
        .send(newSong))

    t.is(res.status, 200)
})