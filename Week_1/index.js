// Create User class
User = class {
    constructor(userName) {
        this.userName = userName;
        this.playlist = [];
    }
    // Method for adding songs to user playlist
    listenedPlaylist(song) {
        this.playlist.push(song);
        this.playlist.forEach(printSongNamesToConsole);
    }
}
// Print each of the user playlist songs to console
printSongNamesToConsole = song => console.log(song.songName);

// Create Genre Class
Genre = class {
    constructor(genreName) {
        this.genreName = genreName;
        this.songs = [];
    }
}

// Create Artist Class
Artist = class {
    constructor(artistName) {
        this.artistName = artistName;
        this.songs = [];
    }
}

// Create Song Class
Song = class {
    constructor(songName) {
        this.songName = songName;
    }
    // Method for adding songs to genres
    addSongToGenreList(genre) {
        this.genre = genre;
        genre.songs.push(this);
    }
    // Method for adding songs to artist song list
    addSongToArtist(artist) {
        this.artist = artist;
        artist.songs.push(this);
    }

}

// Create new User objects
ceren = new User("Ceren");
yasemin = new User("Yasemin");

// Create new Song object
lucky = new Song("Lucky");

// Add song to user playlist
ceren.listenedPlaylist(lucky);

// Create new Genre object
pop = new Genre("Pop");

// Add song to genres
lucky.addSongToGenreList(pop);

//Create new Artist object
jason = new Artist("Jason Mraz");

// Add song to artist
lucky.addSongToArtist(jason);


