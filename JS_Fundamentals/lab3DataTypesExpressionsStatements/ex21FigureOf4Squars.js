function solve(input) {

    if (input == 2)
        console.log("+".repeat(3));

    else {
        console.log('+' + ('-'.repeat(input - 2)) + '+' + ('-'.repeat(input - 2)) + '+');
        for (let i = 1; i < input/2-1; i++) {
            console.log('|' + (' '.repeat(input - 2)) + '|' + (' '.repeat(input - 2)) + '|');
        }
        console.log('+' + ('-'.repeat(input - 2)) + '+' + ('-'.repeat(input - 2)) + '+');
        for (let i = 1; i < input/2-1; i++) {
            console.log('|' + (' '.repeat(input - 2)) + '|' + (' '.repeat(input - 2)) + '|');
        }
        console.log('+' + ('-'.repeat(input - 2)) + '+' + ('-'.repeat(input - 2)) + '+');

    }
}