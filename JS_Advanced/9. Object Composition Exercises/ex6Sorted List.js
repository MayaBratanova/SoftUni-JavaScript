function getSortedList() {
    return{
        list: [],
        size: 0,

        add: function (element) {
            this.list.push(element);
            this.size++;
            this.list.sort((a,b)=>a-b)
        },
        remove: function (index) {
            if (index>=0 && index < this.list.length) {
                this.list.splice(index, 1);
                this.size--;
            }

        },
        get: function (index) {
            if (index>=0 && index < this.list.length) {
                return this.list[index];
            }
        }
    }

}


let obj = getSortedList();
obj.add(3);
obj.remove(1);
obj.get(1);
obj.size



// (function solve() {
//     Array.prototype.add = function (num) {
//         let current = this.valueOf();
//         current.sort((a,b)=>a-b);
//         current.push(num);
//         console.log(current);
//         return current;
//
//     };
//     Array.prototype.remove = function (num) {
//         let current = this.valueOf();
//         current.sort((a,b)=>a-b);
//         if (num>=0 && num < current.length) {
//             current.splice(num, 1);
//             console.log(current);
//             return current;
//         }
//     };
//     Array.prototype.get = function (num) {
//         let current = this.valueOf();
//         if (num>=0 && num < current.length) {
//             let newArray = new Array();
//             newArray[0] = current[num];
//             return newArray;
//         }
//     };
//     Array.prototype.size = function () {
//         let current = this.valueOf();
//         console.log(current);
//         console.log(current.length);
//         return current.length;
//     }
// })();
//
// let arr = [1,5,8,6,9];
// arr = arr.add(5);
// arr  = arr.remove(3);
// arr = arr.get(1);
// arr = arr.size();