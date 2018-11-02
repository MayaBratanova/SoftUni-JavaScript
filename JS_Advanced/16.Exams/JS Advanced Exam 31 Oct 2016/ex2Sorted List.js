class SortedList {
    constructor() {
        this.list = [];
    }
    add(element) {
        this.list.push(element);
        this.sort();
    }
    remove(index) {
        this.vrfyRange(index);
        this.list.splice(index, 1);
    }
    get(index) {
        this.vrfyRange(index);
        return this.list[index];
    }
    vrfyRange(index) {
        if (this.list.length === 0) throw new Error("Collection is empty.");
        if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
    }
    sort() {
        this.list.sort((a, b) => a - b);
    }
    get size() {
        return this.list.length;
    }
}
module.exports = SortedList;
//let solve = new SortedList()
//solve.add('1')

//solve.add('3')
//solve.add('2')
//console.log(solve.list.join());
//solve.remove(1,1)
//solve.add('2')
//solve.get(1)
////solve.size(this.list)

