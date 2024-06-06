const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./5-payment');
const { beforeEach } = require('mocha');

describe('sendPaymentRequestToApi', () => {
    beforeEach(() => {
        consoleLogSpy = sinon.spy(console, 'log');
    });
    afterEach(() => {
        consoleLogSpy.restore()
    });
    it('call sendPaymentRequestToAPI with 100, and 20', function() {
        sendPaymentRequestToApi(100, 20)
        expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.equal(true);
        expect(consoleLogSpy.calledOnce).to.be.true
    });
    it('call sendPaymentRequestToAPI with 10, and 10', function() {
        sendPaymentRequestToApi(10, 10)
        expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.equal(true);
        expect(consoleLogSpy.calledOnce).to.be.true
    });
})