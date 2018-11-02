//16.12.2016
function solve(arr) {
    let book = new Map()
    let obj = new Object()
    let town = ''
    let townsStats = new Map()
    for (const myMapElement of arr) {
        let id = myMapElement.split(' ')[0]
        town = myMapElement.split(' ')[1]
        let passerngers = Number(myMapElement.split(' ')[2])
        let command = myMapElement.split(' ')[3]

        if (command == 'land' && !book.has(id)) {
            book.set(id, new Map())
            book.get(id).set(town, passerngers)
        }
        else if(command == 'land' && book.has(id)){
            continue
        }
        else if (command == 'depart' && book.has(id)) {
            book.delete(id)

        }
        else if (command == 'depart' && !book.has(id)) {
            continue

        }

        if (!townsStats.has(town)) {
            townsStats.set(town, {arrivals: 0, departures: 0, planes: new Set()});
        }

        if (command == 'land')
            townsStats.get(town).arrivals += Number(passerngers);
        else
            townsStats.get(town).departures += Number(passerngers);

        townsStats.get(town).planes.add(id);
    }
    //console.log(townsStats);

    let sortedTowns = []
    for (const [k,v] of townsStats) {
        sortedTowns = Array.from(townsStats.keys()).sort((a,b)=>{
            let res = townsStats.get(b).arrivals - townsStats.get(a).arrivals
            if(res==0){
                res = a.localeCompare(b)
            }
            return res
        })
    }

    console.log('Planes left:')
    let sortedBook = Array.from(book.keys()).sort((a,b) =>a.localeCompare(b))
    for (const value of sortedBook) {
        console.log(`- ${value}`)
    }
    for (const c of sortedTowns) {
        console.log(c);
        console.log('Arrivals: ' + townsStats.get(c).arrivals);
        console.log('Departures: ' + townsStats.get(c).departures);
        console.log('Planes:');
        let currentTown = townsStats.get(town);
        let sortedPlanes = [...currentTown.planes.values()].sort((a,b)=>{
            a.localeCompare(b)

        })
        for (const any of sortedPlanes) {
            console.log('-- ' + any)
        }
    }
}

solve([
        "Boeing474 Madrid 300 land",
        "AirForceOne WashingtonDC 178 land",
        "Airbus London 265 depart",
        "ATR72 WashingtonDC 272 land",
        "ATR72 Madrid 135 depart"
    ]
)