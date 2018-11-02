function rotateArray(arr) {

    let rotateCount = Number(arr.pop())
    for (let i = 0; i < rotateCount%arr.length; i++) {
        arr.unshift(arr.pop())
    }
    console.log(arr.join(' '));
}
rotateArray(['1','2','3','4','2'])