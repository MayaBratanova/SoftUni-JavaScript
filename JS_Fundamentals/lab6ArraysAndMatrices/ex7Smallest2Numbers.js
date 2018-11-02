function smallestNums(arr) {
    arr.sort((a,b) =>a-b)
    let answer = arr.slice(0,2)
    console.log(answer.join(" "));
}
smallestNums([2,5,1,0,6,-1])