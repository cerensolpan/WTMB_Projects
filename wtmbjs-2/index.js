const User = require('./user');
const Genre = require('./genre');
const Artist = require('./artist');
const Song = require('./song');
const Chalk = require('chalk');
const Database = require('./database')

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

//Print the console for using chalk library
console.log(Chalk.green(jason.artistName));
console.log(Chalk.blue.bgRed.bold(wait.songName));

Database.save('artist.json', jason);
console.log(Database.load('artist.json'));

Database.save('user.json', ceren);
console.log(Database.load('user.json'));