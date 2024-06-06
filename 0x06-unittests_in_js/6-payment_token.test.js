// Test the getPaymentTokenFromAPI async function

const getPaymentTokenFromAPI = require('./6-payment_token');
const chai = require('chai');
const expect = chai.expect;

describe('getPaymentTokenFromAPI', () => {
    it('when success is true', (done) => {
        getPaymentTokenFromAPI(true).then((data) => {
            expect(data).to.deep.equal({data: 'Successful response from the API' });
        });
        done();
    });
});