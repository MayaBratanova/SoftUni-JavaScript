function arrayManipulation(arr) {
    let answer = arr.filter((x, i)=> i%2==1).map(x=>x = x*2).reverse()
    console.log(answer);
}
arrayManipulation([1,2,5,10,20,4])