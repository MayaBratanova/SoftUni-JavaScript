function solve(str, command) {
    let nameReg = / [A-Z][a-zA-Z]*-[A-Z][A-Za-z]*(\.-[A-Z][A-Za-z]*)? /g
    let airportReg = / [A-Z]{3}\/[A-Z]{3} /g
    let flightReg = / ([A-Z]{1,3}[0-9]{1,5}) /g
    let companyReg = /- ([A-Z][a-zA-Z]*\*[A-Z][a-zA-Z]*) /g

    if (command === 'all') {
        if (nameReg.test(str) && airportReg.test(str) && flightReg.test(str) && companyReg.test(str)) {
            let name = str.match(nameReg)[0].trim().split('-')
            let airports = str.match(airportReg)[0].split('/')
            let flightNum = str.match(flightReg)[0].trim()
            let company = str.match(companyReg)[0].trim().split(/[\-\ \*]/).filter(x => x.length > 0)
            console.log(`Mr/Ms, ${name.join(' ')}, your flight number ${flightNum} is from ${airports[0].trim()} to ${airports[1].trim()}. Have a nice flight with ${company.join(' ')}.`)
        }
    } else if (command === 'flight') {
        if (flightReg.test(str), airportReg.test(str)) {
            let flightNum = str.match(flightReg)[0].trim()
            let airports = str.match(airportReg)[0].trim().split('/')
            console.log(`Your flight number ${flightNum} is from ${airports[0]} to ${airports[1]}.`)
        }
    } else if (command === 'name') {
        if (nameReg.test(str)) {
            let name = str.match(nameReg)[0].trim().split('-')
            console.log(`Mr/Ms, ${name.join(' ')}, have a nice flight!`)
        }
    } else if (command === 'company') {
        if (companyReg.test(str)) {
            let company = str.match(companyReg)[0].trim().split(/[\-\ \*]/).filter(x => x.length > 0)
            console.log(`Have a nice flight with ${company.join(' ')}.`)
        }
    }
}


solve(' Banana-BAnana travels from  AWS/NSD  - Flight*O  A50J23   V4  from STD15:00 arriving at STA18:45 ', 'all')

/*
single invalid (x3)
all valid
  name (x2)
  flight (x2)
  times (x2)
  company (x2)
  all (x2)
some invalid (x4)
*/