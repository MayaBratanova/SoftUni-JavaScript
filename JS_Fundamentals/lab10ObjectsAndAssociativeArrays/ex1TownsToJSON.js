function townsToJSON(arr) {
    let answerArr = []

    let keys = arr[0].split(/\s*\|\s*/).filter(x=>x!=="")

    for (const arrElement of arr.slice(1)) {
        let [town, lat, long] = arrElement.split(/\s*\|\s*/).filter(x=>x!=="")
        let obj = {}
        obj[keys[0]] = town
        obj[keys[1]] = Number(lat)
        obj[keys[2]] = Number(long)
        answerArr.push(obj)
    }
    console.log(JSON.stringify(answerArr));
}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)