function findNames(str) {
    let pattern = /(\_)([A-Za-z0-9]+)/g
    let dates = []
    let match = []
    while(match = pattern.exec(str)){
        dates.push(match[2])
    }

    console.log(dates.join(","));

}
findNames('The _id and _age variables are both integers.')