// Create Song Class
module.exports = class Song {
    constructor(songName, id) {
        this.songName = songName;
        this.id = id;
    }
    static create({
        songName,
        id
    }) {
        return new Song(songName, id);
    }
};