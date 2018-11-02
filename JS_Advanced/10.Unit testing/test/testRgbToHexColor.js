let expect = require("chai").expect;
let rgbToHexColor = require("../ex6RGB to Hex").rgbToHexColor;
describe("rgbToHexColor", function () {
    it("is a function", function () {
        expect(typeof rgbToHexColor).to.be.equal(('function'))
    })
    it("correct input data", function () {
        let hexadecimal = rgbToHexColor(20,30,40)
        expect(hexadecimal).to.be.equal('#141E28')
    })
    it("correct input data", function () {
        let hexadecimal = rgbToHexColor(20,30,'blue')
        expect(hexadecimal).to.be.equal(undefined)
    })
    it("correct input data", function () {
        let hexadecimal = rgbToHexColor(20,30,-1)
        expect(hexadecimal).to.be.equal(undefined)
    })
    it("correct input data", function () {
        let hexadecimal = rgbToHexColor(0,5,256)
        expect(hexadecimal).to.be.equal(undefined)
    })
    it("correct input data", function () {
        let hexadecimal = rgbToHexColor(0,0,0)
        expect(hexadecimal).to.be.equal('#000000')
    })
    it("correct input data", function () {
        let hexadecimal = rgbToHexColor(5,6)
        expect(hexadecimal).to.be.equal(undefined)
    })
    it("correct input data", function () {
        let hexadecimal = rgbToHexColor(5,6,3.14)
        expect(hexadecimal).to.be.equal(undefined)
    })

})