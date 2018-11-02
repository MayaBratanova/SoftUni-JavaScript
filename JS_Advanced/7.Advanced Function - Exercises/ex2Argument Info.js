function result() {
    //console.log(arguments);
    let map = new Map()
    let type = ''
    for (const argument of arguments) {
        type = typeof argument
        if(!map.has(type)){
            map.set(type,1)
        }
        else{
            map.set(type,map.get(type)+1)
        }
        console.log(typeof argument + ': '+ argument)
    }
    let sortedMap = new Array()

        sortedMap = Array.from(map.keys()).sort(function(a,b){
            let diff = map.get(b) - map.get(a)
            if (diff===0){
                return a.localeCompare(b)
            }
            else{
                return diff
            }

        })
    for (const el of sortedMap) {
        console.log(`${el} = ${map.get(el)}`)
    }

}
result('cat', 'cat', 42, function () { console.log('Hello world!'); });