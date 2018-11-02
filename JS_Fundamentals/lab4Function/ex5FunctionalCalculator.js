function calculator(a,b,sign){
    let first = function (a,b) {
        return a+b
    }
    let second = function (a,b) {
        return a-b
    }
    let tirth = function (a,b) {
        return a*b
    }
    let fourth = function (a,b) {
        return a/b
    }
    switch (sign){
        case '+': return first (a,b,sign)
        case '-': return second (a,b,sign)
        case '*': return tirth (a,b,sign)
        case '/': return fourth (a,b,sign)

    }
}

console.log(calculator(5, 2, '*'));