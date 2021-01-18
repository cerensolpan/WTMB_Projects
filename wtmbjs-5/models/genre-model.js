// Create Genre Class
module.exports = class Genre {
    constructor(name, songs = [], id) {
        this.name = name;
        this.songs = songs;
        this.id = id;
    }
    //Method for adding songs to genre songs
    addSongToGenre(song) {
        this.songs.push(song);
    }

    //Print method of songs to the console
    printSongs() {
        this.playlist.forEach((element) => printGenreSongsToConsole(element, this));
    }

    static create({
        name,
        songs,
        id
    }) {
        return new Genre(name, songs, id);
    }
};

// Print function
printGenreSongsToConsole = (song, genre) =>
    console.log(
        song.name + " is a song in the " + genre.name + " genre. "
    );