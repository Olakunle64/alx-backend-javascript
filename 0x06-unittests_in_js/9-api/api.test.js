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

describe('id in the url', function() {
    it('when id is a number', function(done) {
        request('http://localhost:7865/cart/12', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 12');
            done();
        });
    });
    it('when id is not a number', function(done) {
        request('http://localhost:7865/cart/abc', function(error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
});
