function firstLastK(array) {
    let count = array.shift(array[0])
    let firstNums = array.slice(0,count)
    let lastNums = array.slice(array.length-count, array.length)
    console.log(firstNums);
    console.log(lastNums);

}
firstLastK([3,3,5,8,9])