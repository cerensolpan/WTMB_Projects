const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const artistRouter = require('./routes/artist-route');
const genreRouter = require('./routes/genre-route');
const songRouter = require('./routes/song-route');
const userRouter = require('./routes/user-route');


app.use(bodyParser.json());
app.set('view engine', 'pug');
require('./mongo-connection')


app.use('/artist', artistRouter);
app.use('/genre', genreRouter);
app.use('/song', songRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.render('index')
})

// Specify the port
app.listen(3000, () => {
    console.log('Listening on port 3000..')
})