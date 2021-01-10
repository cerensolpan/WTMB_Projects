// Create User class
module.exports = class User {
    constructor(userName) {
        this.userName = userName;
        this.playlist = [];
    }
    // Method for adding songs to user playlist
    addPlaylist(song) {
        this.playlist.push(song);
    }
    //Print method of listening songs to the console
    printPlaylist() {
        this.playlist.forEach((element) => printPlaylistToConsole(element, this));
    }
};

// Print function
printPlaylistToConsole = (song, user) =>
    console.log(user.userName + " is listening to " + song.songName);