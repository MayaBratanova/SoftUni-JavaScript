function tresureLocator(arr) {
    let tuvalu = { x1:1, y1:1, x2:3, y2:3,name:'Tuvalu'}
    let tonga = {x1:0, y1:6, x2:3, y2:8, name:'Tonga'}
    let tokelau = {x1:8, y1:0, x2:9, y2:1, name:'Tokelau'}
    let samoa = {x1:5, y1:3, x2:7, y2:6, name:'Samoa'}
    let cook = {x1:4, y1:7, x2:9, y2:8, name:'Cook'}
    for (let i = 0; i < arr.length; i+=2) {
        let [x, y] = [arr[i], arr[i+1]]
        if((tuvalu.x1<=x && tuvalu.x2>=x)&&(tuvalu.y1<=y && tuvalu.y2>=y)){
            console.log(tuvalu.name)
        }
        else if((tonga.x1<=x && tonga.x2>=x)&&(tonga.y1<=y && tonga.y2>=y)){
            console.log(tonga.name)
        }
        else if((tokelau.x1<=x && tokelau.x2>=x)&&(tokelau.y1<=y && tokelau.y2>=y)){
            console.log(tokelau.name)
        }
        else if((samoa.x1<=x && samoa.x2>=x)&&(samoa.y1<=y && samoa.y2>=y)){
            console.log(samoa.name)
        }
        else if((cook.x1<=x && cook.x2>=x)&&(cook.y1<=y && cook.y2>=y)){
            console.log(cook.name)
        }
        else{
            console.log('On the bottom of the ocean')
        }
    }

}
tresureLocator([4, 2, 1.5, 6.5, 1, 3])