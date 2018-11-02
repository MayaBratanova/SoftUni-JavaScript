let expect = require("chai").expect;
let sum = require("../ex4Sum of Numbers.js").sum;

describe("sum(arr) - sum array of numbers", function () {
    it ("should return 3 for [1,2]", function () {
        let expectedSum = 3;
        let actualSum = sum([1, 2]);
        expect(actualSum).to.be.equal(expectedSum);
    }) ;
    it ("should return -2 for [-2]", function () {
        let expectedSum = -2;
        let actualSum = sum([-2]);
        expect(actualSum).to.be.equal(expectedSum);
    }) ;
    it ("should return 0 for []", function () {
        let expectedSum = 0
        let actualSum = sum([])
        expect(actualSum).to.be.equal(expectedSum)
    });

});

