function countWords(arr) {
    let obj = {}
    for (const input of arr) {
        let words = input.split(/[^0-9a-zA-Z_]+/).filter(a=>a!=='')
        for (let i = 0; i < words.length; i++) {
            if(!obj.hasOwnProperty(words[i])){
                obj[words[i]] = 1
            }
            else{
                obj[words[i]]++
            }
        }

    }
    console.log(JSON.stringify(obj));

}
countWords(['Far too slow, you\'re far too slow.'])