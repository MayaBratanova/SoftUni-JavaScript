function arrayManipulation(arr) {
    const length = arr.length
    let answer = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        if( arr[i]>=arr[i-1]){
            answer.push(arr[i])
        }else{
            arr.splice(i,1)
            i--
        }
    }
    console.log(answer.join('\n'));
}
arrayManipulation([1,3,8,4,10,12,3,2,24]);