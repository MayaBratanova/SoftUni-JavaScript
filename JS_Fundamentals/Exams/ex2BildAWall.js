function solve(arr) {
    let yards = 0
    let answerArr = []
    while(arr.length>0) {

        for (let i = 0; i < arr.length; i++) {

            if (+arr[i] < 30) {
                arr[i] = +arr[i] + 1
                yards += 195
            }
            else{
                let index = arr.indexOf(30)
                arr.splice(index,1)
                i--
            }
        }
        if(yards>0){
            answerArr.push(yards)
            yards = 0
        }

    }
    console.log(answerArr.join(', '))
    let sum = answerArr.reduce(function (a,b) {
        return a+b
    })
    console.log(sum*1900 + ' pesos');
}
solve([10,30,10,10,10] )
