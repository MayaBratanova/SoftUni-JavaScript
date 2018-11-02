function calculateVolumeAreaCone(r, h) {
    console.log('volume = ' + 1/3*Math.PI*Math.pow(r,2)*h)
    console.log('area = ' + Math.PI*r*(r+Math.sqrt(r*r+h*h)))
}
calculateVolumeAreaCone(3,5)