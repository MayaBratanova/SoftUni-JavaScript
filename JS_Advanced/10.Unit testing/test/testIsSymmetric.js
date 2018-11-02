let expect = require("chai").expect
let isSymmetric = require("../ex5Check for Symmetry").isSymmetric

describe("Test group1 - is arr symmetric", function () {
    it("should be true when symmetric", function () {
        let symmetric = isSymmetric([1,2,3,3,2,1]);
        expect(symmetric).to.be.equal(true);
    })

    it("should be true when symmetric", function () {
        let symmetric = isSymmetric([-1,3,-1])
        expect(symmetric).to.be.equal(true)
    })
    it("should be true when symmetric", function () {
        let symmetric = isSymmetric([3,2,5,3,2])
        expect(symmetric).to.be.equal(false)
    })
    it("should be false when symmetric", function () {
       let symmetric = isSymmetric([3,2])
        expect(symmetric).to.be.equal(false)
    })
    it("should be true when symmetric", function () {
        let symmetric = isSymmetric([3])
        expect(symmetric).to.be.equal(true)
    })
    it("should be true when symmetric", function () {
        let symmetric = isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])
        expect(symmetric).to.be.equal(true)
    })
    it("should be false when symmetric", function () {
        let symmetric = isSymmetric([5,'hi',{a:5},new Date(),{X:5},'hi',5])
        expect(symmetric).to.be.equal(false)
    })
    it("should be false when symmetric", function () {
        let symmetric = isSymmetric(1,2,2,1)
        expect(symmetric).to.be.equal(false)
    })

})
describe("Test group2 - is input data correct", function () {
    it("should be a function", function () {
        expect(typeof isSymmetric).to.be.equal('function')

    })

})
