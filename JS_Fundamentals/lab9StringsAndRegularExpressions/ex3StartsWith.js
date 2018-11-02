function starts(str, substring) {
    let pattern = `${substring}`
    let answer = str.match(pattern)
   // console.log(answer);
    if(str.match(pattern)){
        console.log('true');
    }else{
        console.log('false');
    }

}
starts('Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta')