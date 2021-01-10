// Create Genre Class
module.exports = class Genre {
    constructor(genreName) {
        this.genreName = genreName;
        this.playlist = [];
    }
    //Method for adding songs to user playlist
    addPlaylist(song) {
        this.playlist.push(song);
    }
    //Print method of genres songs to the console
    printPlaylist() {
        this.playlist.forEach((element) => printGenreSongsToConsole(element, this));
    }
};

// Print function
printGenreSongsToConsole = (song, genre) =>
    console.log(
        song.songName + " is a song in the " + genre.genreName + " genre. "
    );