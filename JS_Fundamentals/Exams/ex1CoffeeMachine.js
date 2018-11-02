function solve(arr) {
    let total = 0;
    for (const arrElement of arr) {
        let data = arrElement.split(', ')
        let money = +data[0];
        let poison = data[1];
        let lastElement = typeof(data[data.length-1]);
        let sugar = data[data.length-1];
        let result = 0;
        if(sugar!=='0'){
            result+=0.10;
        }
        let kindOfCoffee;

        if(poison==="coffee"){
            kindOfCoffee = data[2];
            if(kindOfCoffee==="caffeine"){
                if(data.length === 5){
                    let firstResult = Math.ceil(0.80 * 0.1)/10;
                    result+=firstResult+0.80;
                }
                else {
                    result+=0.80;
                }
            }
            else if(kindOfCoffee==="decaf"){
                if(data.length === 5){
                    let firstResult = Math.ceil(0.90 * 0.1)/10;
                    result+=firstResult+0.90;
                }
                else {
                    result+=0.90;
                }
            }

        }
        else if(poison==="tea"){
            if(data.length === 4){
                let firstResult = Math.ceil(0.80 * 0.1)/10
                result+=firstResult+0.80;
            }
            else {
                result+=0.80;
            }
        }

        if(result<=money){
            console.log(`You ordered ${poison}. Price: ${result.toFixed(2)} Change: ${(money-result).toFixed(2)}`)
            total+=result;
        }
        else{
            console.log(`Not enough money for ${poison}. Need ${(result-money).toFixed(2)} more`)
        }
}

console.log(`Income Report: ${total.toFixed(2)}`)
}
solve(['8.00, coffee, decaf, milk, 0',
    '1.00, tea, milk, 2',
    '8.00, coffee, decaf, milk, 4',
    '8.00, coffee, decaf, milk, 4'])