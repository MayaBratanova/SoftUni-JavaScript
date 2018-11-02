'use strict'
function equalNeighbors(matrix) {
    let sum = 0
    let maya = 0
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            //console.log(matrix[row][col+1])
            //console.log(matrix[row].length);
            //console.log(matrix[row+1][col])
           // console.log(matrix.length);

            if (col+1<=matrix[row].length){

                matrix[row][col]==matrix[row][col+1]? sum++: maya++

            }
            if(row+1<=matrix.length-1){
                matrix[row][col] == matrix[row+1][col]?sum++:maya++
            }
        }

    }
    console.log(sum);
}
equalNeighbors([['2', '2', '5', '7','4'],
                ['4', '0', '5', '3','4'],
                ['2', '5', '5', '4','2']]


)