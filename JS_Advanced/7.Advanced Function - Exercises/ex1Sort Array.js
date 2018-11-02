function solve(arr, string) {
    let variable = string
    if(variable==='asc'){
        let newArr = arr.sort(function(a, b) {
            return a - b
        })
        return newArr
    }
    else if(variable==='desc'){
        let newArr = arr.sort(function(a, b) {
            return b-a

        })
        return newArr
    }
}
solve([14, 7, 17, 6, 8], 'asc');