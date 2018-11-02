function solve(obj) {
    let weight = obj.weight
    let age = obj.experience
    let bloodAlc = obj.bloodAlcoholLevel
    let handsShaking = obj.handsShaking
    if(handsShaking === false){
        return obj
    }
    else{
        obj.bloodAlcoholLevel = bloodAlc + (weight*0.1)*age
        obj.handsShaking = false
        return obj
    }
}

console.log(solve({ weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true }));

// const worker = { weight: 95,
//     experience: 3,
//     bloodAlcoholLevel: 0,
//     handsShaking: false }
//
// ;
// let solve = function (objWorker) {
//     if(!objWorker.handsShaking){
//         return Object.create(objWorker);
//     }
//     let newHuman = Object.create(objWorker);
//     newHuman.bloodAlcoholLevel += 0.1*newHuman.weight*newHuman.experience;
//     newHuman.handsShaking = false;
//     return newHuman;
// };
// let result = solve(worker);
// let newObj = {};
// for (const properties in result) {
//     newObj[properties] = result[properties];
// }
// console.log(newObj);