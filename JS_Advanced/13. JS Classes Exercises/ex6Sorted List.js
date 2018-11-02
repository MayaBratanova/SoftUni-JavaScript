class SortedList {
    constructor(size) {
        this.list = []
        this.size = 0
    }
    add(element) {
        this.sort()
        this.list.push(element)
        this.size++
    }
    remove(index) {
        this.sort()
        if (index >= 0 && index < this.list.length) {
            this.list.splice(index, 1)
            this.size--
        }
    }
    get(index) {
        if (index >= 0 && index < this.list.length) {
            return this.list[index]

        }
    }
    sort() {
        return this.list.sort((a, b) => a - b)
    }
    toString () {
        return this.list.join(' ')
    }
}


let myResult = new SortedList()
console.log(myResult);
myResult.add(5)
console.log(myResult);