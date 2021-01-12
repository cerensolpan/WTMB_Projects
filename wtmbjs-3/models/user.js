// Create User class
module.exports = class User {
    constructor(userName, playlist = [], id) {
        this.userName = userName;
        this.playlist = playlist;
        this.id = id;
    }
    // Method for adding songs to user playlist
    addPlaylist(song) {
        this.playlist.push(song);
    }
    //Print method of listening songs to the console
    printPlaylist() {
        this.playlist.forEach((element) => printPlaylistToConsole(element, this));
    }

    static create({
        userName,
        playlist,
        id
    }) {
        return new User(userName, playlist, id);
    }
};

// Print function
printPlaylistToConsole = (song, user) =>
    console.log(user.userName + " is listening to " + song.songName);