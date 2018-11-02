function find(str,word) {
    let count = 0
    let pattern = new RegExp("\\b"+ word+"\\b" , 'ig')
    let match = pattern.exec(str);
    while(match) {
        count++;
        match = pattern.exec(str);
    }

    console.log(count);
}
find('The waterfall was so high, that the child couldn’t see its peak.','the')