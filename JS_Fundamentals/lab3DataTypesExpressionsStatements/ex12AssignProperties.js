function assignProperties(array) {
    let object = new Object()
    object[array[0]] = array[1]
    object[array[2]] = array[3]
    object[array[4]] = array[5]
    return object
    // let first = array[0]
    // let second = array[1]
    // let obj = {first:second}
    //
    // console.log(obj);
}
console.log(assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']))