function bitcoinMining(arr) {
    let goldPrice = 67.51
    let coinPrice = 11949.16
    let sum = 0
    let firstDate = 100000000
    let coinCount = 0
    let count = 0
    let totalCoin = 0
    for (let i = 0 ; i < arr.length; i++) {
        count++
        if((count%3)==0){
            arr[i] = parseFloat(arr[i])*0.7
        }
        sum += parseFloat(arr[i])*goldPrice
        if(sum>=coinPrice){
            coinCount = Math.floor(sum/coinPrice)
            sum = sum - coinCount*coinPrice
            totalCoin +=coinCount
            if(totalCoin>=1 && firstDate>=i+1){
                firstDate = i+1
            }
        }
    }
    console.log(`Bought bitcoins: ${totalCoin}`)
    if(totalCoin>=1)console.log(`Day of the first purchased bitcoin: ${firstDate}`)
    console.log(`Left money: ${sum.toFixed(2)} lv.`)
}
bitcoinMining(['100', '200', '300'])