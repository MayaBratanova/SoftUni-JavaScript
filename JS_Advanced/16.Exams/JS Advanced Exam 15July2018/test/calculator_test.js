let expect = require('chai').expect;
let Calculator = require('../ex2Caculator')
describe("tests", function () {
    describe("empry string", function () {
        it("empty array", function () {
            let output = new Calculator()
            expect(output.expenses.toString()).to.be.equal("")
            expect(output.expenses.length).to.be.equal(0)
        })
    })
    describe("add function", function () {
        it("add string", function () {
            let output = new Calculator()
            output.add('maya')
            expect(output.toString()).to.be.equal('maya')
        })
        it("add number", function () {
            let output = new Calculator()
            output.add(6)
            expect(output.toString()).to.be.equal("6")
        })
        it("add floatPoint Number", function () {
            let output = new Calculator()
            output.add(6.5)
            expect(output.toString()).to.be.equal("6.5")
        })
        it("add array", function () {
            let output = new Calculator()
            output.add([1, 2, 3])
            expect(output.toString()).to.be.equal("1,2,3")
        })
        it("add array with string", function () {
            let output = new Calculator()
            output.add(['maya', 'darko'])
            expect(output.toString()).to.be.equal("maya,darko")
        })
        it("add Object", function () {
            let output = new Calculator()
            output.add({name: 'maya', age: 32})
            expect(output.toString()).to.be.equal('[object Object]')
        })
    })
    // describe("multiply function", function () {
    //     it("multiply nums", function () {
    //         let output = new outputulator()
    //         output.add(1)
    //         output.add(3)
    //         expect(output.multiplyNums()).to.be.equal(3)
    //     })
    //     it("multiply nums and negative", function () {
    //         let output = new outputulator()
    //         output.add(-1)
    //         output.add(3)
    //         expect(output.multiplyNums()).to.be.equal(-3)
    //     })
    //     it("multiply negative nums", function () {
    //         let output = new outputulator()
    //         output.add(-1)
    //         output.add(-3)
    //         expect(output.multiplyNums()).to.be.equal(3)
    //     })
    //     it("multiply nums and string", function () {
    //         let output = new outputulator()
    //         output.add(1)
    //         output.add(3)
    //         output.add('maya')
    //         expect(output.multiplyNums()).to.be.equal(3)
    //     })
    //     it("multiply nums and array", function () {
    //         let output = new outputulator()
    //         output.add(20)
    //         output.add(3)
    //         output.add(['maya', 'darko'])
    //         expect(output.multiplyNums()).to.be.equal(60)
    //     })
    //     it("multiply nums and Object", function () {
    //         let output = new outputulator()
    //         output.add(4)
    //         output.add(3)
    //         output.add({name: 'Maya', age: 32})
    //         expect(output.multiplyNums()).to.be.equal(12)
    //     })
    //     it("multiply floating points nums1", function () {
    //         let output = new outputulator()
    //         output.add(4.5)
    //         output.add(3.2)
    //         expect(output.multiplyNums()).to.be.closeTo(14.4, 0.01)
    //     })
    //     it("multiply floating points nums2", function () {
    //         let output = new outputulator()
    //         output.add(-4.5)
    //         output.add(3.2)
    //         expect(output.multiplyNums()).to.be.closeTo(-14.4, 0.01)
    //     })
    //     it("multiply floating points nums", function () {
    //         let output = new outputulator()
    //         output.add(4.5)
    //         output.add(2)
    //         output.add('maya')
    //         expect(output.multiplyNums()).to.be.equal(9)
    //     })
    //     it("multiply nums + 0", function () {
    //         let output = new outputulator()
    //         output.add(4.5)
    //         output.add(2)
    //         output.add(0)
    //         expect(output.multiplyNums()).to.be.equal(0)
    //     })
    //     it("multiply two strings", function () {
    //         let output = new outputulator()
    //         output.add('maya')
    //         output.add('darko')
    //         expect(output.multiplyNums()).to.be.equal(undefined)
    //     })
    //     it("multiply two strings", function () {
    //         let output = new outputulator()
    //         output.add(10)
    //         output.add(3)
    //         expect(output.multiplyNums()).to.be.equal(30)
    //     })
    //
    // })
    describe("divide function", function () {
        it("divide nums", function () {
            let output = new Calculator()
            output.add(1)
            output.add(3)
            expect(output.divideNums()).to.be.closeTo(0.33, 0.01)
        })
        it("divide nums and negative", function () {
            let output = new Calculator()
            output.add(-1)
            output.add(3)
            expect(output.divideNums()).to.be.closeTo(-0.33, 0.01)
        })
        it("divide negative nums", function () {
            let output = new Calculator()
            output.add(-1)
            output.add(-3)
            expect(output.divideNums()).to.be.closeTo(0.33, 0.01)
        })
        it("divide nums and string", function () {
            let output = new Calculator()
            output.add(1)
            output.add(3)
            output.add('maya')
            expect(output.divideNums()).to.be.closeTo(0.33, 0.01)
        })
        it("divide nums and string", function () {
            let output = new Calculator()
            output.add('maya')
            output.add(1)
            expect(output.divideNums()).to.be.equal(1)
        })
        it("divide nums and array", function () {
            let output = new Calculator()
            output.add(20)
            output.add(3)
            output.add(['maya', 'darko'])
            expect(output.divideNums()).to.be.closeTo(6.67, 0.01)
        })
        it("divide nums and Object", function () {
            let output = new Calculator()
            output.add(4)
            output.add(3)
            output.add({name: 'Maya', age: 32})
            expect(output.divideNums()).to.be.closeTo(1.33, 0.01)
        })
        it("divide floating points nums1", function () {
            let output = new Calculator()
            output.add(4.5)
            output.add(3.2)
            expect(output.divideNums()).to.be.closeTo(1.41, 0.01)
        })
        it("multiply floating points nums", function () {
            let output = new Calculator()
            output.add(-4.5)
            output.add(3.2)
            expect(output.divideNums()).to.be.closeTo(-1.41, 0.01)
        })
        it("divide floating points nums2", function () {
            let output = new Calculator()
            output.add(4.5)
            output.add(2)
            output.add('maya')
            expect(output.divideNums()).to.be.closeTo(2.25, 0.01)
        })
        it("divide nums + 0", function () {
            let output = new Calculator()
            output.add(4.5)
            output.add(2)
            output.add(0)
            expect(output.divideNums()).to.be.equal('Cannot divide by zero')
        })
        it("divide nums + 0", function () {
            let output = new Calculator()
            output.add(0)
            output.add(2)
            output.add(5)
            expect(output.divideNums()).to.be.equal(0)
        })
        it("divide two strings", function () {
            let output = new Calculator()
            output.add(5)
            output.add('darko')
            expect(output.divideNums()).to.be.equal(5)

        })
        it("divide two strings", function () {
            let output = new Calculator()
            output.add(undefined)
            let error = () => output.divideNums()
            expect(error).to.throw()

            //expect(output.divideNums()).to.throw('There are no numbers in the array!')

        })

    })
    describe("toString function", function () {
        it("empty toString", function () {
            let output = new Calculator()
            expect(output.toString()).to.be.equal('empty array')
        })
        it("strings toString", function () {
            let output = new Calculator()
            output.add('maya')
            output.add('darko')
            expect(output.toString()).to.be.equal('maya -> darko')
        })
        it("nums toString", function () {
            let output = new Calculator()
            output.add(1)
            output.add(10)
            expect(output.toString()).to.be.equal('1 -> 10')
        })
        it("nums toString", function () {
            let output = new Calculator()
            output.add(1)
            output.add(10)
            output.add(30)
            expect(output.toString()).to.be.equal('1 -> 10 -> 30')
        })
        it("array toString", function () {
            let output = new Calculator()
            output.add(['maya', 'zaya'])
            output.add(10)
            expect(output.toString()).to.be.equal('maya,zaya -> 10')
        })
        it("object toString", function () {
            let output = new Calculator()
            output.add({name:'maya', age:'32'})
            output.add(10)
            expect(output.toString()).to.be.equal('[object Object] -> 10')
        })
    })
    describe("orderBy function", function () {
        it("orderBy toString1", function () {
            let output = new Calculator()
            expect(output.orderBy()).to.be.equal('empty')
        })
        it("orderBy toString2", function () {
            let output = new Calculator()
            output.add(1)
            output.add(10)
            expect(output.orderBy().toString()).to.be.equal('1, 10')
        })
        it("orderBy toString3", function () {
            let output = new Calculator()
            output.add(-1)
            output.add(10)
            expect(output.orderBy().toString()).to.be.equal('-1, 10')
        })
        it("orderBy toString4", function () {
            let output = new Calculator()
            output.add(1)
            output.add('maya')
            expect(output.orderBy().toString()).to.be.equal('1, maya')
        })
        it("orderBy toString5", function () {
            let output = new Calculator()
            output.add(1)
            output.add('maya')
            output.add('hristo')
            expect(output.orderBy().toString()).to.be.equal('1, hristo, maya')
        })
        it("orderBy toString6", function () {
            let output = new Calculator()
            output.add(10)
            output.add(1.5)
            expect(output.orderBy().toString()).to.be.equal('1.5, 10')
        })
        it("orderBy toString7", function () {
            let output = new Calculator()
            output.add(10)
            output.add(['maya', 'hristo'])
            expect(output.orderBy().toString()).to.be.equal('10, maya,hristo')
        })
        it("orderBy toString8", function () {
            let output = new Calculator()
            output.add(10)
            output.add({name:'maya', age:32})
            expect(output.orderBy().toString()).to.be.equal('10, [object Object]')
        })

    })



})

