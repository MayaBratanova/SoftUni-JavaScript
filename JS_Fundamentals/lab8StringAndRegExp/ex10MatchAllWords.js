function matchAllWords(str) {
    let text = str.split(/\W+/).filter(x=>x!=="")
    console.log(text.join("|"));
}
matchAllWords('_(Underscores) are also word characters')