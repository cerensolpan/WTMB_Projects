const mongoose = require('mongoose')


const ArtistSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "artist",
    },
    songs: []
})

ArtistSchema.methods.release = async function (song) {
    this.songs.push(song)
    console.log(song + " is released by " + this.name)
    await this.save()
}

ArtistSchema.plugin(require('mongoose-autopopulate'))

const ArtistModel = mongoose.model('Artist', ArtistSchema)

module.exports = ArtistModel