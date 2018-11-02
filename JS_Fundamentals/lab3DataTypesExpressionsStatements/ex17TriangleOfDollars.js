function dollars(num) {
    let result = ''
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            result+='$'
        }
        result+='\n'
    }
    console.log(result)
}
dollars(3)