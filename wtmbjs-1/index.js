// Create User class
User = class {
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

// Create Genre Class
Genre = class {
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

// Create Artist Class
Artist = class {
    constructor(artistName) {
        this.artistName = artistName;
        this.songs = [];
    }
    //Print method of artist songs to the console
    artistSongs() {
        this.songs.forEach((element) => printArtistSongsToConsole(element, this));
    }
};

//Print function
printArtistSongsToConsole = (song, artist) =>
    console.log(song.songName + " belongs to " + artist.artistName);

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
};

// Create new User objects
ceren = new User("Ceren");
yasemin = new User("Yasemin");

// Create new Song object
lucky = new Song("Lucky");
giveUp = new Song(" I Won't Give Up");
wait = new Song("Should I Wait");

// Add song to user playlist
ceren.listenedPlaylist(lucky);
ceren.listenedPlaylist(wait);
yasemin.listenedPlaylist(giveUp);

// Create new Genre object
pop = new Genre("Pop");
blues = new Genre("Blues");

// Add songs to genre list
lucky.addSongToGenreList(pop);
giveUp.addSongToGenreList(pop);
wait.addSongToGenreList(blues);

//Create new Artist object
jason = new Artist("Jason Mraz");
luther = new Artist("Luther Allison");

// Add songs to artist
lucky.addSongToArtist(jason);
giveUp.addSongToArtist(jason);
wait.addSongToArtist(luther);

// Implement User's listened song method
ceren.listenedSong();
yasemin.listenedSong();

//Implement Song's genre method
pop.genresSongs();
blues.genresSongs();

//Implement Artist's song method
jason.artistSongs();
luther.artistSongs();