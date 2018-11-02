function dayOfWeek(day) {
    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday',
                        'Saturday', 'Sunday']
    let index = daysOfWeek.indexOf(day)
    if(index<=0 || index>7){
        return 'error'
    }
    return index+1
}

console.log(dayOfWeek('Friday'));