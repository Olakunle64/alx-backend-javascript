// Test calculateNumber function
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when adding 1 and 3', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('should return 5 when adding 1 and 3.7', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('should return 5 when adding 1.2 and 3.7', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('should return 6 when adding 1.5 and 3.7', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('should return 4 when adding 1.4 and 3.4', () => {
    assert.equal(calculateNumber(1.4, 3.4), 4);
  });
  it('should return 5 when adding 1.4 and 3.5', () => {
    assert.equal(calculateNumber(1.4, 3.5), 5);
  });
  it('should return 5 when adding 1.4 and 3.6', () => {
    assert.equal(calculateNumber(1.4, 3.6), 5);
  });
  it('should return 5 when adding 1.4 and 3.7', () => {
    assert.equal(calculateNumber(1.4, 3.7), 5);
  });
  it('should return 5 when adding 1.4 and 3.8', () => {
    assert.equal(calculateNumber(1.4, 3.8), 5);
  });
  it('should return 5 when adding 1.4 and 3.9', () => {
    assert.equal(calculateNumber(1.4, 3.9), 5);
  });
  it('should return 5 when adding 1.4 and 3.9', () => {
    assert.equal(calculateNumber(1.4, 3.9), 5);
  });
  it('should return 5 when adding 1.4 and 3.9', () => {
    assert.equal(calculateNumber(1.4, 3.9), 5);
  });
});
