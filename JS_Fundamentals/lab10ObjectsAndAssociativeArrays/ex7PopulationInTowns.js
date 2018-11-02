function populationInTowns(arr) {
    let myMap = new Map()
    let input = []
    for (const arrElement of arr) {
        input = arrElement.split(/\s*\<\-\>\s*/).filter(x=>x!=='')
        if(!myMap.has(input[0])){
            myMap.set(input[0],Number(input[1]))
        }else{
            myMap.set(input[0],myMap.get(input[0])+Number(input[1]))
        }
    }
    for (const [k,v] of myMap) {
        console.log(k + " : " + v)
    }
}
populationInTowns(['Sofia <-> 1200000','Sofia <-> 20000','New York <-> 10000000','Washington <-> 2345000','Las Vegas <-> 1000000'])