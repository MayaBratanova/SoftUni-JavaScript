let solution = (function(){


    function add(vector1, vector2) {
        return [vector1[0] + vector2[0], vector1[1] + vector2[1]]
    }
    function multiply(vector1, vector2) {
        return [vector1[0]*vector2, vector1[1]*vector2]
    }
    function length(vector1, vector2) {
        return [Math.sqrt(Math.pow(vector1) + Math.pow(vector2))]
    }
    function dot(vector1, vector2) {
        return [(vector1[0]*vector2[0] + vector1[1]*vector2[1])]
    }
    function cross(vector1, vector2) {
        return [(vector1[0]*vector2[1] + vector1[1]*vector2[0])]
    }
    return{
        add: add,
        multiply: multiply,
        length:length,
        dot:  dot,
        cross:cross
    }

})()
console.log(solution.add([1, 1], [1, 0]));