function convertGradsToDegrees(num) {
    let result = num*0.9
    if(result<0){
        result = 360+result
    }
    else if(result>=360){
        result = result%360

    }
    console.log(result)
}
convertGradsToDegrees(-15)