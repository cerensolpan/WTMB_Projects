const User = require('./user');
const Genre = require('.genre');
const Artist = require('.artist');
const Song = require('.song');

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