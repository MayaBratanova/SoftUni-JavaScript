function cookingNumbers(array) {
    let number = Number(array[0])
   
    for (let i = 1; i < array.length; i++) {
        let func = array[i]
        if (func=='chop'){
            number = number/2
            console.log(number)
        }
        else if(func=='dice'){
            number = Math.sqrt(number)
            console.log(number)
        }
        else if(func == 'spice'){
            number = number+1
            console.log(number)
        }
        else if(func == 'bake'){
            number = number*3
            console.log(number)
        }
        else if(func == 'fillet'){
            number = number-number*0.2
            console.log(number)
        }

    }
}
cookingNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])