(() => {
    String.prototype.ensureStart = function (str) {
        let currentStr = this.valueOf();
        if(currentStr.indexOf(str)===0){
            return currentStr;
        }
        return str + currentStr;
    };
    String.prototype.ensureEnd = function (str) {
        let currentStr = this.valueOf();
        let lastCurrentEl= currentStr.split(' ')[currentStr.length-1];
        if(lastCurrentEl===str){
            return currentStr;
        }
        return currentStr + str;
    };
    String.prototype.truncate = function (str) {

    }
})();




let str = 'my string'
str = str.ensureStart('my')
str = str.ensureStart('hello ')
// str = str.truncate(16)
// str = str.truncate(14)
// str = str.truncate(8)
// str = str.truncate(4)
// str = str.truncate(2)
// str = String.format('The {0} {1} fox',
//     'quick', 'brown');
// str = String.format('jumps {0} {1}',
//     'dog');