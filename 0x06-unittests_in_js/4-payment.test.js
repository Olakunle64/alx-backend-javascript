// unittest for sendPaymentRequestToApi function

const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('stub calculateNumber to always return 10', () => {
    const consoleLogSpy = sinon.spy(console, 'log');
    const utilCalcStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(utilCalcStub.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.equal(true);
    utilCalcStub.restore();
    consoleLogSpy.restore();
  });
});