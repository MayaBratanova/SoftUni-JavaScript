function inVolume(array) {
    let [x1,x2,y1,y2,z1,z2] = [10,50,20,80,15,50]
    for (let i = 0; i < array.length; i+=3) {
        let [x,y,z] = [array[i], array[i+1], array[i+2]]
        if((x>=x1 && x<=x2)&& (y>=y1 && y<=y2) && (z>=z1 && z<=z2)){
            console.log('inside')
        }
        else{
            console.log('outside')
        }
    }
}
inVolume([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43]
)