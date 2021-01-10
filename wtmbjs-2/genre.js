// Create Genre Class
module.exports = class Genre {
    constructor(genreName) {
        this.genreName = genreName;
        this.songs = [];
    }
    //Print method of genres songs to the console
    genresSongs() {
        this.songs.forEach((element) => printGenreSongsToConsole(element, this));
    }
};

// Print function
printGenreSongsToConsole = (song, genre) =>
    console.log(
        song.songName + " is a song in the " + genre.genreName + " genre. "
    );