function solve(arr) {
    let money = []
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        if (current.length === 1) {
            let banknote = Number(current[0])
            let count = money.filter(x => x === banknote).length
            console.log(`Service Report: Banknotes from ${banknote} lv. in the ATM are ${count}!`)
        } else if (current.length === 2) {
            let balance = Number(current[0])
            let withdraw = Number(current[1])
            let total = 0
            money = sort(money)
            if (withdraw <= balance) {
                if (money.length > 0) {
                    if (money.reduce((a, b) => a + b) >= withdraw) {
                        let index = 0
                        while(total < withdraw) {
                            if (money[index] <= withdraw && total + money[index] <= withdraw) {
                                total += money[index]
                                money.splice(index, 1)
                                index--
                            }
                            index++
                        }
                        console.log(`You get ${total} lv. Your card balance is ${balance - withdraw}. Thank you!`)
                    } else {
                        console.log('ATM machine is out of order!')
                    }
                } else {
                    console.log('ATM machine is out of order!')
                }

            } else {
                console.log(`There is not enough money in your account. Your current balance is ${balance}.`)
            }
        } else {
            let sum = current.reduce((a, b) => a + b)
            money = money.concat(current)
            money = money.sort()
            console.log(`Service Report: The ATM machine is loaded with ${sum}. Current balance is ${money.reduce((a, b) => a + b)}.`)
        }

    }

    function sort (arr) {
        return arr.sort((a, b) => b - a)
    }
}


/*
test array length = 1
    - with quantity of 0
    - with quantity > 0
    - after removal - 0
    - after adding > 0
test array length = 2
    - enough balance, not enough in ATM
    - enough balance, enough in ATM
    - not enough balance, not enough in ATM
    - not enough balance, enough in ATM
test array length > 2
    - once in beginning
    - twice in whole input
*/
solve([[20, 5, 100, 20, 1],
        [457, 25],
        [1],
        [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
        [20, 85],
        [5000, 4500],
    ]

)