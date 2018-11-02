let manager = function(str){
    let workCook = (function () {
        let robot = {'carbohydrate':0, 'flavour':0, 'fat':0,'protein':0}
        let input = str.split(' ')

            switch (input[0]){
        case 'restock': robot[input[1]]= robot[input[1]] + Number(input[2])
            console.log('Success')
            break;
        case 'prepare': cook(input[1], input[2])
            break;
        case 'report': report()
            break;
        }
        function cook(food, quantity) {
            let quant = Number(quantity)
            switch (food){
                case 'Apple': robot.carbohydrate - (quant*1)
                    robot.flavour - (quant*2)
                    check()
                    break;
                case'Coke': robot.carbohydrate-(quant*10)
                    robot.flavour - (quant*20)
                    check()
                    break;
                case'Burger ': robot.carbohydrate-(quant*5)
                    robot.fat - (quant*7)
                    robot.flavour - (quant*3)
                    check()
                    break;
                case'Omelet ': robot.protein-(quant*5)
                    robot.fat - (quant*1)
                    robot.flavour - (quant*1)
                    check()
                    break;
                case'Cheverme  ': robot.protein-(quant*10)
                    robot.carbohydrate - (quant*10)
                    robot.flavour - (quant*10)
                    check()
                    break;
            }
        }
        function check() {
            if(robot.carbohydrate>0 && robot.flavour>0 && robot.fat>0 && robot.protein>0){
                console.log('Success')
            }
            else{
                console.log('Error: not enough protein in stock');
            }
        }
        function report() {
            console.log(`protein=${robot.protein} carbohydrate=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavour}`);
        }

    })()


}


(manager("restock carbohydrate 10"));
(manager("restock flavour 10"));
(manager("prepare apple 1"));
(manager("restock fat 10"));
(manager("prepare burger 1"));
(manager("report"));






