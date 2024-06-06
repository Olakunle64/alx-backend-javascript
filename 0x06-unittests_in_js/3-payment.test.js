// unittest for sendPaymentRequestToApi function

const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber', () => {
    const utilCalcSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(10.5, 20);
    expect(utilCalcSpy.calledOnceWithExactly('SUM', 10.5, 20)).to.equal(true);
    utilCalcSpy.restore();
  });
  it('should call Utils.calculateNumber 2', () => {
    const utilCalcSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(utilCalcSpy.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
    utilCalcSpy.restore();
  });
});