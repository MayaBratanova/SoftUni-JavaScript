function solve(arr) {
    let trip = new Map()
    for (const el of arr) {
        let input = el.split(' > ')
        let country = input[0]
        let town = input[1]
        town = town[0].toUpperCase()+town.slice(1)
        let price = Number(input[2])
        if(!trip.has(country)){
            trip.set(country, new Map())
            trip.get(country).set(town, price)
        }
        else{
            if(!trip.get(country).has(town)){
                trip.get(country).set(town, price)
            }
            else{
                let currentPrice = trip.get(country).get(town)
                if(currentPrice>price){
                    trip.get(country).set(town, price)
                }
            }
        }
    }
    let sort = [...trip].sort((a,b)=>a>b)
    // console.log(sort);
    for (const [k,v] of sort) {
        //console.log(v);
        let secondSort = [...v].sort((a,b)=>{
            let res = a[0] - b[0]
            return res
        })
        let result = [];
        result.push(`${k} ->`);
        for (const [k2, v2] of secondSort) {
            result.push(`${k2} -> ${v2}`);
        }
        console.log(result.join(" "));

    }



}

solve(['Bulgaria > sofia > 500',
    'Bulgaria > sopot > 800',
    'Bulgaria > Paris > 2000',
    'Albania > tirana > 1000',
    'Bulgaria > Sofia > 200']
)