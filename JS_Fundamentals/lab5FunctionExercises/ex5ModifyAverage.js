function modifyAverage(num) {
    let string = num.toString()
    let sum = 0
    let count = 0
    let bool = true
    while(bool == true) {
        for (let i = 0; i < string.length; i++) {
            sum += Number(string[i])
            count++
        }
        if (sum / count <= 5) {
            string += 9
        }
        else {
            bool = false
            console.log(string);
        }

        sum = 0
        count = 0
    }

}
modifyAverage(101)