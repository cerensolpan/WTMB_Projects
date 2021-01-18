// Create User class
module.exports = class User {
    constructor(name, playlist = [], id) {
        this.name = name;
        this.playlist = playlist;
        this.id = id;
    }
    //Method for adding songs to user playlist
    // addSongToPlaylist(song) {
    //     this.playlist.push(song);
    // }

    //Print method of playlist to the console
    // printPlaylist() {
    //     this.playlist.forEach((element) => printUserSongToConsole(element, this));
    // }

    static create({
        name,
        playlist,
        id
    }) {
        return new User(name, playlist, id);
    }
};

// Print function
// printUserSongToConsole = (song, user) =>
//     console.log(user.name + " is listening to " + song.name);