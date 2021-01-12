// Create Genre Class
module.exports = class Genre {
    constructor(genreName, playlist = [], id) {
        this.genreName = genreName;
        this.playlist = playlist;
        this.id = id;
    }
    //Method for adding songs to user playlist
    addPlaylist(song) {
        this.playlist.push(song);
    }

    //Print method of genres songs to the console
    printPlaylist() {
        this.playlist.forEach((element) => printGenreSongsToConsole(element, this));
    }

    static create({
        genreName,
        playlist,
        id
    }) {
        return new Genre(genreName, playlist, id);
    }
};

// Print function
printGenreSongsToConsole = (song, genre) =>
    console.log(
        song.songName + " is a song in the " + genre.genreName + " genre. "
    );