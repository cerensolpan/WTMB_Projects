// Create Artist Class
module.exports = class Artist {
    constructor(artistName) {
        this.artistName = artistName;
        this.songs = [];
    }
    //Print method of artist songs to the console
    artistSongs() {
        this.songs.forEach((element) => printArtistSongsToConsole(element, this));
    }
};

//Print function
printArtistSongsToConsole = (song, artist) =>
    console.log(song.songName + " belongs to " + artist.artistName);