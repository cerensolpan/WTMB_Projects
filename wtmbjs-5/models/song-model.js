const mongoose = require('mongoose')


const SongSchema = new mongoose.Schema({
    name: {
        type: String,
        //default: "song",
        required: true
    },
    artist: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Artist',
        autopopulate: {
            maxDepth: 1
        }
    },
    genre: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Genre',
        autopopulate: {
            maxDepth: 1
        }
    }
}, {
    timestamps: true
})

SongSchema.plugin(require('mongoose-autopopulate'))

const SongModel = mongoose.model('Song', SongSchema)

module.exports = SongModel;