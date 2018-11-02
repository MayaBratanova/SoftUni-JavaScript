function biggestElement(matrix) {
    let bigNumber = Number.NEGATIVE_INFINITY;
    matrix.forEach(x=>x.forEach(y=> bigNumber = Math.max(y,bigNumber)))
    console.log(bigNumber);
}
biggestElement([[3, 100, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4],
    [2,55,66,88]]
)