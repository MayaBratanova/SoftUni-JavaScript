function getFibonator() {
    let num1 = 0
    let num2 = 1
    return ()=>{
        let next = num2
        num2 = num1+num2
        num1 = next
        return num1
    }
}
let fib = getFibonator()
console.log(fib());
console.log(fib());
console.log(fib());