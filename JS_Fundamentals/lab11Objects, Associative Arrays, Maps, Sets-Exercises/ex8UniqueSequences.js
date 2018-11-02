function uniqueSequences(arr) {
    let answer= new Set()
    for (const arrElement of arr) {
        let input = JSON.parse(arrElement).map(Number).sort((a,b) =>a<b)
       // console.log(input);
        answer.add(input.toString())
    }

    answer =  [...answer].sort((a, b) => a.length > b.length)
    for (const k of answer) {
        let print = k.split(',').filter(a=>a!=='')
        let answArr = print.join(', ')
        console.log('[' + answArr + ']');
    }


}
uniqueSequences(['[-3, -2, -1, 0, 1, 2, 3, 4]','[10, 1, -17, 0, 2, 13]','[4, -3, 3, -2, 2, -1, 1, 0]'])