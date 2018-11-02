let expect = require('chai').expect;
let SubscriptionCard = require('../Subscription Card');

describe('test solution', function () {
    it('test', function () {
        expect(SubscriptionCard._subscriptions).to.be.equal(undefined)
    })
    let card = new SubscriptionCard('maya', 'brat', '00000')
    describe('simple input', function () {
        it('property', function () {
            expect(SubscriptionCard.prototype.hasOwnProperty('addSubscription')).to.be.equal(true)
        })
        it('property', function () {
            expect(SubscriptionCard.prototype.hasOwnProperty('isValid')).to.be.equal(true)
        })
        it('property', function () {
            expect(SubscriptionCard.prototype.hasOwnProperty('block')).to.be.equal(true)
        })
        it('property', function () {
            expect(SubscriptionCard.prototype.hasOwnProperty('unblock')).to.be.equal(true)
        })
        it('name', function () {
            let card = new SubscriptionCard('maya', 'brat', '00000')
            expect(card.firstName).to.be.equal('maya')
        })
        it('lastname', function () {
            let card = new SubscriptionCard('maya', 'brat', '00000')
            expect(card.lastName).to.be.equal('brat')
        })
        it('ssn', function () {
            let card = new SubscriptionCard('maya', 'brat', '00000')
            expect(card.SSN).to.be.equal('00000')
        })
        it('_subscriptions', function () {
            expect(SubscriptionCard._subscriptions).to.be.equal(undefined)
        })
        it('blocked', function () {
            let card = new SubscriptionCard('maya', 'brat', '00000')
            expect(card._blocked).to.be.equal(false)
        })

        it('blocked', function () {
            let card = new SubscriptionCard('maya', 'brat', '00000')
            card.unblock()
            expect(card._blocked).to.be.equal(false)
        })
        it('blocked', function () {
            let card = new SubscriptionCard('maya', 'brat', '00000')
            card.block()
            expect(card._blocked).to.be.equal(true)
        })
        it('function addSubscription', function () {
            let card = new SubscriptionCard('maya', 'brat', '00000')
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
            expect(card.isValid('*', new Date('2018-05-25'))).to.be.equal(true)
        })
        it('function addSubscription', function () {
            let card = new SubscriptionCard('maya', 'brat', '00000')
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
            expect(card.isValid('120', new Date('2018-04-22'))).to.be.equal(true)
        })
        it('function addSubscription', function () {
            let card = new SubscriptionCard('maya', 'brat', '00000')
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
            expect(card.isValid('150', new Date('2018-05-22'))).to.be.equal(false)
        })
        it('function addSubscription', function () {
            let card = new SubscriptionCard('maya', 'brat', '00000')
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card._subscriptions).to.be.equal('[{line: "120",\nstartDate: 2018-04-22T00:00:00.000Z,\nendDate: 2018-05-21T00:00:00.000Z}]')
        })
        it('change name', function () {
            let card = new SubscriptionCard('maya', 'brat', '00000')
            card.firstName = 'darko'
            expect(card.firstName).to.be.equal('maya')
        })
        it('is blocked', function () {
            let card = new SubscriptionCard('maya', 'brat', '00000')
            card.isBlocked = true
            expect(card.isBlocked).to.be.equal(false)
        })
        it('change lastName', function () {
            let card = new SubscriptionCard('maya', 'brat', '00000')
            card.lastName = 'darko'
            expect(card.lastName).to.be.equal('brat')
        })
        it('change ssn', function () {
            let card = new SubscriptionCard('maya', 'brat', '00000')
            card.SSN = '0000'
            expect(card.SSN).to.be.equal('00000')
        })
    })
})