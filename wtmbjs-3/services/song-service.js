const BaseService = require('./base-service');
const SongModel = require('../models/song-model');

class SongService extends BaseService {
    constructor() {
        super(SongModel, `${__dirname}/../song-database.json`);
    }
}

module.exports = new SongService();