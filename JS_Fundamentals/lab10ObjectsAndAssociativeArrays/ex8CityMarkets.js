function cityMarkets(arr) {
    let myMap = new Map()
    for (const input of arr) {
        let[town, good, multiply] = input.split(/\s*->\s*/g).filter(a=>a!=='')
        let[price, quantity] = multiply.split(/\s*:\s*/).filter(a=>a!=='')
        let totalPrice = price*quantity
        if(!myMap.has(town)){
            let helpMap = new Map()
            helpMap.set(good,totalPrice)
            myMap.set(town, helpMap)
        }
        else {
            if (myMap.has(town) && !myMap.get(town).has(good)) {
                myMap.get(town).set(good, totalPrice)
            }
            else if(myMap.has(town) && myMap.get(town).has(good)){
                let oldIncome = myMap.get(town).get(good)
                myMap.get(town).set(good, myMap.get(town).get(good)+totalPrice)
                //console.log(myMap.get(town).get(good));
            }
        }
    }
    for (const [k,v] of myMap) {
        console.log(`Town - ${k}`)
        for (const [g,p] of v) {
            console.log(`$$$${g} : ${p}`)
        }
    }
}
cityMarkets(['Sofia -> Laptops HP -> 200 : 2000','Sofia -> Raspberry -> 200000 : 1500','Sofia -> Audi Q7 -> 200 : 100000',
        'Montana -> Portokals -> 200000 : 1','Montana -> Qgodas -> 20000 : 0.2','Montana -> Qgodas -> 1000 : 0.3'
])