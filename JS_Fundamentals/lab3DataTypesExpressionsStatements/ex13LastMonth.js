function lastMonth(array) {
    let date = new Date(array[2], array[1]-1, 0).getDate()
    console.log(date)

}
lastMonth([17, 3, 2002])