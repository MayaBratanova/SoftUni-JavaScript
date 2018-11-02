function typeOfNumber(num) {
    if(Math.abs(num)%2===0){
        console.log('even')
    }
    else if(Math.abs(num)%2===1){
        console.log('odd')
    }
    else{
        console.log('invalid')
    }
}
typeOfNumber(-3)