const BaseService = require('./base-service');
const SongModel = require('../models/song-model');

class SongService extends BaseService {
    model = SongModel
}

module.exports = new SongService();