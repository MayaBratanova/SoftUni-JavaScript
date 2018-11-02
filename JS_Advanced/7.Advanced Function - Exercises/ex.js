let manager = (function () {
    let robot = {'carbohydrate':0, 'flavour':0, 'fat':0,'protein':0}
    return function (str) {
        let input = str.split(' ')
        switch (input[0]){
            case 'restock': robot[input[1]]= robot[input[1]] + Number(input[2])
                return ('Success')

            case 'prepare': cook(input[1], input[2])

            case 'report': report()

        }


        function cook(food, quantity) {
            let quant = Number(quantity)
            switch (food){
                case 'apple': robot.carbohydrate= robot.carbohydrate - quant;
                              robot.flavour= robot.flavour - (quant*2)
                    check()

                case'coke':

                    robot.carbohydrate= robot.carbohydrate-(quant*10)
                    robot.flavour= robot.flavour - (quant*20)
                    check()

                case'burger ': robot.carbohydrate= robot.carbohydrate-(quant*5)
                    robot.fat = robot.fat - (quant*7)
                    robot.flavour= robot.flavour - (quant*3)
                    check()

                case'omelet ': robot.protein = robot.protein-(quant*5)
                    robot.fat = robot.fat- (quant*1)
                    robot.flavour= robot.flavour- (quant*1)
                    check()

                case'cheverme  ': robot.protein = robot.protein -(quant*10)
                    robot.carbohydrate= robot.carbohydrate- (quant*10)
                    robot.flavour= robot.flavour- (quant*10)
                    check()

            }
        }
        function check() {
            if(robot.carbohydrate>0 && robot.flavour>0 && robot.fat>0 && robot.protein>0){
                return('Success')
            }
            else if(robot.flavour<=0){
                return('Error: not enough flavour in stock');
            }
            else if(robot.fat<=0){
                return('Error: not enough fat in stock');
            }
            else if(robot.protein<=0){
                return('Error: not enough protein in stock');
            }
            else if(robot.carbohydrate<=0){
                return('Error: not enough carbohydrate in stock');
            }
        }
        function report() {
            return(`protein=${robot.protein} carbohydrate=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavour}`);
        }
    }
})()
//console.log(manager("restock flavour 50"));
console.log(manager("prepare coke 4"));
