function parseData(arrData) {
    let pattern = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([A-Za-z0-9 -]+)$/
    let match = []
    let dates = []
    for (const arr of arrData) {
        if(match = pattern.exec(arr)){

            console.log(`Name: ${match[1]}` + "\n" + `Position: ${match[3]}` + "\n" + `Salary: ${match[2]}`)
        }
    }

}
parseData(['Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee'
])