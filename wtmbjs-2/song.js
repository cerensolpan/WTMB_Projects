// Create Song Class
module.exports = class Song {
    constructor(songName) {
        this.songName = songName;
    }
    // Method for adding songs to genres
    addSongToGenreList(genre) {
        this.genre = genre;
        genre.songs.push(this);
    }
    // Method for adding songs to artist song list
    addSongToArtist(artist) {
        this.artist = artist;
        artist.songs.push(this);
    }
};