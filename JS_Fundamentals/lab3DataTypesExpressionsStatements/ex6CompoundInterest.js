function compoundInterest(array) {
    let principalSum = array[0]
    let interestRate = array[1]/100
    let frequency = 12/array[2]
    let length = array[3]

    let result = principalSum*(Math.pow((1+interestRate/frequency),(frequency*length)))
    console.log(result.toFixed(2))
}
compoundInterest([1500, 4.3, 3, 6])