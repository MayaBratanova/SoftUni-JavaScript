class BookCollection {
    get shelfCapacity() {
        return this._shelfCapacity;
    }

    set shelfCapacity(value) {
        if (value > 0) {
            this._shelfCapacity = value;
        }
    }

    get room() {
        return this._room;
    }

    set room(value) {
        if (value === "livingRoom" || value === "bedRoom" || value === 'closet') {
            return this._room = value;
        }
        else {
            throw (`Cannot have book shelf in ${value}`)
        }
    }

    constructor(shelfGenre, room, shelfCapacity) {
        this.shelfGenre = shelfGenre
        this.room = room;
        this.shelf = []
        this.counter = 0
        this.shelfCapacity = shelfCapacity;
    }

    addBook(bookName, bookAuthor, genre) {
        let obj = {bookName: bookName, bookAuthor: bookAuthor, genre: genre}
        let num = this._shelfCapacity
        if (num > this.counter) {
            this.shelf.push(obj)
            this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor))
            this.counter++

        }
        else {
            this.shelf.shift()
            this.shelf.push(obj)

        }
       return this
    }

    throwAwayBook(bookName) {
        this.shelf = this.shelf.filter(book => book.bookName !== bookName);
    }

    showBooks(genre) {
        let str = ''
        str += `Results for search "${genre}":\n`

        for (let i = 0; i < this.shelf.length; i++) {
            if (this.shelf[i].genre === genre) {
                str += `${"\uD83D\uDCD6"} ${this.shelf[i].bookAuthor} - "${this.shelf[i].bookName}"\n`
            }
        }
        return str
    }

    get shelfCondition() {
        return this.shelfCapacity - this.counter
    }

    toString(){
        let result = '';
        if(this.shelf.length <= 0){
            result += 'It\'s an empty shelf'
        } else {
            result += `"${this.shelfGenre}" shelf in ${this.room} contains:\n`
            for(let book of this.shelf){
                result += `${"\uD83D\uDCD6"} "${book.bookName}" - ${book.bookAuthor}\n`
            }
        }
       // return result.trim();
    }

}

let livingRoom = new BookCollection("Programming", "livingRoom", 5)
    .addBook("Introduction to Programming with C#", "Svetlin Nakov")
    .addBook("Introduction to Programming with Java", "Svetlin Nakov")
    .addBook("Programming for .NET Framework", "Svetlin Nakov");
console.log(livingRoom.toString());



