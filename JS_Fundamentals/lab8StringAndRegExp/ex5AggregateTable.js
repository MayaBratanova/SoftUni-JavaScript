function aggregateTable(arr) {
    arr = arr.join('').split('|').filter(x=>x!=="")
    //arr = arr.join('')
    //arr = arr.split('|').filter(x=>x!=="")

    //console.log(arr);
    let towns = []
    let income = 0
    for (let i = 0; i < arr.length-1; i+=2) {
        towns.push(arr[i].trim())
        income+=Number(arr[i+1])
    }
    console.log(towns.join(", "));
    console.log(income);
}
aggregateTable(['| Sofia           | 300',
                '| Veliko Tarnovo  | 500',
                '| Yambol          | 275'])