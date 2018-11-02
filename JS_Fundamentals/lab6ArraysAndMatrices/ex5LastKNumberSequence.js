function numbersSequence(n,k) {
    let arr = []
    arr[0] = 1
    let sum = 0
    for (let i = 1; i < n; i++) {
        for (let j = 1; j <= k; j++) {
            if(arr[i-j] == undefined){
                continue
            } else{
                sum +=arr[i-j]
            }
        }
        arr.push(sum)
        sum = 0
    }
    console.log(arr);
}
numbersSequence(6,3)