class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }
    append(string) {
        StringBuilder._vrfyParam(string);
        for(let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }
    prepend(string) {
        StringBuilder._vrfyParam(string);
        for(let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }
    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }
    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }
    static _vrfyParam(param) {
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    }
    toString() {
        return this._stringArray.join('');
    }
}
module.exports = StringBuilder


let strBuild = new StringBuilder('maya')
strBuild.remove(2,2)
//console.log(strBuild);
//strBuild.append('dario')
//console.log(strBuild);
//strBuild.prepend('maya')
//console.log(strBuild);
//strBuild.insertAt('A', 1)
console.log(strBuild);
//console.log(strBuild.toString());

