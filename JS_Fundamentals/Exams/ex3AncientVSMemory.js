function solve(arr) {
    let input = arr.join(' ')

    let pattern = /32656 19759 32763 0 ([0-9]) 0 /g
    let pattern1 = /32656 19759 32763 0 ([0-9]) 0 /
    let matches = input.match(pattern)
    for (const match of matches) {
        let dates = pattern1.exec(match)[1]
        let answerPattern = new RegExp('32656 19759 32763 0 ([0-9]) 0 (([0-9][0-9][0-9]* ){' + dates + '})')
        let bigMatch = input.match(answerPattern)
        let stringNumbers = answerPattern.exec(bigMatch[0])[2]
        let arrayNumbers = stringNumbers.split(' ').filter(a=>a!=='')
        let string = ''
        for (let i = 0; i < arrayNumbers.length; i++) {
           string += String.fromCharCode(arrayNumbers[i])
        }
        console.log(string);
        input = input.substring(bigMatch[0].length)


    }


}
solve(['32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0',
    '0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 '])