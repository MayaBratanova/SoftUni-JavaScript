function capitilize(str) {
    let arr = str.split(" ")
    let answer = []
    for (const arrElement of arr) {
        answer.push(arrElement.charAt(0).toUpperCase() + arrElement.slice(1).toLowerCase())
    }
    console.log(answer.join(" "));

}
capitilize('Was that Easy? tRY thIs onE for SiZe!')