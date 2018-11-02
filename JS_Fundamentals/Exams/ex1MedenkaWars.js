//sept 2016
function medenkaWars(input) {
    let whiteWars = []
    let darkWars = []
    let color = ''
    let count = 0
    let viktor = 0
    let nasko = 0

    for (const el of input) {
        let dates = el.split(' ').filter(a=>a!=='')
        color = dates[1]
        count = Number(dates[0])
        let damage = count*60
        if(color == 'white'){
            if(whiteWars.length>=1){
                if(damage==whiteWars[whiteWars.length-1]){
                    damage = damage*2.75
                }
                else{
                    whiteWars.push(damage)
                }
            }
            else{
                whiteWars.push(damage)
            }
            viktor+=damage
        }
        else{
            if(darkWars.length>=5){
                if(damage==darkWars[darkWars.length-1] && damage==darkWars[darkWars.length-2] && damage==darkWars[darkWars.length-3]&&
                    damage==darkWars[darkWars.length-4]&&damage==darkWars[darkWars.length-5]){
                    damage = damage*4.5
                }
                else{
                    darkWars.push(damage)
                }
            }
            else{
                darkWars.push(damage)
            }
            nasko+=damage
        }
    }

    if(viktor>nasko){
        console.log('Winner - Vitkor')
        console.log(`Damage - ${viktor}`)
    }
    else{
        console.log('Winner - Naskor')
        console.log(`Damage - ${nasko}`)
    }
}
medenkaWars(['5 white medenkas','5 dark medenkas','4 white medenkas'])