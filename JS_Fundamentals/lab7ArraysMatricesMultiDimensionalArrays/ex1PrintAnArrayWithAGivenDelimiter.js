function printArray(arr) {
    let separator = arr.pop()
    console.log(arr.join(`${separator}`));

}
printArray(['Maya', 'is', 'the', '|'])