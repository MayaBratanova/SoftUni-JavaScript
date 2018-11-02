function roadRadar(array) {
    let community = array[1]
    let speedCurrent = array[0]
    let speed = 0;
    switch (community){
        case 'residential': speed = 20
        break;
        case 'city': speed = 50
            break;
        case 'interstate': speed = 90
            break;
        case 'motorway': speed = 130
            break;
    }
    if(community=='residential' && speedCurrent<=speed){

    }
    else if(community=='residential' && speedCurrent>speed){
        compareSpeed(speedCurrent,speed)
    }
    if(community=='city' && speedCurrent<=speed){

    }
    else if(community=='city' && speedCurrent>speed){
        compareSpeed(speedCurrent,speed)
    }
    if(community=='interstate' && speedCurrent<=speed){

    }
    else if(community=='interstate' && speedCurrent>speed){
        compareSpeed(speedCurrent,speed)
    }
    if(community=='motorway' && speedCurrent<=speed){

    }
    else if(community=='motorway' && speedCurrent>speed){
        compareSpeed(speedCurrent,speed)
    }
function compareSpeed(speedCurrent, speed){
        if(speedCurrent<=speed+20){
            console.log('speeding');
        }
        else if(speedCurrent<=speed+40){
            console.log('excessive speeding');
        }
        else {
            console.log('reckless driving');
        }
    }
}
roadRadar([40, 'city'])