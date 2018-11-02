let expect = require('chai').expect
let PaymentPackage = require("../ex2Payment Package")

describe("Unit testing PaymentPackage", function () {

    describe("name", function () {
        it("name", function () {
            let myString = new PaymentPackage('maya', 15)
            expect(myString.name).to.be.equal('maya')
            expect(myString.value).to.be.equal(15)
        })
        it("name", function () {
            let error = () => PaymentPackage('Transfer Fee', 100)
            expect(error).to.throw()
        })
        it("name", function () {
            let error = () => PaymentPackage(undefined, undefined)
            expect(error).to.throw()
        })
        it("name", function () {
            let error = () => PaymentPackage(null, null)
            expect(error).to.throw()
        })
        it("name", function () {
            let error = () => PaymentPackage('maya')
            expect(error).to.throw()
        })
        it("name", function () {
            let myString = new PaymentPackage('maya', 15)
            myString.name = 'Ico'
            myString.value = 25
            let error = () => myString.VAT = ''
            expect(error).to.throw()
        })
        it("name", function () {
            let myString = new PaymentPackage('m', 15)
            expect(myString.name).to.be.equal('m')
            expect(myString.value).to.be.equal(15)
        })
        it("name", function () {
            let error = () => PaymentPackage('', 15)
            expect(error).to.throw()
        })
        it("name", function () {
            let error = () => PaymentPackage(15, 15)
            expect(error).to.throw()
        })
    })
    describe("value", function () {
        it("value", function () {
            let myString = new PaymentPackage('maya', 1.5)
            expect(myString.name).to.be.equal('maya')
            expect(myString.value).to.be.equal(1.5)
        })
        it("value", function () {
            let myString = new PaymentPackage('maya', 0)
            expect(myString.name).to.be.equal('maya')
            expect(myString.value).to.be.equal(0)
        })
        it("value", function () {
            let error = () => PaymentPackage('maya', -1.5)
            expect(error).to.throw()
        })
        it("value", function () {
            let error = () => PaymentPackage('maya', '')
            expect(error).to.throw()
        })
        it("value", function () {
            let error = () => PaymentPackage('maya', 'maya')
            expect(error).to.throw()
        })
    })
    describe("VAT", function () {
        it("VAT", function () {
            let myString = new PaymentPackage('maya', 1.5)
            expect(myString.VAT).to.be.equal(20)

        })
        it("VAT", function () {
            let myString = new PaymentPackage('maya', 1.5)
            myString.VAT = 50
            expect(myString.VAT).to.be.equal(50)

        })
        it("VAT", function () {
            let myString = new PaymentPackage('maya', 1.5)
            myString.VAT = 0
            expect(myString.VAT).to.be.equal(0)
            expect(myString.name).to.be.equal('maya')
            expect(myString.value).to.be.equal(1.5)
        })

        it("VAT", function () {
            let myString = new PaymentPackage('maya', 1.5)
            let error = () => myString.VAT = -5
            expect(error).to.throw()
        })
        it("VAT", function () {
            let myString = new PaymentPackage('maya', 1.5)
            let error = () => myString.VAT = ''
            expect(error).to.throw()
        })
        it("VAT", function () {
            let myString = new PaymentPackage('maya', 1.5)
            let error = () => myString.VAT = 'maya'
            expect(error).to.throw()
        })
    })
    describe("active", function () {
        it("active", function () {
            let myString = new PaymentPackage('maya', 1.5)
            expect(myString.active).to.be.equal(true)

        })
        it("active", function () {
            let myString = new PaymentPackage('maya', 1.5)
            myString.active = false
            expect(myString.active).to.be.equal(false)

        })

        it("active", function () {
            let myString = new PaymentPackage('maya', 1.5)
            let error = () => myString.active = -5
            expect(error).to.throw()
        })
        it("active", function () {
            let myString = new PaymentPackage('maya', 1.5)
            let error = () => myString.active = null
            expect(error).to.throw()
        })
        it("active", function () {
            let myString = new PaymentPackage('maya', 1.5)
            let error = () => myString.active = ''
            expect(error).to.throw()
        })
        it("toString", function () {
            let myString = new PaymentPackage('maya', 20)

            expect(myString.toString()).to.be.equal(`Package: ${myString.name}\n- Value (excl. VAT): ${myString.value}\n- Value (VAT ${myString.VAT}%): ${myString.value * (1 + myString.VAT / 100)}`)
        })
        it("toString", function () {
            let myString = new PaymentPackage('maya', 20)
            myString.name = 'darko'
            myString.value = 5
            myString.VAT = 30
            myString.active = false
            expect(myString.toString()).to.be.equal(`Package: ${myString.name} (inactive)\n- Value (excl. VAT): ${myString.value}\n- Value (VAT ${myString.VAT}%): ${myString.value * (1 + myString.VAT / 100)}`)
        })

    })
})