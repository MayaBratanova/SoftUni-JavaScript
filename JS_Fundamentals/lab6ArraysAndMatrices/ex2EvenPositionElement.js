function evenPosition(arr) {
    let result = []
    for (const i in arr) {
        if(i%2==0){
            result.push(arr[i])
        }
    }
    console.log(result.join(" "))
}
evenPosition([5,10,20])



