function solve(arr, str) {
    let matrix = []
    for (let i = 0; i < arr.length; i++) {
        let input = arr[i].split(' ').filter(a=>a!=='').map(Number)
        matrix[i] = (input)
    }
    for (const strElement of str) {
        let input = strElement.split(' ').filter(a=>a!=='')
        let command = input[0]
        let index = Number(input[1])

        if(command=='breeze'){
            if(index>5 || index<0){
                continue
            }
            for (let i = index; i <= index; i++) {
                for (let j = 0; j < matrix.length; j++) {
                    matrix[i][j] = matrix[i][j]-15
                    if(matrix[i][j]<0){
                        matrix[i][j] = 0
                    }

                }
            }
        }
        else if(command == 'gale'){
            if(index>5 || index<0){
                continue
            }
            for (let i = 0; i < matrix.length; i++) {
                for (let j = index; j <= index; j++) {
                    matrix[i][j] = matrix[i][j]-20
                    if(matrix[i][j]<0){
                        matrix[i][j] = 0
                    }

                }
            }
        }
        else if(command == 'smog'){
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix.length; j++) {
                    matrix[i][j] = matrix[i][j]+index
                }
            }
        }
    }
    let coordinates = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if(matrix[i][j]>=50){
                coordinates.push('[' + i + '-' + j+ ']')
            }
        }
    }
    if(coordinates.length==0){
        console.log('No polluted areas');
    }
    else{
        console.log('Polluted areas: ' + coordinates.join(', '));
    }

}
solve([
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 25"])

