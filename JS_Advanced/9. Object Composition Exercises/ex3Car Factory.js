function declareCar(oldCar) {

    let mod = oldCar.model
    let power = oldCar.power
    let newPower = 0
    let volume = 0
    if(power<=90){
         newPower = 90
         volume = 1800
    }
    else if(power<=120){
        newPower = 120
        volume = 2400
    }
    else if(power<=200){
        newPower = 200
        volume = 3500
    }

    let wheelsize = oldCar.wheelsize
    if(wheelsize%2===0){
        wheelsize=wheelsize-1
    }
    console.log(wheelsize);


    let obj = { model: `${oldCar.model}`,
        engine: { power: newPower,
                  volume: volume },
        carriage: { type: oldCar.carriage,
            color: oldCar.color },
        wheels: [wheelsize,wheelsize,wheelsize,wheelsize]
    }
    return obj

}

console.log(declareCar({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
));

// let car = {
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
// };
// let solve = function (carObj) {
//     let small = { power: 90, volume: 1800 };
//     let normal = { power: 120, volume: 2400 };
//     let monster = { power: 200, volume: 3500 };
//     let hatchback = { type: 'hatchback', color: carObj.color};
//     let coupe = { type: 'coupe', color: carObj.color};
//
//     let newCar = {model: carObj.model};
//     if(carObj.power<=90){
//         newCar.engine = small;
//     }else if(carObj.power<=120){
//         newCar.engine = normal;
//     }else{
//         newCar.engine = monster;
//     }
//     if(carObj.carriage='hatchback'){
//         newCar.hatchback = hatchback;
//     }else{
//         newCar.hatchback = monster;
//     }
//     if(carObj.wheelsize%2===0){
//         newCar.wheelsize = (function(){
//             let arr = [];
//             for (let i = 0; i < 4; i++) {
//                 arr.push(carObj.wheelsize-1);
//             }
//             return arr;
//         })();
//
//     }
//     return newCar;
//
// }
// console.log(solve(car));