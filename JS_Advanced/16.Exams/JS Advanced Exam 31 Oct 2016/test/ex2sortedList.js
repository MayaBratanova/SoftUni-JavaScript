let expect = require('chai').expect;
let SortedList = require('../ex2Sorted List');


describe('Unit Testing for sortedList', function () {
    let myList;
    beforeEach(function () {
        myList = new SortedList();
    });
    it("undefiend start input", function () {
        expect(this.list).to.be.equal(undefined)
    })


    describe('check if the functions exist in the prototype', function () {
        it('add exist in the prototype', function () {
            expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true)
        });
        it('check if remove exist in the prototype', function () {
            expect(SortedList.prototype.hasOwnProperty('remove')).to.be.equal(true)
        });
        it('check if get exist in the prototype', function () {
            expect(SortedList.prototype.hasOwnProperty('get')).to.be.equal(true)
        });
        it('check if size exist in the prototype', function () {
            expect(SortedList.prototype.hasOwnProperty('size')).to.be.eq(true)
        })
    });
    describe("check add function", function () {
        it("add one number", function () {
            myList.add(4);
            expect(myList.list.join()).to.be.equal('4')
        })
        it("add two numbers", function () {
            myList.add(4);
            myList.add(2)
            expect(myList.list.join()).to.be.equal('2,4')
        })
        it("add number ans string", function () {
            myList.add(4);
            myList.add('maya')
            expect(myList.list.join()).to.be.equal('4,maya')
        })

    })
    describe("check remove function", function () {
        it("add one number, and remove it", function () {
            myList.add(4);
            myList.remove(0, 1)
            expect(myList.list.join()).to.be.equal('')
        })
        it("add two numbers, and remove the second", function () {
            myList.add(4);
            myList.add(6);
            myList.add(8);
            myList.remove(1)
            expect(myList.list.join()).to.be.equal('4,8')
        })
        it("list length is equal to zero", function () {
            let willThrow = () => myList.remove(1, 1);
            expect(willThrow).to.throw(Error,"Collection is empty.");
        })
        it("index is more than list length", function () {
            myList.add(5)
            let willThrow = () => myList.remove(1, 1);
            expect(willThrow).to.throw(Error,"Index was outside the bounds of the collection.")
        })
        it("index is more than list length", function () {
            myList.add(5)
            myList.add(5)
            let willThrow = () => myList.remove(2, 1);
            expect(willThrow).to.throw(Error,"Index was outside the bounds of the collection.")
        })
        it("index is less than zero", function () {
            myList.add(5)
            let willThrow = () => myList.remove(-1, 1);
            expect(willThrow).to.throw(Error,"Index was outside the bounds of the collection.")
        })


    })
    describe("check get function", function () {
        it("add one number, and remove it", function () {
            myList.add(4);
            myList.get(0, 1)
            expect(myList.list.join()).to.be.equal('4')
        })
        it("add two numbers, and remove the second", function () {
            myList.add(4);
            myList.add(2);
            myList.get(1, 1)
            expect(myList.list.join()).to.be.equal('2,4')
        })
        it("list length is equal to zero", function () {
            let willThrow = () => myList.get(1, 1);
            expect(willThrow).to.throw(Error,"Collection is empty.");
        })
        it("index is more than list length", function () {
            myList.add(5)
            let willThrow = () => myList.get(1, 1);
            expect(willThrow).to.throw(Error,"Index was outside the bounds of the collection.")
        })
        it("index is less than zero", function () {
            myList.add(5)
            let willThrow = () => myList.get(-1, 1);
            expect(willThrow).to.throw(Error,"Index was outside the bounds of the collection.")
        })


    })
    describe('Checking for Size function',function () {
        it('check with correct size',function () {
            myList.add(4);
            myList.add(5);
            expect(myList.size).to.be.equal(2)
        })
    })

});