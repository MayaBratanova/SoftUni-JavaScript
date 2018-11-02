function listProcessor(arr) {
    let resultArr = []
    let obj = {
        add: function (arg){
            return resultArr.push(arg)
        },
        remove:function(arg){
            return resultArr = resultArr.filter(a=>a!==arg)
        } ,
        print: function (arg){
            console.log(resultArr)
        }
    }

    for (const elements of arr) {
        let [command, arg] = elements.split(' ')
        obj[command](arg)
    }
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])