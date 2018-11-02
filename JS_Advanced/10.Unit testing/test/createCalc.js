let expect = require("chai").expect;
let createCalculator = require("../ex7AddSubstract").createCalculator;
describe("Test correct data", function () {
    it("is a function", function () {
        expect(typeof createCalculator).to.be.equal(('function'))
    })
    it("is a correct Data", function () {
        let obj = createCalculator()
        let answer = obj.get()
        expect(answer).to.be.equal(0)
    })
    it("is a correct Data", function () {
        let obj = createCalculator()
        obj.add(5)
        let answer = obj.get()
        expect(answer).to.be.equal(5)
    })
    it("is a correct Data", function () {
        let obj = createCalculator()
        obj.add(5)
        obj.subtract(2)
        let answer = obj.get()
        expect(answer).to.be.equal(3)
    })
    it("is a correct Data", function () {
        let obj = createCalculator()
        obj.add([])
        let answer = obj.get()
        expect(answer).to.be.equal(0)
    })
})