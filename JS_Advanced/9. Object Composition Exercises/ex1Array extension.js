(function solve() {
    Array.prototype.last = function () {
        console.log(this);
        return this[this.length-1]
    };
    Array.prototype.skip = function (n) {
        let newArr = []
        for (let i = n; i < this.length; i++) {
                newArr.push(this[i])
        }
        return newArr
    };
    Array.prototype.take = function (n) {
        let newArr = []
        for (let i = 0; i < this.length; i++) {
            if (i < n) {
                newArr.push(this[i])
            }
        }
        return newArr
    };
    Array.prototype.sum = function () {
        return this.reduce((a, b) => a + b)
    };
    Array.prototype.average = function () {
        let sum = this.reduce((a, b) => a + b)
        return sum / this.length
    };


})();

let arr = [1,2,3];
arr = arr.last();



