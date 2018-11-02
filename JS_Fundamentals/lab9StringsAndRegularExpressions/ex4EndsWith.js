function endsWith(str, substring) {
    let pattern = `${substring}`
    if(str.endsWith(pattern)){
        console.log('true');
    }
    else{
        console.log('false');
    }
}
endsWith('This sentence ends with fun?','with')