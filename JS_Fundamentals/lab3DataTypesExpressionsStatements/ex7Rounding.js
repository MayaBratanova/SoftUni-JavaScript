function solve(input) {
    let num = input[0];
    let decimal = input[1];

    if (decimal > 15) {
        decimal = 15;
    }
    num = num.toFixed(decimal);
    console.log(Number(num));
}
rounding([10.5,3])