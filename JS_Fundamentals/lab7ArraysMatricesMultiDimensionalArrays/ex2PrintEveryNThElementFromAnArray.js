function printArray(arr) {
    let num = Number(arr.pop())
    for (let i = 0; i < arr.length; i+=num) {
        console.log(arr[i]);

    }

}
printArray([1,2,3,4,5,6])