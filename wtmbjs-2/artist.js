// Create Artist Class
module.exports = class Artist {
    constructor(artistName) {
        this.artistName = artistName;
        this.songs = [];
    }
    // Method for adding songs to artist's song list
    release(song) {
        this.songs.push(song);
    }
    //Print method of artist songs to the console
    printArtistSongs() {
        this.songs.forEach((element) => printArtistSongsToConsole(element, this));
    }
};

//Print function
printArtistSongsToConsole = (song, artist) =>
    console.log(song.songName + " belongs to " + artist.artistName);