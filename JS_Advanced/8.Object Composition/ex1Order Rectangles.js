function compareRect(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = {
          width: arr[i][0],
          height : arr[i][1],
          area:
          function (){
              return this.width*this.height
          },
          compareTo:function (other) {
              let result =  other.area() - this.area()
              return result||(other.width - this.width)

          }
      }

    }
    arr.sort((a,b)=>a.compareTo(b))
    return arr
}

console.log(compareRect([[10, 5], [3, 20], [5, 12]]));