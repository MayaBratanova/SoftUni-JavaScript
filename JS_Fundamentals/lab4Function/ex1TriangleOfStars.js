function triangleOfStars(num) {
    function printStars(a) {
        console.log('*'.repeat(a))
    }
    for (let i = 1; i <= num; i++) {
       printStars(i)
    }
    for (let i = num - 1; i >= 1; i--) {
        printStars(i)
    }
}
triangleOfStars(3)