const Artist = require('./models/artist-model');
const Genre = require('./models/genre-model');
const Song = require('./models/song-model');
const User = require('./models/user-model');

const ArtistService = require('./services/artist-service');
const GenreService = require('./services/genre-service');
const songService = require('./services/song-service');
const SongService = require('./services/song-service');
const UserService = require('./services/user-service');

async function main() {
    // Create new User objects
    const ceren = new User("Ceren");
    const yasemin = new User("Yasemin");

    // Create new Song object
    const lucky = new Song("Lucky");
    const giveUp = new Song(" I Won't Give Up");
    const wait = new Song("Should I Wait");

    // Add song to user playlist
    ceren.addPlaylist(lucky);
    ceren.addPlaylist(wait);
    yasemin.addPlaylist(giveUp);

    // Create new Genre object
    const pop = new Genre("Pop");
    const blues = new Genre("Blues");

    // Add song to genre list
    pop.addPlaylist(lucky);
    pop.addPlaylist(giveUp);
    blues.addPlaylist(wait);

    //Create new Artist object
    const jason = new Artist("Jason Mraz");
    const luther = new Artist("Luther Allison");

    // Add songs to artist
    jason.release(lucky);
    jason.release(giveUp);
    luther.release(wait);

    //await UserService.add(ceren);
    //await UserService.add(yasemin);
    //await SongService.add(lucky);
    const songs = await SongService.findAll();
    console.log(songs);

    const users = await UserService.findAll();
    console.log(users);

    const order = await UserService.find(5);
    console.log(order);

    await UserService.del(6);
    console.log(users);
}

main();