// Create Artist Class
module.exports = class Artist {
    constructor(artistName, songs = [], id) {
        this.artistName = artistName;
        this.songs = songs;
        this.id = id;
    }
    // Method for adding songs to artist's song list
    release(song) {
        this.songs.push(song);
    }

    //Print method of artist songs to the console
    printArtistSongs() {
        this.songs.forEach((element) => printArtistSongsToConsole(element, this));
    }

    static create({
        artistName,
        songs,
        id
    }) {
        return new Artist(artistName, songs, id);
    }
};

//Print function
printArtistSongsToConsole = (song, artist) =>
    console.log(song.songName + " belongs to " + artist.artistName);