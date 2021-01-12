const BaseService = require('./base-service');
const ArtistModel = require('../models/artist-model');

class ArtistService extends BaseService {
    constructor() {
        super(ArtistModel, `${__dirname}/../artist-database.json`);
    }
}

module.exports = new ArtistService();