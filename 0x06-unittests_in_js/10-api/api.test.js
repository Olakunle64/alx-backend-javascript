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

describe('Test login route', function() {
    it('when userName is olakunle', function(done) {
        request.post(
            'http://localhost:7865/login',
            {
              json: {"userName": "olakunle"}
            },
            (error, response, body) => {
              expect(response.statusCode).to.equal(200);
              expect(body).to.equal('Welcome olakunle');
              done();
            }
          );
    });
    it('when userName is not set', function(done) {
        request.post(
            'http://localhost:7865/login',
            {
              json: {"useName": "olakunle"}
            },
            (error, response, body) => {
              expect(response.statusCode).to.equal(400);
            //   expect(body).to.equal('Welcome olakunle');
              done();
            }
          );
    });
});

describe('available_payements', function() {
    it('Test available_payment route', function(done) {
        request('http://localhost:7865/available_payments', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(JSON.parse(body)).to.deep.equal({ "payment_methods": { "credit_cards": true, "paypal": false } });
            done();
        });
    });
});
