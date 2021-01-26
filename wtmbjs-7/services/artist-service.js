const BaseService = require('./base-service');
const ArtistModel = require('../models/artist-model');

class ArtistService extends BaseService {
    model = ArtistModel

    async release(artist, genre, song) {
        artist.songs.push(song)
        genre.songs.push(song)
        await artist.save()
        await genre.save()
    }
}

module.exports = new ArtistService();