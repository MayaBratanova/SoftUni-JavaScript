function calculateDistance(array) {
    let speed1 = array[0]
    let speed2 = array[1]
    let time = array[2]/360

    let distance1 = speed1*time*100
    let distance2 = speed2*time*100

    let finalDistance = Math.abs(distance1-distance2)
    console.log(finalDistance)
}
calculateDistance([0,60,3600])
