function solve() {
class Melon {
    constructor(weight, melonSort) {
        if (new.target === Melon) {
            throw new Error("Abstract class cannot be instantiated directly")
        }
        this.weight = Number(weight)
        this.melonSort = melonSort
        this.element = ''
        this._elementIndex = this.weight * this.melonSort.length
    }
    get elementIndex() {
        return this._elementIndex;
    }

    toString() {
        let str = `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        return str
    }
}

class Watermelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort)
        this.element = 'Water'
    }
}

class Firemelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort)
        this.element = 'Fire'
    }
}

class Earthmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort)
        this.element = 'Earth'
    }
}

class Airmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort)
        this.element = 'Air'
    }
}

class Melolemonmelon extends Airmelon {
    constructor(weight, melonSort) {
        super(weight, melonSort)
        this.element = 'Water'
    }
    morph() {
        if (this.element === "Water") {
            this.element = "Fire";
        } else if (this.element === "Fire") {
            this.element = "Earth";
        } else if (this.element === "Earth") {
            this.element = "Air";
        } else {
            this.element = "Water";
        }
    }
}

return{Melon,Watermelon,Firemelon,Earthmelon,Airmelon,Melolemonmelon}
}


let test = new Airmelon(5, 'Rotten')
console.log(test);
console.log(test.toString());
