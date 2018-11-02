function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}
let obj = createCalculator()
//obj.add(3)
obj.add([])
//obj.subtract({})
console.log(obj.get());
module.exports = {createCalculator}