const BaseService = require('./base-service');
const GenreModel = require('../models/genre-model');

class GenreService extends BaseService {
    model = GenreModel
    // constructor() {
    //     super(GenreModel, `${__dirname}/../genre-database.json`);
    // }
}

module.exports = new GenreService();