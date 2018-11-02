function calculation(array) {
    aggregate (array, 0, (a,b) =>a+b)
    aggregate(array, 0, (a,b)=>a+1/b)
    aggregate(array, '', (a,b)=>a+b)

    function aggregate(arr, initialVal, func) {
        let val = initialVal
        for (let i = 0; i < arr.length; i++) {
           val = func(val,arr[i])
        }
        console.log(val)

    }

}
calculation([1,2,3])