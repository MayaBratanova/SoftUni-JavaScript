function expedition(mat1, mat2, arr, pass) {
    for (const argument of arr) {
        let i = Number(argument[0])
        let j = Number(argument[1])
        let length = 0
        for (const argumentElement of mat1) {
             length= argumentElement.length
        }
        if(i>=mat1.length && j>=length){
            continue
        }
       // console.log(mat1.length);
      //  console.log(length);
        for (let k = 0; k < mat2.length; k++) {
            for (let l = 0; l <mat2.length; l++) {
                if(i+k>=mat1.length || j+l>=length){
                    continue
                }
                if(mat2[k][l] == 0){
                    mat1[i+k][j+l] = mat1[i+k][j+l]
                    //console.log(mat1);
                }
                else if(mat2[k][l] == 1 && mat1[i+k][j+l]==1 ){
                    mat1[i+k][j+l] = 0
                    //console.log(mat1);
                }
                else if(mat2[k][l] == 1 && mat1[i+k][j+l]==0 ){
                    mat1[i+k][j+l] = 1
                    //console.log(mat1);
                }

            }

        }

    }
    let x = pass[0]
    let y = pass[1]
    let count = 0
    let length = mat1[0].length
    while(true) {
        for (let i = x; i <= x; i++) {
            for (let j = y; j <= y; j++) {
                // if(i-1>=0 && i+1<mat1.length && j-1>=0 && j+1<length) {
                if (mat1[i - 1][j] === 0) {
                    x = i - 1
                    y = j
                    count++
                    if (x === mat1.length || y === length) {
                        console.log(count);
                        console.log('Bottom');
                        break
                    }

                }
                else if (mat1[i + 1][j] === 0) {
                    x = i + 1
                    y = j
                    count++
                    if (x === mat1.length || y === length) {
                        console.log(count);
                        console.log('Bottom');
                        break
                    }

                }
                else if (mat1[i][j - 1] === 0) {
                    x = i
                    y = j - 1
                    count++
                    if (x === mat1.length || y === length) {
                        console.log(count);
                        console.log('Bottom');
                        break
                    }

                }
                else if (mat1[i][j + 1] === 0) {
                    x = i
                    y = j + 1
                    count++
                    if (x === mat1.length || y === length) {
                        console.log(count);
                        console.log('Bottom');
                        break
                    }

                }
                else {

                }
            }
        }
    }

}
expedition([[1, 1, 0, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 0, 1],
           [0, 0, 0, 1, 1, 0, 0, 1],
           [1, 0, 0, 1, 1, 1, 1, 1],
           [1, 0, 1, 1, 0, 1, 0, 0]],
           [[0, 1, 1],
           [0, 1, 0],
           [1, 1, 0]],
    [[1, 1],
        [2, 3],
        [5, 3]],
    [1, 2]
)