function solve(num) {
        let first = num % 10;
        while (num) {
            if (num % 10 !== first) return 'Numbers are not the same.';
            num = Math.floor(num / 10);
        }
        return 'All numbers are the same.'
}
console.log(solve(2222222));
console.log(solve(1234));