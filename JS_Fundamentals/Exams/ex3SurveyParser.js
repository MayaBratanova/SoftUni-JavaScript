function surveyParser(str) {

    let pattern = /(<svg>)(.+)(<\/svg>)/
    let answer = pattern.test(str)
    if (answer == true) {
        let surveyData = pattern.exec(str)[2]
        let pattern1 = /(<cat>)(.+)(<\/cat>)\s*(<cat>)(.+)(<\/cat>)/
        let test = pattern1.test(surveyData)
        if(test==true) {
            let surveyHeadingAndLabel = pattern1.exec(surveyData)[2]
            let ratings = pattern1.exec(surveyData)[5]
            let pattern2 = /(<text>)(.+)\[(.+)\](<\/text>)/
            let test1 = pattern2.test(surveyHeadingAndLabel)
            if(test1) {
                let heading = pattern2.exec(surveyHeadingAndLabel)[2]
                let label = pattern2.exec(surveyHeadingAndLabel)[3]
                let pattern3 = /<g><val>([0-9]+)<\/val>([0-9]+)<\/g>/gm
                let count = []
                let quantity = []
                let match = []
                while (match = pattern3.exec(ratings)) {
                    count.push(Number(match[1]))
                    quantity.push(Number(match[2]))
                }
                let sum = quantity.reduce(function (a, b) {
                    return a + b;
                });
                let multiply = 0
                for (let i = 0; i < quantity.length; i++) {
                    multiply += count[i] * quantity[i]
                }
                let final = parseFloat((multiply / sum).toFixed(2))

                console.log(label + ': ' + final);
            }
            else{
                console.log('Invalid format')
            }
        }
        else{
            console.log('Invalid format')
        }
    }
    else{
        console.log('No survey found')
    }
}
surveyParser('<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>')