function solve(arr) {
    let mySet = new Set()
    for (const el of arr) {
        let sorted = JSON.parse(el).map(Number).sort((a,b)=>b-a)

        mySet.add(sorted.toString())
    }
    let sortSet = [...mySet].sort((a,b)=>a.length-b.length)
    console.log(sortSet.join('\n'));

}

solve(['[-3, -2, -1, 0, 1, 2, 3, 4]','[10, 1, -17, 0, 2, 13]','[4, -3, 3, -2, 2, -1, 1, 0]'])