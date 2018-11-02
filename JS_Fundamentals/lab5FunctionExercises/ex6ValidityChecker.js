function distance(array) {
    let [x1, y1, x2, y2] = [array[0], array[1], array[2], array[3]]
    let a = Math.sqrt(Math.pow(x1-0,2)+Math.pow(y1-0,2))
    print(a, x1, y1, 0,0)
    let b = Math.sqrt(Math.pow(x2-0,2)+Math.pow(y2-0,2))
    print(b, x2,y2,0,0)
    let c = Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2))
    print(c,x1,y1,x2,y2)
    function print(num, x1,y1,x2,y2) {
        if(num === parseInt(num,10)){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        }
        else{
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
}
distance([2,1,1,1])