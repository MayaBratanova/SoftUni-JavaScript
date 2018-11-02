function subsum(arr, firstIndex, endIndex) {
    if(!Array.isArray(arr)){
        return NaN
    }
    if(firstIndex<0){
        firstIndex=0
    }
    if(endIndex>arr.length-1){
        endIndex = arr.length-1
    }
    let sum = 0
    for (let i = firstIndex; i <= endIndex; i++) {
       sum+=Number(arr[i])
    }
    return sum
}
subsum([1,2,3,4,5], 1,3)