function pyramid(base, increasement) {
    let marble = 0
    let stone = 0
    let gold = 0
    let lapis = 0
    let step = 1
    while(base>2){

        let area = base*base
        if(step%5==0){
            lapis += base*2 + base-2 + base-2
            stone += area-(base*2 + base-2 + base-2)
        }

        else {
            marble += base * 2 + base - 2 + base - 2
            stone += area - (base * 2 + base - 2 + base - 2)

        }
        base = base - 2
        step++

    }
    gold += base**2
    stone += (base*base)-(base**2)
    //Stone required: 165
    // Marble required: 112
    // Lapis Lazuli required: 8
    // Gold required: 1
    // Final pyramid height: 6
    console.log('Stone required: ' + Math.ceil(stone*increasement));
    console.log('Marble required: ' + Math.ceil(marble*increasement));
    console.log('Lapis Lazuli required: ' + Math.ceil(lapis*increasement));
    console.log('Gold required: ' + Math.ceil(gold*increasement));
    console.log('Final pyramid height: ' + Math.floor(step*increasement));
}
pyramid(11, 1)