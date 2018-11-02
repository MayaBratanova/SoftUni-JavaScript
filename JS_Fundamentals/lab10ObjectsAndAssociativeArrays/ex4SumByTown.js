function sumByTown(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i+=2) {
        let town = arr[i]
        let income = Number(arr[i+1])
        if(!obj.hasOwnProperty(town)){
            obj[town] = income
        }
        else{
            obj[town]+=income
        }
    }
    console.log(JSON.stringify(obj));
}
sumByTown(['Sofia','20','Varna','3','Sofia','5','Varna','4'])