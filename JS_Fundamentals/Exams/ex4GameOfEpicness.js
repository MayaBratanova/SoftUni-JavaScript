function gameOfEpicness(kingdoms, battles) {
    let myMap = new Map()
    let winLose = new Map()
    for (let i = 0; i < kingdoms.length; i++) {
        let king = kingdoms[i].kingdom
        let gen = kingdoms[i].general
        let arm = Number(kingdoms[i].army)
        if (!myMap.has(king)) {
            myMap.set(king, new Map())
            myMap.get(king).set(gen, {'army': arm, 'wins': 0, 'loses': 0})
            winLose.set(king, {'wins': 0, 'loses': 0})
        }
        else {
            if (!myMap.get(king).has(gen)) {
                myMap.get(king).set(gen, {'army': arm, 'wins': 0, 'loses': 0})
            }
            else {
                let currentArm = myMap.get(king).get(gen).army
                let newArm = currentArm + arm
                myMap.get(king).get(gen).army = newArm
            }
        }
    }
    for (const el of battles) {
        let firstKing = el[0]
        let firstGen = el[1]
        let secondKing = el[2]
        let secondGen = el[3]
        if (firstKing !== secondKing) {
            if (myMap.get(firstKing).get(firstGen).army > myMap.get(secondKing).get(secondGen).army) {
                myMap.get(firstKing).get(firstGen).army = Math.floor(myMap.get(firstKing).get(firstGen).army + myMap.get(firstKing).get(firstGen).army * 0.1)
                myMap.get(secondKing).get(secondGen).army = Math.floor(myMap.get(secondKing).get(secondGen).army - myMap.get(secondKing).get(secondGen).army * 0.1)
                myMap.get(firstKing).get(firstGen).wins++
                myMap.get(secondKing).get(secondGen).loses++
                winLose.get(firstKing).wins++
                winLose.get(secondKing).loses++
            }
            else if (myMap.get(firstKing).get(firstGen).army < myMap.get(secondKing).get(secondGen).army) {
                myMap.get(firstKing).get(firstGen).army = Math.floor(myMap.get(firstKing).get(firstGen).army - myMap.get(firstKing).get(firstGen).army * 0.1)
                myMap.get(secondKing).get(secondGen).army = Math.floor(myMap.get(secondKing).get(secondGen).army + myMap.get(secondKing).get(secondGen).army * 0.1)
                myMap.get(firstKing).get(firstGen).loses++
                myMap.get(secondKing).get(secondGen).wins++
                winLose.get(firstKing).loses++
                winLose.get(secondKing).wins++
            }
        }
    }
    // console.log(winLose);
    // Така се прави нов сортиран МАП  let sort = [...winLose].sort((a,b)=>{
    //   let res1 = b[1].wins - a[1].wins
    //  if(res1===0){
    //     let res2 = a[1].loses - b[1].loses
    //      if(res2===0){
    //        return a.localeCompare(b)
    //     }
    //    return res2
    //  }
    //  return res1
    //  })
    //console.log(sort[0][0]);
    let sortWins = Array.from(winLose.keys()).sort((a, b) => {
        let res = winLose.get(b).wins - winLose.get(a).wins
        if (res === 0) {
            let res1 = winLose.get(a).loses - winLose.get(b).loses
            if (res1 === 0) {
                return a.localeCompare(b)
            }
            return res1
        }
        return res
    })
    let winner = sortWins[0]
    console.log(`Winner: ${winner}`);
    let sortGen = Array.from(myMap.get(winner).keys()).sort((a, b) => {

        let res = myMap.get(winner).get(b).army - myMap.get(winner).get(a).army
        return res
    })

    for (const keys of sortGen) {
        console.log(`/\\general: ${keys}`)
        console.log(`---army: ${myMap.get(winner).get(keys).army}`)
        console.log(`---wins: ${myMap.get(winner).get(keys).wins}`)
        console.log(`---losses: ${myMap.get(winner).get(keys).loses}`)


    }


}

gameOfEpicness([{kingdom: "Maiden Way", general: "Merek", army: 5000},
        {kingdom: "Stonegate", general: "Ulric", army: 4900},
        {kingdom: "Stonegate", general: "Doran", army: 70000},
        {kingdom: "YorkenShire", general: "Quinn", army: 0},
        {kingdom: "YorkenShire", general: "Quinn", army: 2000},
        {kingdom: "Maiden Way", general: "Berinon", army: 100000}],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"]]
)