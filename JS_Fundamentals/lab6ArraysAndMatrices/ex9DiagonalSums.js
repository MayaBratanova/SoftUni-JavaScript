function matrixDiagonals(matrix) {
    let sumDiafonalFirst = 0
    let sumDiagonalSecond = 0
    let answer = []
    for (let row = 0; row < matrix.length; row++) {
        for (let col = row; col <= row; col++) {
            sumDiafonalFirst += matrix[row][col]
        }
    }
    answer.push(sumDiafonalFirst)
    let help = 0
    for (let row = matrix.length-1; row >= 0; row--) {
        sumDiagonalSecond += matrix[row][matrix[row].length-1-row]

    }
    answer.push(sumDiagonalSecond)
    console.log(answer.join(" "));


}
matrixDiagonals([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
)