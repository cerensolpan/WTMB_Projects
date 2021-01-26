const mongoose = require('mongoose')


const ArtistSchema = new mongoose.Schema({
    name: {
        type: String,
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


ArtistSchema.plugin(require('mongoose-autopopulate'))

const ArtistModel = mongoose.model('Artist', ArtistSchema)

module.exports = ArtistModel