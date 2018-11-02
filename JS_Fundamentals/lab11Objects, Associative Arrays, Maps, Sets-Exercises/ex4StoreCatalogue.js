function storeCatalogue(arr) {
    let phoneBook = new Map()
    for (const el of arr) {
        let input = el.split(' : ').filter(a=>a!=='')
        let name = input[0]
        let quantity = input[1]
        let letter = name.substr(0,1)
        let num = name.charCodeAt(0);
        if(num<65 || num>90){
            continue
        }
        if(!phoneBook.has(letter)){
            phoneBook.set(letter, new Map())
        }
        if(phoneBook.get(letter).has(name)){
            continue
        }
        phoneBook.get(letter).set(name, quantity)
    }
    function alphabeticaly(a,b) {
        return a[0].localeCompare(b[0])

    }
    let sortedMap = [...phoneBook].sort(alphabeticaly)

    for (const [k,v] of sortedMap) {
        console.log(k);
        let sorted = [...v].sort(alphabeticaly)

        for (const [m,n ]of sorted) {
            console.log(`  ${m}: ${n}`);

        }

    }
}
storeCatalogue(['appricot : 20.4','Appricot : 1500','TV : 1499','Deodorant : 10',
    'Boiler : 300','Apple : 1.25','Anti-Bug Spray : 15','T-Shirt : 10'])