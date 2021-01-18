const Artist = require("./models/artist-model");
const Genre = require("./models/genre-model");
const Song = require("./models/song-model");
const User = require("./models/user-model");

const ArtistService = require("./services/artist-service");
const GenreService = require("./services/genre-service");
const SongService = require("./services/song-service");
const UserService = require("./services/user-service");

async function main() {
    // Step 1

    //Create new Song object
    // const lucky = new Song("Lucky");
    // const giveUp = new Song("I Won't Give Up");
    // const wait = new Song("Should I Wait");

    //Save songs to database
    // await SongService.add(lucky);
    // await SongService.add(giveUp);
    // await SongService.add(wait);

    // const songs = await SongService.findAll();
    // console.log(songs);

    // Step 2

    // Create new User objects
    // const ceren = new User("Ceren");
    // const yasemin = new User("Yasemin");

    // Save users to database
    // await UserService.add(ceren);
    // await UserService.add(yasemin);

    // const users = await UserService.findAll();
    // console.log(users);

    // Step 3

    // Get Users from user-database.json
    // let ceren = await UserService.find(1);
    // let yasemin = await UserService.find(2);
    // console.log(ceren);

    // Get Songs from song-database.json
    // let lucky = await SongService.find(1);
    // let giveUp = await SongService.find(2);
    // let wait = await SongService.find(3);

    //Add song to user playlist
    // await UserService.addSongToPlaylist(ceren.id, lucky);
    // await UserService.addSongToPlaylist(ceren.id, wait);
    // await UserService.addSongToPlaylist(yasemin.id, giveUp);

    // Step 4

    // Check users playlist
    // Get Users from user-database.json
    // let ceren = await UserService.find(1);
    // let yasemin = await UserService.find(2);
    // console.log(ceren.playlist);
    // console.log(yasemin.playlist);

    // Step 5

    // Create new Genre object
    // const pop = new Genre("Pop");
    // const blues = new Genre("Blues");

    // Save genres to database
    // await GenreService.add(pop);
    // await GenreService.add(blues);

    // Step 6

    // Get all genres from database
    // let genres = await GenreService.findAll();
    // console.log(genres);

    // Step 7

    // Get Songs from song-database.json
    // let lucky = await SongService.find(1);
    // let giveUp = await SongService.find(2);
    // let wait = await SongService.find(3);

    // Get genres from genre-database.json
    // let pop = await GenreService.find(1);
    // let blues = await GenreService.find(2);

    // Add song to user playlist and print genres
    // await GenreService.addSongToPlaylist(pop.id, giveUp);
    // await GenreService.addSongToPlaylist(blues.id, wait);
    // const genres = await GenreService.findAll();
    // genres.forEach(element => {
    //     console.log(element.playlist);
    // });

    // Step 8

    //Create new Artist object
    // const jason = new Artist("Jason Mraz");
    // const luther = new Artist("Luther Allison");
    // Save Artist to database
    // await ArtistService.add(jason);
    // await ArtistService.add(luther);

    // Step 9
    // Get artist from artist-database.json
    // let jason = await ArtistService.find(1);
    // let luther = await ArtistService.find(2);

    // Get Songs from song-database.json
    // let lucky = await SongService.find(1);
    // let giveUp = await SongService.find(2);
    // let wait = await SongService.find(3);
    // await ArtistService.release(jason.id, lucky);
    // await ArtistService.release(luther.id, wait);

    // Step 10
    // Delete artist
    // let artists = await ArtistService.findAll();
    // console.log(artists);
    // await ArtistService.del(2);
    // artists = await ArtistService.findAll();
    // console.log(artists);

}

main();