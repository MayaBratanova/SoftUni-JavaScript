function solve(arr) {
    let book = new Map()
    let helperMap = new Map()
    for (let argument of arr) {
        let input = argument.split(/ -> | vs /).filter(a => a !== '')
        if (input == 'Ave Cesar') {
            break;
        }
        else if (input.length == 3) {
            let name = input[0]
            let technic = input[1]
            let skill = Number(input[2])
            if (!book.has(name)) {
                book.set(name, new Map())
                book.get(name).set(technic, skill)
                helperMap.set(name, skill)
            }
            else {
                helperMap.set(name, helperMap.get(name) + skill)
                if (book.has(name) && !book.get(name).has(technic)) {
                    book.get(name).set(technic, skill)
                }
                else if (book.has(name) && book.get(name).has(technic)) {
                    if (book.get(name).get(technic) < skill) {
                        book.get(name).set(technic, skill)
                    }
                }
            }

        }
        else if (input.length == 2) {
            let firstName = input[0]
            let secondName = input[1]
            if (book.has(firstName) && book.has(secondName)) {

                let firstNameTechnic = Array.from(book.get(firstName).keys())
                let secondNameTechnic = Array.from(book.get(secondName).keys())
                for (const el of firstNameTechnic) {
                    for (const elElement of secondNameTechnic) {

                        if (el == elElement) {
                            let firstValue = book.get(firstName).get(el)
                            let secondValue = book.get(secondName).get(el)
                            if (firstValue > secondValue) {
                                book.delete(secondName)
                                helperMap.delete(secondName)
                            }
                            else if (firstValue < secondValue) {
                                book.delete(firstName)
                                helperMap.delete(firstName)
                            }
                        }

                        else {
                            continue
                        }

                    }
                }
            }

        }
    }
    let sortedHelperMap = Array.from(helperMap.keys()).sort((a, b) => {
        let res = helperMap.get(b) - helperMap.get(a)
        if (res == 0) {
            helperMap.get(a).localeCompare(helperMap.get(b))
        }
        return res
    })


    for (const k of sortedHelperMap) {
        console.log(`${k}: ${helperMap.get(k)} skill`);
        //console.log(book.get(k).keys());
        let sortedBook = Array.from(book.get(k).keys()).sort((a, b) => {
            let res = book.get(k).get(b) - book.get(k).get(a)
            if(res===0){

                return a.localeCompare(b)
            }

            return res
        })
        //console.log(sortedBook);
        for (const j of sortedBook) {
            console.log(`- ${j} <!> ${book.get(k).get(j)}`);

        }

    }
}

solve(['Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'])