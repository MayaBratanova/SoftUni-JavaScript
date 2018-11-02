function magicMatrices(matrix) {
    let sum = 0
    let helper = []
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            sum +=matrix[row][col]
        }
        helper.push(sum)

        sum = 0
    }
    let col = 0
    for (let i = 0; i <= col; i++) {
        for (let row = 0; row < matrix.length; row++) {
            sum += matrix[row][i]
        }
        helper.push(sum)
        sum = 0
        col++
        if(col>=matrix.length){
            break
        }
        else{
            continue
        }
    }
    let isTrue = false
    for (let i = 0; i < helper.length-1; i++) {
        if(helper[i]===helper[i+1]){
            isTrue = true

        }else{
            isTrue = false

        }
    }
    if(isTrue==true){
        console.log('true')
    }else{
        console.log('false')
    }


}
magicMatrices([[4,5,6],[6,5,4],[5,5,5]])