function calculateDistance3D(array) {
    let x1 = array[0]
    let y1 = array[1]
    let z1 = array[2]

    let x2 = array[3]
    let y2 = array[4]
    let z2 = array[5]

    let distance = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2)+Math.pow(z2-z1,2))
    console.log(distance)
}
calculateDistance3D([1, 1, 0, 5, 4, 0])
