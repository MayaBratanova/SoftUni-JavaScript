let expect = require('chai').expect
let StringBuilder = require("../ex2String Builder")
describe('Unit Testing',function () {
    let myString;
    beforeEach(function () {
        myString = new StringBuilder()
    });

    describe('Check the prototypes of the functions',function () {
        it('check append',function () {
            expect(StringBuilder.prototype.hasOwnProperty('append')).to.be.equal(true);
        });
        it('check prepend',function () {
            expect(StringBuilder.prototype.hasOwnProperty('prepend')).to.be.equal(true);
        });
        it('check insertAt',function () {
            expect(StringBuilder.prototype.hasOwnProperty('insertAt')).to.be.equal(true);
        });
        it('check remove',function () {
            expect(StringBuilder.prototype.hasOwnProperty('remove')).to.be.equal(true);
        });
        it('if it is empty string',function () {
            myString = new StringBuilder();
            expect(myString.toString()).to.be.equal('')
        });
        it('if it is non-empty string',function () {
            myString = new StringBuilder('test');
            expect(myString.toString()).to.be.equal('test');
        });
        it('with invalid string',function () {
            // let willThrow = () => builder.append(5);
            // expect(willThrow).to.throw();
            expect(() => {myString = new StringBuilder(5)}).to.throw(TypeError)
        })
    });
    describe('Append function',function () {
        it('with correct string',function () {
            myString = new  StringBuilder('hi ');
            myString.append('ivailo');
            expect(myString._stringArray.length).to.be.equal(9);
            expect(myString.toString()).to.be.equal('hi ivailo')
        });
        it('with incorrect string',function () {
            expect(() => myString.append(5)).to.be.throw(TypeError)
        });
    });
    describe('Prepend function',function () {
        it('with correct string',function () {
            myString.prepend('ivailo ');
            expect(myString._stringArray.length).to.be.equal(7);
            expect(myString.toString()).to.be.equal('ivailo ')
        });
        it('wit incorrect string',function () {
            expect(() => myString.prepend(5)).to.be.throw(TypeError)
        });
    });
    describe('Insert function',function () {
        it('wit correct string',function () {
            myString.insertAt('aa',2);
            expect(myString._stringArray.length).to.be.equal(2);
            expect(myString.toString()).to.be.equal('aa')
        });
        it('wit incorrect string',function () {
            expect(() => myString.insertAt({},2)).to.be.throw(TypeError)
        });
    });

    describe('remove function',function () {
        it('wit correct string',function () {
            myString = new StringBuilder('ivailo');
            myString.remove(1,2);
            expect(myString._stringArray.length).to.be.equal(4);
            expect(myString.toString()).to.be.equal('iilo')
        });
    })
});