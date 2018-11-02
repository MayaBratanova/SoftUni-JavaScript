function expressionSplit(str) {
    let text = str.split(/[\s(),.;\t]/).filter(x=>x!=="")
    console.log(text.join("\n"));
}
expressionSplit('let sum = 4 * 4,b = "wow";')

