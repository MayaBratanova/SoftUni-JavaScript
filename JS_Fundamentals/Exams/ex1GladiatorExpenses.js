function solve(loses,a,b,c,d) {
    let lose = parseFloat(loses)
    let helmet = parseFloat(a)
    let sword = parseFloat(b)
    let shield = parseFloat(c)
    let armor = parseFloat(d)

    let helmetBroken =Math.floor(lose/2)*helmet
    let swordBroken = Math.floor(lose/3)*sword
    let shieldBroken = Math.floor(lose/6)*shield
    let armorBroken = Math.floor(lose/12)*armor
    let sum = helmetBroken + swordBroken + shieldBroken + armorBroken
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);

}
solve(7,
2,
3,
4,
5
)