
class List {
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
    };

    append(elem) {
        this.dataStore[this.listSize++] = elem;
    };

    find(elem) {
        for (let i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] === elem) return i;
        }

        return -1;
    };

    remove(elem) {
        const index = this.find(elem);
        if (index > -1) {
            this.dataStore.splice(index, 1);
            this.listSize--;
            return true;
        }

        return false;
    };

    length() {
        return this.listSize;
    };

    toString() {
        return String(this.dataStore);
    }

    insertAfter(elem, afterElem) {
        const index = this.find(afterElem);

        if (index > -1) {
            this.dataStore.splice(index + 1, 0, elem);
            this.listSize++;
            return true;
        }

        return false;
    };

    insertAt(index, elem) {
        if (index > -1) {
            this.dataStore.splice(index, 0, elem);
            this.listSize++;
            return true;
        }

        return false;
    };

    clear() {
        this.dataStore.splice(0, this.dataStore.length);
        this.listSize = this.pos = 0;
    };

    contain(elem) {
        const index = this.find(elem);
        if (index > -1) return true;
        return false;
    };

    front() {
        this.pos = 0;
    };

    end() {
        this.pos = this.listSize - 1;
    };

    next() {
        if (this.pos < this.listSize - 1) this.pos++;
    };

    prev() {
        if (this.pos > 0) this.pos--;
    };

    moveTo(position) {
        this.pos = position;
    };

    curPosition() {
        return this.pos;
    }

    getElement() {
        return this.dataStore[this.pos];
    }
}

const dataList = ["The Shawshank Redemption", "The Star Wars", "The Matrix", "The Forest Gump", "The Batman Begins", "Avengers: Infinity War", "Avengers: Endgame", "Avatar", "Avatar: The Way of Water", "Gullak", "Ballavpurer Rupkatha", "Tiktiki", "Dune", "The Imitation Game", "Sherlok Holmes", "The Dark Knight", "Dark Knight Rises"];

const movies = new List();

for (const movie of dataList) {
    movies.append(movie);
};

movies.front();
console.log(movies.getElement());
movies.next();
console.log(movies.getElement());
movies.end();
console.log(movies.getElement());
movies.moveTo(3);
console.log(movies.getElement());
movies.prev();
console.log(movies.getElement());

console.log(movies);

console.log(movies.length());