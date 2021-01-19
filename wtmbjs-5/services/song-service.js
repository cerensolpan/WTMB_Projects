const BaseService = require('./base-service');
const SongModel = require('../models/song-model');

class SongService extends BaseService {

    model = SongModel
    // constructor() {
    //     super(SongModel, `${__dirname}/../song-database.json`);
    // }
}

module.exports = new SongService();