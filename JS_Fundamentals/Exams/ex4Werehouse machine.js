function solve(input) {
    let storage = new Map()
    for (let element of input) {
        let tokens = element.split(', ')
        let name, secondName, date, quantity
        switch(tokens[0]) {
            case 'IN':
                name = tokens[1]
                secondName = tokens[2]
                date = new Date(tokens[3])
                quantity = Number(tokens[4])
                if (!storage.has(name)) {
                    storage.set(name, new Map())
                    storage.get(name).set(secondName, {date, quantity})
                } else {
                    if (!storage.get(name).has(secondName)) {
                        storage.get(name).set(secondName, {date, quantity})
                    } else {
                        let fromStorage = storage.get(name).get(secondName)
                        if (date > fromStorage.date) {
                            storage.get(name).set(secondName, {date, quantity})
                        } else if (date === fromStorage.date) {
                            let newQuantity = fromStorage.quantity + quantity
                            storage.get(name).set(secondName, {date, quantity: newQuantity})
                        }
                    }
                }
                break
            case 'OUT':
                name = tokens[1]
                secondName = tokens[2]
                date = new Date(tokens[3])
                quantity = Number(tokens[4])
                if (storage.has(name)) {
                    if (storage.get(name).has(secondName)) {
                        let fromStorage = storage.get(name).get(secondName)
                        if (date < fromStorage.date && quantity <= fromStorage.quantity) {
                            let newQuantity = fromStorage.quantity - quantity
                            let fromStorageDate = fromStorage.date
                            storage.get(name).set(secondName, {date:fromStorageDate, quantity: newQuantity})
                        } else if (date < fromStorage.date && quantity > fromStorage.quantity) {
                            storage.get(name).set(secondName, {date:fromStorageDate, quantity: 0})
                        }
                    }
                }
                break
            case 'REPORT':
                console.log('>>>>> REPORT! <<<<<')
                for (let [key, value] of storage) {
                    console.log(`Brand: ${key}:`)
                    for (let [key2, value2] of value) {
                        console.log(`-> ${key2} -> ${value2.date.getFullYear()}-${("0" +(value2.date.getMonth() + 1)).slice(-2)}-${("0" + value2.date.getDate()).slice(-2)} -> ${value2.quantity}.`)
                    }
                }
                break
            case 'INSPECTION':
                console.log('>>>>> INSPECTION! <<<<<')
                let sorted = [...storage].sort((a, b) => a[0].localeCompare(b[0]))
                for (let [key, value] of sorted) {
                    console.log(`Brand: ${key}:`)
                    let sortedValue = [...value].sort((a, b) => b[1].quantity - a[1].quantity)
                    for (let [key2, value2] of sortedValue) {
                        console.log(`-> ${key2} -> ${value2.date.getFullYear()}-${("0" +(value2.date.getMonth() + 1)).slice(-2)}-${("0" + value2.date.getDate()).slice(-2)} -> ${value2.quantity}.`)
                    }
                }
                break
        }
    }
}

solve([
    "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
    "IN, Folgers, Black Silk, 2023-03-01, 14",
    "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
    "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
    "IN, Folgers, Black Silk, 2022-01-01, 10",
    "IN, Lavazza, Intenso, 2022-07-19, 20",
    "OUT, Dallmayr, Espresso, 2022-07-19, 5",
    "OUT, Dallmayr, Crema, 2022-07-19, 5",
    "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
    "REPORT",
    "INSPECTION",
]);
console.log('\n')
solve([
    "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
    "REPORT",
]);
console.log('\n')
solve([
    "IN, Batdorf & Bronson, Espresso, 2005-01-25, 15",
    "IN, Batdorf & Bronson, NotEspresso, 2025-06-15, 10",
    "REPORT",
]);
console.log('\n')
solve([
    "IN, Batdorf & Bronson, Espresso, 2005-01-25, 15",
    "IN, Batdorf & Bronson, NotEspresso, 2025-06-15, 10",
    "IN, Batdorf & Bronson, NotEspresso, 2025-06-16, 25",
    "REPORT",
]);
console.log('\n')
solve([
    "IN, Batdorf & Bronson, Espresso, 2005-01-25, 15",
    "IN, Batdorf & Bronson, NotEspresso, 2025-06-15, 255",
    "IN, Batdorf & Bronson, NotEspresso, 2025-06-14, 80",
    "REPORT",
]);
console.log('\n')
solve([
    "IN, Batdorf & Bronson, Espresso, 2005-01-25, 15",
    "OUT, Batdorf & Bronson, NotEspresso, 2025-06-15, 255",
    "REPORT",
]);
console.log('\n')
solve([
    "IN, Batdorf & Bronson, Espresso, 2005-01-25, 515",
    "OUT, Batdorf&Bronson, Espresso, 2025-06-15, 255",
    "REPORT",
]);
console.log('\n')
solve([
    "IN, BIB, ES, 2005-01-25, 15",
    "OUT, BIB, ES, 2025-06-15, 10",
    "REPORT",
]);
console.log('\n')
solve([
    "IN, BIB, ES, 2005-02-19, 15",
    "OUT, BIB, ES, 2001-08-05, 10",
    "REPORT",
]);
console.log('\n')
solve([
    "IN, BIB, ES, 2005-02-19, 15",
    "OUT, BIB, ES, 2010-08-05, 5",
    "REPORT",
]);
console.log('\n')
solve([
    "IN, KKK, TES, 2005-02-19, 15",
    "OUT, KKK, TES, 2010-08-05, 50",
    "REPORT",
]);
console.log('\n')
solve([
    "IN, Batdorf & Bronson, Es, 2025-05-25, 20",
    "IN, Batdorf & Bronson, Espresso, 2035-05-25, 70",
    "IN, Batdorf & Bronson, Es, 2035-05-25, 60",
    "IN, Folgers, Black Silk, 2023-03-01, 14",
    "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
    "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
    "IN, Folgers, Black Silk, 2022-01-01, 10",
    "IN, Lavazza, Intenso, 2022-07-19, 20",
    "OUT, Dallmayr, Espresso, 2022-07-19, 5",
    "OUT, Dallmayr, Crema, 2022-07-19, 5",
    "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
    "IN, Batdorf & Bronson, Es, 2025-05-25, 10",
    "REPORT",
]);
console.log('\n')
solve([
    "IN, Batdorf & Bronson, Espresso, 2035-05-25, 70",
    "IN, Batdorf & Bronson, Es, 2025-05-25, 20",
    "IN, Batdorf & Bronson, Es, 2035-05-25, 60",
    "IN, Folgers, Black Silk, 2023-03-01, 14",
    "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
    "IN, Lavazza, Crema, 2005-05-01, 5",
    "IN, Lavazza, Crema, 2006-05-01, 50",
    "IN, Lavazza, Intenso, 2022-07-19, 20",
    "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
    "IN, Folgers, Black Silk, 2022-01-01, 10",
    "OUT, Dallmayr, Espresso, 2022-07-19, 5",
    "OUT, Dallmayr, Crema, 2022-07-19, 5",
    "OUT, Lavazza, Crema, 2020-01-28, 2",
    "IN, Batdorf & Bronson, Es, 2025-05-25, 10",
    "INSPECTION",
]);
console.log('\n')
solve([
    "IN, Folgers, Black Silk, 2023-03-01, 14",
    "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
    "IN, Lavazza, Crema, 2005-05-01, 5",
    "IN, Lavazza, Crema, 2006-05-01, 50",
    "IN, Batdorf & Bronson, Es, 2025-05-25, 20",
    "IN, Batdorf & Bronson, Espresso, 2035-05-25, 70",
    "IN, Batdorf & Bronson, Es, 2035-05-25, 60",
    "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
    "IN, Folgers, Black Silk, 2022-01-01, 10",
    "IN, Lavazza, Intenso, 2022-07-19, 20",
    "OUT, Dallmayr, Espresso, 2022-07-19, 5",
    "OUT, Dallmayr, Crema, 2022-07-19, 5",
    "OUT, Lavazza, Crema, 2020-01-28, 2",
    "IN, Batdorf & Bronson, Es, 2025-05-25, 10",
    "INSPECTION",
]);


/*
test IN
  - if there is not such name in storage
  - if there is such name but not such second name
  - if there is such name and such second name with later date
  - if there is such name and such second name with earalier date
test OUT
  - with such name but another second name
  - with no such name
  - with such name and second name later date
  - with such name and second name earlier date
  - valid but not enough quantity
  - valid and less quantity
test REPORT
  - one test without INSPECTION
test INSPECTION
  - test with needs only first sort
  - test that needs both sorts
*/