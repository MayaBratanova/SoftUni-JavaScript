function programmer(arrFood, arrCommand) {
    let count = 0

    for (const arrFoodElement of arrCommand) {
        if(arrFood.length==0){
                break;
        }
        let command = arrFoodElement.split(' ').filter(a=>a!=='')[0]
        if(command =="Serve"){
            let a = arrFood.pop()
            console.log(a + ' served!');
            if(arrFood.length==0){

                break
            }
        }
        else if(command=='Eat'){
            let a = arrFood.shift()
            console.log(a+ ' eaten');
            count++
            if(arrFood.length==0){

                break
            }
        }
        else if(command=='Add'){
            if(arrFoodElement.split(' ').filter(a=>a!=='').length==1){
                continue
            }
            else {
                let newFood = arrFoodElement.split(' ').filter(a => a !== '')[1]
                arrFood.unshift(newFood)
            }
        }
        else if(command=='Consume'){
            let startIndex = arrFoodElement.split(' ').filter(a=>a!=='')[1]
            let endIndex = arrFoodElement.split(' ').filter(a=>a!=='')[2]
            if (startIndex<0 || endIndex-1>arrFood.length|| startIndex>endIndex || startIndex-1>arrFood.length|| endIndex<0){
                continue
            } else{
                arrFood.splice(startIndex,(endIndex-startIndex)+1)
                console.log('Burp!')
                count+=endIndex-startIndex+1
                if(arrFood.length==0){

                    break
                }
            }

        }
        else if(command=='Shift'){
            let startIndex = arrFoodElement.split(' ').filter(a=>a!=='')[1]
            let endIndex = arrFoodElement.split(' ').filter(a=>a!=='')[2]
            if (startIndex<0 || endIndex-1>arrFood.length|| startIndex>endIndex || startIndex>arrFood.length|| endIndex<0) {
                continue
            }
            else {
                let first = arrFood[startIndex]
                let second = arrFood[endIndex]
                arrFood[startIndex] = second
                arrFood[endIndex] = first
            }

        }
        else if(command == 'End'){
            break
        }
        else{
            continue
        }

    }
    if(arrFood.length==0){
        console.log('The food is gone');
        console.log('Meals eaten: ' + count)
    }
    else{
        console.log('Meals left: ' +  arrFood.join(', '));
        console.log('Meals eaten: ' + count)
    }

}
programmer([],
['Consume 0 2','Eat','Eat','Shift 0 1','End', 'Eat']

)