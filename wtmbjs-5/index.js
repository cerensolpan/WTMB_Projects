const express = require('express');
const bodyParser = require('body-parser');
const app = express();




app.use(bodyParser.json());
app.use('/artist', artistRouter);
app.set('view engine', 'pug');

const artistRouter = require('./routes/artist-route');
app.use('/artist', artistRouter);

const genreRouter = require('./routes/genre-route');
app.use('/genre', genreRouter);

const songRouter = require('./routes/song-route');
app.use('/genre', songRouter);

const userRouter = require('./routes/user-route');
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.render('index')
})

// Specify the port
app.listen(3000, () => {
    console.log('Listening on port 3000..')
})