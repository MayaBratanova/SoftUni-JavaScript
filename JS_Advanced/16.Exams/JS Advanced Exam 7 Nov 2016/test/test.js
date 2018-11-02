let expect = require('chai').expect;
let list = require('../ex2AddDelete in List');
describe('Unit Testing for list', function () {

    it("undefiend start input", function () {
        expect(list.toString()).to.be.equal('')
    })
    it("check command add", function () {
        list.add('maya')
        expect(list.toString()).to.be.equal('maya')
    })
    it("check command add", function () {
        list.add('0')
        list.add('1')
        expect(list.toString()).to.be.equal('maya, 0, 1')
    })
    it("check command delete", function () {
        list.delete(1)
        expect(list.toString()).to.be.equal('maya, 1')
    })
    it("check command delete", function () {
        expect(list.delete(-1)).to.be.equal(undefined)
    })
    it("check command delete", function () {
        expect(list.delete(0.5)).to.be.equal(undefined)
    })
    it("check command delete", function () {
        expect(list.delete(5)).to.be.equal(undefined)
    })
    it("check command delete", function () {
        list.add(2)
        expect(list.delete(0).toString()).to.be.equal('maya')
    })
    it("check command delete", function () {
        list.add(2)
        list.add(3)
        list.add(4)
        expect(list.delete(1).toString()).to.be.equal('2')
    })

    it("check command delete", function () {
        expect(list.delete(3)).to.be.equal(4)
    })
    it("check command delete", function () {
        expect(list.delete('hi')).to.be.equal(undefined)
    })
})

