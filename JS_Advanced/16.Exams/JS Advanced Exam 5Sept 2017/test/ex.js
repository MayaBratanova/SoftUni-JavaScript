let expect = require('chai').expect
let StringBuilder = require("../ex2String Builder")

describe("test", function () {
    let myString;
    beforeEach(function () {
        myString = new StringBuilder()
    })
    describe("valid class properties", function () {
        it("valid append", function () {
            expect(StringBuilder.prototype.hasOwnProperty('append')).to.be.equal(true)
        })
        it("valid prepend", function () {
            expect(StringBuilder.prototype.hasOwnProperty('prepend')).to.be.equal(true)
        })
        it("insert at", function () {
            expect(StringBuilder.prototype.hasOwnProperty('insertAt')).to.be.equal(true)
        })
        it("remove", function () {
            expect(StringBuilder.prototype.hasOwnProperty('remove')).to.be.equal(true)
        })
        it("toString", function () {
            expect(StringBuilder.prototype.hasOwnProperty('toString')).to.be.equal(true)
        })
        it("check the input is it string", function () {
            let error = () => myString(5)
            expect(error).to.throw()
        })
        it('if it is empty string',function () {
            myString = new StringBuilder();
            expect(myString.toString()).to.be.equal('')
        });
        it('if it is empty string',function () {
            myString = new StringBuilder('maya');
            expect(myString.toString()).to.be.equal('maya')
        });
    })
    describe("check append", function () {
        it("append string", function () {
            myString = new StringBuilder('ma')
            myString.append('dario')
            expect(myString._stringArray.length).to.be.equal(7)
        })
        it("append string", function () {
            myString = new StringBuilder('ma')
            myString.append('dario')
            expect(myString.toString()).to.be.equal('madario')
        })
        it("check the input is it string", function () {
            let error = () => myString.append(5)
            expect(error).to.throw()
        })
    })
    describe("check prepend", function () {
        it("prepend string", function () {
            myString = new StringBuilder('ma')
            myString.prepend('dario')
            expect(myString._stringArray.length).to.be.equal(7)
        })
        it("string that we espect", function () {
            myString = new StringBuilder('ma')
            myString.prepend('dario')
            expect(myString.toString()).to.be.equal('darioma')
        })
        it("check the input is it string", function () {
            let error = () => myString.prepend(5)
            expect(error).to.throw()
        })
    })
    describe("check insertAt", function () {
        it("length", function () {
            myString = new StringBuilder('maya')
            myString.insertAt('A',1)
            expect(myString._stringArray.length).to.be.equal(5)
        })
        it("result string", function () {
            myString = new StringBuilder('maya')
            myString.insertAt('A', 1)
            expect(myString.toString()).to.be.equal('mAaya')
        })
        it("error string", function () {
            let error = ()=>StringBuilder(5)
            expect(error).to.throw()
        })
    })
    describe("check remove", function () {
        it("length", function () {
            myString = new StringBuilder('maya')
            myString.remove(2,2)
            expect(myString._stringArray.length).to.be.equal(2)
        })
        it("result string", function () {
            myString = new StringBuilder('maya')
            myString.remove(2,2)
            expect(myString.toString()).to.be.equal('ma')
        })

    })
})