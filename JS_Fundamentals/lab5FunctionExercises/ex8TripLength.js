function tripLength(arr) {

    let [x1,y1,x2,y2,x3,y3] = [arr[0], arr[1],arr[2],arr[3],arr[4],arr[5]]
    let a = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))
    let b = Math.sqrt(Math.pow(x3-x1,2)+Math.pow(y3-y1,2))
    let c = Math.sqrt(Math.pow(x3-x2,2)+Math.pow(y3-y2,2))
    let m = Math.sqrt(a*a+b*b)
    let distance = 0
    if(a<=c && c>=b){
        distance = a+b
        console.log(`2->1->3: ${distance}`)
    }
    else if(a<=b && c<=b){
        distance = a+c
        console.log(`1->2->3: ${distance}`)
    }
    else if(b<=a && c<=a){
        distance = b+c
        console.log(`1->3->2: ${distance}`)
    }
}

tripLength([-1, -2, 3.5, 0, 0, 2])