const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema({
    name: {
        type: String,
        //default: "genre",
        required: true
    },
    songs: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Song',
        autopopulate: {
            maxDepth: 1
        }
    }],
}, {
    timestamps: true
})



GenreSchema.plugin(require('mongoose-autopopulate'))

const GenreModel = mongoose.model('Genre', GenreSchema)

module.exports = GenreModel