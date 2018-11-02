let expect = require("chai").expect;
let isOddOrEven = require("../ex2EvenOrOdd").isOddOrEven;
describe('Check datas', function () {
    it('is a function', function () {
        expect(typeof isOddOrEven).to.be.equal('function')
    })
    it('is the input even', function () {
        let outPut = isOddOrEven('Maya')
        expect(outPut).to.be.equal('even')
    })
    it('is the input odd', function () {
        let outPut = isOddOrEven('May')
        expect(outPut).to.be.equal('odd')
    })
    it('is the input odd', function () {
        let outPut = isOddOrEven(8)
        expect(outPut).to.be.equal(undefined)
    })
})