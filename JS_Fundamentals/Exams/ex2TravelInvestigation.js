z 'use strict'
function solve(arr) {
    let delimeter = arr[1]
    let company = arr[0].split(delimeter)
    let valid = true
    let validSentence = []
    let invalidSentence = []
    //console.log(company);
    for (let i = 2; i < arr.length; i++) {
        let input = arr[i].toLowerCase()
        for (const comp of company) {
            if (!input.includes(comp)) {
                valid = false
            }

        }
        if (valid === false) {
            invalidSentence.push(input)
            valid = true
        }
        else {
            validSentence.push(input)

        }
    }
   // console.log(validSentence);
  //  console.log(invalidSentence);
    let count = 0
    let count1 = 0
    let count2 = 0
    if (validSentence.length > 0 && invalidSentence.length > 0) {
        console.log('ValidSentences');
        for (const el of validSentence) {
            count++
            console.log(`${count}. ${el}`);
        }
        console.log('='.repeat(30))
        console.log('InvalidSentences');
        for (const el of invalidSentence) {
            count1++
            console.log(`${count1}. ${el}`);
        }
    }


    else
    {
        if (validSentence.length > 0 && invalidSentence.length === 0) {
            console.log('ValidSentences');

            for (const el of validSentence) {
                count2++
                console.log(`${count2}. ${el}`);
            }
        }

        else if (validSentence.length === 0 && invalidSentence.length > 0) {
            console.log('InvalidSentences');

            for (const el of invalidSentence) {
                count2++
                console.log(`${count2}. ${el}`);
            }


        }
    }


}
    solve(['bulgariatour@, minkatrans@, koftipochivkaltd',
'@, ',
'Mincho  e KoftiPockivkaLTD Tip 123  ve MinkaTrans BulgariaTour',
'We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour',
'dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS']

)