// Create Song Class
module.exports = class Song {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    static create({
        name,
        id
    }) {
        return new Song(name, id);
    }
}