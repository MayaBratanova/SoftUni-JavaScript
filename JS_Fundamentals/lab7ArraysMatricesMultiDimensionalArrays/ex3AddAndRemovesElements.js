function addAndRemovesNums(arr) {
    let answer = []
    for (let i = 0; i < arr.length; i++) {
        arr[i] === 'add'? answer.push(i+1): answer.pop()

    }
    answer.length===0? console.log('Empty'): console.log(answer.join('\n'));

}
addAndRemovesNums(['add', 'add','remove','add','add'])