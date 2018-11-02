function validationRegex(str) {
    let pattern = /^[a-zA-Z0-9]+\@[a-z]+\.[a-z]+$/
    if(pattern.test(str)==true){
        console.log('Valid');
    }
    else{
        console.log('Invalid');
    }
}
validationRegex('invalid@emai1.bg')