function convertImperialUnits(num) {
    let result = num%12
    let result2 = (num - result)/12
    console.log(`${result2}'-${result}"`)
}
convertImperialUnits(55)