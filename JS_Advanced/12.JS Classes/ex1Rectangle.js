class Rectangle{
    constructor(width, height, color){
        this.width = width
        this.height = height
        this.color = color
    }
     calcArea(){
        return this.width * this.height
     }
}
let redRectangle = new Rectangle(4,5,'red')
console.log(redRectangle);
console.log(redRectangle.width);
console.log(redRectangle.height);
console.log(redRectangle.color);
console.log(redRectangle.calcArea());