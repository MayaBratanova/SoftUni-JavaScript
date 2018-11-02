function lost(str, text) {
    let patternNorth = /(north)[\s\S]*?([0-9]{2})[^,]*?,[^,]*?([0-9]{6})/gim
    let patternEast = /(east)[\s\S]*?([0-9]{2})[^,]*?,[^,]*?([0-9]{6})/gim
    let matchesNorth = text.match(patternNorth)
    let matchNorth = patternNorth.exec(matchesNorth[matchesNorth.length-1])
    let northAnswer = `${matchNorth[2]}` + '.' + `${matchNorth[3]}` + ' N'
    console.log(northAnswer);
    let matchesEast = text.match(patternEast)
    let matchEast = patternEast.exec(matchesEast[matchesEast.length-1])
    let eastAnswer = `${matchEast[2]}` + '.' + `${matchEast[3]}` + ' E'
    console.log(eastAnswer);
    let pattern = new RegExp(str + "(.*)" + str, "gm")
    let words = pattern.exec(text)[1]
    console.log("Message: " + words);
}
lost('4ds',
    'eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532\n')