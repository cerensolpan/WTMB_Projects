// Create User class
class User {
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

// Create Genre Class
class Genre {
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

// Create Artist Class
class Artist {
    constructor(artistName) {
        this.artistName = artistName;
        this.songs = [];
    }
    // Method for adding songs to artist's song list
    release(song) {
        this.songs.push(song);
    }
    //Print method of artist songs to the console
    printArtistSongs() {
        this.songs.forEach((element) => printArtistSongsToConsole(element, this));
    }
};

//Print function
printArtistSongsToConsole = (song, artist) =>
    console.log(song.songName + " belongs to " + artist.artistName);

// Create Song Class
class Song {
    constructor(songName) {
        this.songName = songName;
    }
};

// Create new User objects
ceren = new User("Ceren");
yasemin = new User("Yasemin");

// Create new Song object
lucky = new Song("Lucky");
giveUp = new Song(" I Won't Give Up");
wait = new Song("Should I Wait");

// Add song to user playlist
ceren.addPlaylist(lucky);
ceren.addPlaylist(wait);
yasemin.addPlaylist(giveUp);

// Create new Genre object
pop = new Genre("Pop");
blues = new Genre("Blues");

// Add song to genre list
pop.addPlaylist(lucky);
pop.addPlaylist(giveUp);
blues.addPlaylist(wait);

//Create new Artist object
jason = new Artist("Jason Mraz");
luther = new Artist("Luther Allison");

// Add songs to artist
jason.release(lucky);
jason.release(giveUp);
luther.release(wait);

// Implement User's listened song method
ceren.printPlaylist();
yasemin.printPlaylist();

//Implement Song's genre method
pop.printPlaylist();
blues.printPlaylist();

//Implement Artist's song method
jason.printArtistSongs();
luther.printArtistSongs();