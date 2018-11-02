function autoEngineeringCompany(arr) {
    let register = new Map()
    for (const el of arr) {
        let input = el.split(' | ').filter(a=>a!=='')
        let brand = input[0]
        let model = input[1]
        let quantity = Number(input[2])
        if(!register.has(brand)){
            register.set(brand, new Map())
            register.get(brand).set(model, quantity)
        }else{
            if(register.has(brand) && !register.get(brand).has(model)){
                register.get(brand).set(model,quantity)
            }
            else{
                let currentQuantiry = register.get(brand).get(model)
                //console.log(currentQuantiry);
                register.get(brand).set(model, currentQuantiry+quantity)
            }
        }

    }
    for (const [k,v] of register) {
        console.log(k);
        for (const [m, q] of v) {
            console.log(`###${m} -> ${q}`);
        }
    }
}
autoEngineeringCompany(['Audi | Q7 | 1000','Audi | Q6 | 100','BMW | X5 | 1000','BMW | X6 | 100','Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000','Lada | Niva | 1000000','Lada | Jigula | 1000000','Citroen | C4 | 22','Citroen | C5 | 10'])