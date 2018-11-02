function solve(arr) {
    let arrNumber = []
    let arrSymbol = []
    let pattern = /-*[0-9]+/
    for (const arrElement of arr) {
        if(pattern.test(arrElement)){
            arrNumber.push(arrElement)
        }
        else{
            if(arrNumber.length>=2){
                let num2 = arrNumber.pop()
                let num1 = arrNumber.pop()
                if(arrElement=='+'){
                    arrNumber.push(num1+num2)
                }
                else if(arrElement=='-'){
                    arrNumber.push(num1-num2)
                }
                else if(arrElement=='*'){
                    arrNumber.push(num1*num2)
                }
                else if(arrElement=='/'){
                    arrNumber.push(num1/num2)
                }
            }
            else {
                arrSymbol.push(arrElement)
                continue
            }
        }
    }
    if(arrNumber.length==1 && arrSymbol.length==0){
        console.log(arrNumber.join(''))
    }
    else if(arrNumber.length>1){
        console.log('Error: too many operands!')
    }
    else if(arrNumber.length==1 && arrSymbol.length>=1){
        console.log("Error: not enough operands!")
    }

    //console.log(arrSymbol)

}
solve([5,'/']
)