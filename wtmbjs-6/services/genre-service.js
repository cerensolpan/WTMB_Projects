const BaseService = require('./base-service');
const GenreModel = require('../models/genre-model');

class GenreService extends BaseService {
    model = GenreModel

}

module.exports = new GenreService();