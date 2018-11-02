function heroicInventory(arr) {
   let answerArr = []
    for (const el of arr) {
        let arg = el.split(' / ').filter(x=>x!=='')
        let name = arg[0]
        let age = Number(arg[1])
        let items = []
        if(arg.length>2){
            items = arg[2].split(', ')
        }

        let obj = {}
        obj['name'] = name
        obj['level'] = Number(age)
        obj['items'] = items
        answerArr.push(obj)
    }
    console.log(JSON.stringify(answerArr));
}
heroicInventory(['Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])