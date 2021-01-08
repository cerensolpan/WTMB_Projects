//reader-book-writer
Reader = class {
    constructor(readerName) {
        this.readerName = readerName;
        this.novels = [];
    }
    readNovel(novel) {
        this.novels.push(novel);
        console.log(this.readerName + " read " + novel.novelName + " written by " + novel.author.authorName);
    }

}
Novel = class {
    constructor(novelName, author) {
        this.novelName = novelName;
        this.author = author;
    }

}
Author = class {
    constructor(authorName) {
        this.authorName = authorName;
    }
}


ceren = new Reader("Ceren");
baris = new Reader("Baris");
victor = new Author("Victor Hugo");
ali = new Author("Sabahattin Ali");
sefiller = new Novel("Sefiller", victor);
icimizdekiseytan = new Novel("İcimizdeki Seytan", ali);
ceren.readNovel(icimizdekiseytan);
baris.readNovel(sefiller);