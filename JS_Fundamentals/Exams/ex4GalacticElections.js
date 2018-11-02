//не е решена 18.06.2017
function solve(arr) {
    let myMap = new Map()
    let sumMap = new Map()
    let sum = 0
    let answerMap = new Map()
    for (const obj of arr) {

        let system = obj.system
        let candidate = obj.candidate
        let votes = Number(obj.votes)
        sum+=votes
        if(!myMap.has(system)){
            myMap.set(system, new Map())
            myMap.get(system).set(candidate,votes)
            sumMap.set(system,0)
            answerMap.set(system,0)
        }
        else if(myMap.has(system) && myMap.get(system).has(candidate)){
            let currentSum = myMap.get(system).get(candidate)
            myMap.get(system).set(candidate, currentSum+votes)
        }
        else if(myMap.has(system) && !myMap.get(system).has(candidate)){
            myMap.get(system).set(candidate,votes)
        }
        sumMap.set(system, sumMap.get(system) + votes)

    }
    let sortedSumMap = Array.from(sumMap.keys()).sort((a,b) => sumMap.get(b)-sumMap.get(a))
  //  console.log(myMap);
   // console.log(sortedSumMap);
   //console.log(sumMap);

    let sortedArray = []
    for (const [key, value] of myMap) {
        sortedArray = Array.from(value.keys()).sort((a,b)=>{
            return value.get(b) - value.get(a)
        })

     //   console.log(sortedArray)
        answerMap.set(key, sortedArray)
    }
   // console.log('answerArr');
   // console.log(answerMap);
    let halfVotes = sum/2
    let sort = []
    if(sumMap.get(sortedSumMap[0])>(90*sum)/100){
        console.log(`${answerMap.get(sortedSumMap[0])[0]} wins with ${sum} votes`)
        console.log(`${answerMap.get(sortedSumMap[0])[0]} wins unopposed!`)
    }
    else if(sumMap.get(sortedSumMap[0])>halfVotes){
        console.log(`${answerMap.get(sortedSumMap[0])[0]} wins with ${sumMap.get(sortedSumMap[0])} votes`)
        console.log(`Runner up: ${answerMap.get(sortedSumMap[0])[1]}`)

       // console.log(sort);
    }
    else{
        let firstPercent = Math.floor((sumMap.get(sortedSumMap[0])/sum)*100)
        let secondPercent = Math.floor((sumMap.get(sortedSumMap[1])/sum)*100)

        console.log(`Runoff between ${answerMap.get(sortedSumMap[0])[0]} with ${firstPercent}% and ${answerMap.get(sortedSumMap[0])[1]} with ${secondPercent}%`)
    }

}
solve([ { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 200 },
    { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
    { system: 'Tau',   candidate: 'Space Cow',     votes: 15 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 60 },
    { system: 'Tau',   candidate: 'Flying Shrimp', votes: 150 } ]


)