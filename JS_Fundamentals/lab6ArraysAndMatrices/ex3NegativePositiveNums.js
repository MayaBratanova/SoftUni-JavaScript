function sortArray(arr) {
    let answer = []
    arr.forEach(num => num>=0? answer.push(num):answer.unshift(num))
    console.log(answer);
}
sortArray([3, -2, 0, -1])
