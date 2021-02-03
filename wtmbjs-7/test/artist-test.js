// const test = require('ava');
// const request = require('supertest')
// const app = require('../app')


// test('Create new artist', async t => {
//     t.plan(3);
//     const newArtist = {
//         name: 'Sia',
//         songs: []
//     }
//     const res = await request(app)
//         .post('/artist')
//         .send(newArtist)

//     t.is(res.status, 200)
//     t.is(res.body.name, newArtist.name)

//     t.deepEqual(res.body.playlist, newArtist.playlist)
// })

// test("New song released by artist", async (t) => {
//     t.plan(1);
//     const newSong = {
//         genreId: "600978742ea9694e3d4bbf57",
//         artistId: "60089d768dde461e50cb5e2b",
//         name: "Diamond",
//     };

//     // release song
//     const res = await request(app).post("/artist/release").send(newSong);

//     t.is(res.status, 200);
// });

// test('Delete a artist', async t => {
//     t.plan(3)

//     // create a artist
//     const newArtist = {
//         name: 'Sia',
//         songs: []
//     }
//     const artist = (await request(app)
//         .post('/artist')
//         .send(newArtist)).body

//     // delete the artist
//     const deleteRes = await request(app).delete(`/artist/${artist._id}`)
//     // checking for server response status success
//     t.is(deleteRes.status, 200)
//     t.is(deleteRes.ok, true)

//     // trying to render the detail page for the deleted artist
//     const notFound = await request(app).get(`/artist/${artist._id}`)
//     // expect status 404
//     t.is(notFound.status, 404)
// })

// test("Get list of artist", async (t) => {
//     t.plan(1);

//     // get the list of artist - render view
//     const res = await request(app).get("/artist/all");
//     // checking for server response status success
//     t.is(res.status, 200);
// });