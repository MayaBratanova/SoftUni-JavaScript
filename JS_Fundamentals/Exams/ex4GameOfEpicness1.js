function gameOfEpicness (kingdoms, battles) {
    let kingdomMap = new Map()
    let winners = new Map()

    for (const kingdom of kingdoms) {
        if (!kingdomMap.has(kingdom.kingdom)) {
            kingdomMap.set(kingdom.kingdom, new Map())
        }

        if (!kingdomMap.get(kingdom.kingdom).has(kingdom.general)) {
            kingdomMap.get(kingdom.kingdom).set(kingdom.general, { armyCount: 0, wins: 0, losses: 0 })
        }

        kingdomMap.get(kingdom.kingdom).get(kingdom.general).armyCount += kingdom.army
    }

    for (const battle of battles) {
        let attackingKingdom = battle[0]
        let attackingGeneral = battle[1]
        let defendingKingdom = battle[2]
        let defendingGeneral = battle[3]

        let attackingArmy = kingdomMap.get(attackingKingdom).get(attackingGeneral).armyCount
        let defendingArmy = kingdomMap.get(defendingKingdom).get(defendingGeneral).armyCount

        if (attackingKingdom === defendingKingdom ||
            attackingArmy === defendingArmy) {
            continue
        }

        if (attackingArmy > defendingArmy) {
            kingdomMap.get(attackingKingdom).get(attackingGeneral).armyCount = Math.floor(attackingArmy * 1.1)
            kingdomMap.get(defendingKingdom).get(defendingGeneral).armyCount = Math.floor(defendingArmy * 0.9)
            kingdomMap.get(attackingKingdom).get(attackingGeneral).wins++
            kingdomMap.get(defendingKingdom).get(defendingGeneral).losses++
        } else {
            kingdomMap.get(attackingKingdom).get(attackingGeneral).armyCount = Math.floor(attackingArmy * 0.9)
            kingdomMap.get(defendingKingdom).get(defendingGeneral).armyCount = Math.floor(defendingArmy * 1.1)
            kingdomMap.get(attackingKingdom).get(attackingGeneral).losses++
            kingdomMap.get(defendingKingdom).get(defendingGeneral).wins++
        }
    }

    for (const [kingdom, generals] of kingdomMap) {
        if (!winners.has(kingdom)) {
            winners.set(kingdom, { wins: 0, losses: 0, army: 0 })
        }

        for (const [general, armyInfo] of generals) {
            winners.get(kingdom).wins += armyInfo.wins
            winners.get(kingdom).losses += armyInfo.losses
            winners.get(kingdom).army += armyInfo.armyCount
        }
    }
    console.log(winners);
    let winner = [...winners].sort(function (x, y) {
        if (x[1].wins > y[1].wins) {
            return -1

        }
        if (x[1].wins < y[1].wins) {
            return 1
        }
        if (x[1].losses > y[1].losses) {
            return 1
        }
        if (x[1].losses < y[1].losses) {
            return -1
        }

        return x[0].localeCompare(y[0])
    })[0][0]

    console.log(`Winner: ${winner}`)
    for (const [general, generalInfo] of [...kingdomMap.get(winner)].sort((x, y) => y[1].armyCount - x[1].armyCount)) {
        console.log(`/\\general: ${general}`)
        console.log(`---army: ${generalInfo.armyCount}`)
        console.log(`---wins: ${generalInfo.wins}`)
        console.log(`---losses: ${generalInfo.losses}`)
    }
}
gameOfEpicness([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]
)