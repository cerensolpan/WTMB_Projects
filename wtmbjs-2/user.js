// Create User class
module.exports = class User {
    constructor(userName) {
        this.userName = userName;
        this.playlist = [];
    }
    // Method for adding songs to user playlist
    listenedPlaylist(song) {
        this.playlist.push(song);
    }
    //Print method of listening songs to the console
    listenedSong() {
        this.playlist.forEach((element) => printListenedSongToConsole(element, this));
    }
};
// Print function
printListenedSongToConsole = (song, user) =>
    console.log(user.userName + " is listening to " + song.songName);