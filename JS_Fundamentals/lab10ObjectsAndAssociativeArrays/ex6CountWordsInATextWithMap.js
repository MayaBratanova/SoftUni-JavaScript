function countWordsWithMap(arr) {
    let myMap = new Map()
    for (const input of arr) {
        let words = input.split(/[^0-9a-zA-Z_]+/).filter(a=>a!=='')
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].toLowerCase()
        }
        for (let i = 0; i < words.length; i++) {
            if(!myMap.has(words[i])){
               myMap.set(words[i],1)
            }else{
                myMap.set(words[i],myMap.get(words[i])+1)
            }

        }
    }
    let allWords = Array.from(myMap.keys()).sort()

    for (const w of allWords) {
        console.log('\'' + w + '\'' + ' -> '+ `${myMap.get(w)}` + ' times')
    }

}
countWordsWithMap(['Far too slow, you\'re far too slow.'])