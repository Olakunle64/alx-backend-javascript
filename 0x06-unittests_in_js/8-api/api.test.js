const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Index page', function() {
    it('should return "Welcome to the payment system"', function(done) {
        request('http://localhost:7865', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});
