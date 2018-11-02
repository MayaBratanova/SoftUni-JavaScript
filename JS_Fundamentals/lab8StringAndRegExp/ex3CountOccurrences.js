function countOccurrences(str1, str2) {
    let count = 0
    let startIndex = 0
    let length = str1.length
    while(true){
        startIndex = str2.indexOf(str1)
        if(startIndex>-1){
            count++
            str2 = str2.substr(startIndex+1)
        }
        else{
            break;
        }
    }
    console.log(count);
}
countOccurrences('ma', "Marine mammal training")