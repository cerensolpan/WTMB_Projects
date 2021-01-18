// Create Artist Class
module.exports = class Artist {
    constructor(name, songs = [], id) {
        this.name = name;
        this.songs = songs;
        this.id = id;
    }
    // Method for adding songs to artist's song list
    // release(song) {
    //     this.songs.push(song);
    // }

    //Print method of artist songs to the console
    // printSongs() {
    //     this.songs.forEach((element) => printArtistSongsToConsole(element, this));
    // }

    static create({
        name,
        songs,
        id
    }) {
        return new Artist(name, songs, id);
    }
};

//Print function
// printArtistSongsToConsole = (song, artist) =>
//     console.log(song.name + " is released by " + artist.name);