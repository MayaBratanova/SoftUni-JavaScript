function extractText(str) {
    let startIndex = 0
    let endIndex = 0
    let helper = []
    while (true){
        startIndex = str.indexOf('(')
        endIndex = str.indexOf(')')
        if(startIndex>-1 && endIndex>-1 && startIndex<endIndex){
            helper.push(str.substring(startIndex+1,endIndex))

        }else{
            break
        }
        str = str.substr(endIndex+1)
    }
    console.log(helper.join(', '));
}
extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)')