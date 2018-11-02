(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        if (!this.toString().startsWith(str)) {          
            return str + this.toString();
        }
        return this.toString();
    };
    String.prototype.ensureEnd = function (str) {
        if(!this.toString().endsWith(str)){
            return this.toString() + str
        }
        return this.toString()
    }
    String.prototype.isEmpty = function () {
        return this.toString().localeCompare("") == 0;
    };

    String.prototype.truncate = function (n) {
        if(n <= 3){
            return ".".repeat(n);
        }
        if(this.toString().length <= n){
            return this.toString();
        } else {
            let lastIndex = this.toString().substr(0, n - 2).lastIndexOf(" ");
            if(lastIndex != -1){
                return this.toString().substr(0, lastIndex) + "...";
            } else {
                return this.toString().substr(0, n-3) + "...";
            }
        }
    };
    String.format = function (str, ...param) {
        for (let i = 0; i < param.length; i++) {
            let index = str.indexOf("{"+i+"}")
           while(index!==-1){
                str = str.replace("{"+i+"}", param[i])
                index = str.indexOf("{"+i+"}");
           }

        }
        return str
    }
})()
let str = 'my string'
str = str.ensureStart('my')
str = str.ensureStart('hello ')
str = str.truncate(16)
str = str.truncate(14)
str = str.truncate(8)
str = str.truncate(4)
str = str.truncate(2)
str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0} {1}',
    'dog');

// (() => {
//     String.prototype.ensureStart = function (str) {
//         let currentStr = this.valueOf();
//         if(currentStr.indexOf(str)===0){
//             return currentStr;
//         }
//         return str + currentStr;
//     };
//     String.prototype.ensureEnd = function (str) {
//         let currentStr = this.valueOf();
//         let lastCurrentEl= currentStr.split(' ')[currentStr.length-1];
//         if(lastCurrentEl===str){
//             return currentStr;
//         }
//         return currentStr + str;
//     };
//     String.prototype.truncate = function (str) {
//
//     }
// })();
//
//
//
//
// let str = 'my string'
// str = str.ensureStart('my')
// str = str.ensureStart('hello ')
// str = str.truncate(16)
// str = str.truncate(14)
// str = str.truncate(8)
// str = str.truncate(4)
// str = str.truncate(2)
// str = String.format('The {0} {1} fox',
//     'quick', 'brown');
// str = String.format('jumps {0} {1}',
//     'dog');