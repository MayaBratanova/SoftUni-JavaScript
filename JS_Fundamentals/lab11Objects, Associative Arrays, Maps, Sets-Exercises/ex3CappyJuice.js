function cappyJus(arr) {
    let myMap = new Map()
    let answerMap = new Map()
    for (const el of arr) {
        let input = el.split(' => ').filter(a=>a!=='')
        let fruit = input[0]
        let quantity = Number(input[1])
        if(!myMap.has(fruit)){
            myMap.set(fruit, quantity)
        }else{
            let previousQuantity = myMap.get(fruit)
            myMap.set(fruit,previousQuantity+quantity)
        }
        let bottles = Math.floor(myMap.get(fruit)/1000)
        if(bottles>=1 && !answerMap.has(fruit)){
            answerMap.set(fruit,bottles)
            myMap.set(fruit, myMap.get(fruit)-bottles*1000)

        }else if(bottles>=1 && answerMap.has(fruit)){
            let preBottles = answerMap.get(fruit)
            answerMap.set(fruit,preBottles + bottles)
            myMap.set(fruit, myMap.get(fruit)-bottles*1000)
        }

    }
    for (const [k,v] of answerMap) {
        console.log(k + ' => ' + v)
    }
}
cappyJus(['Orange => 2000','Peach => 1432','Banana => 450','Peach => 600','Strawberry => 549'])