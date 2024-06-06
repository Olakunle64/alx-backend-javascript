// unittest for calculateNumber function

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('should return 7 when adding 1 and 5.9', () => {
      assert.equal(calculateNumber('SUM', 1, 5.9), 7);
    });
    it('should return 3 when adding 0 and 2.5', () => {
      assert.equal(calculateNumber('SUM', 0, 2.5), 3);
    });
    it('should return 0 when adding 0 and 0', () => {
      assert.equal(calculateNumber('SUM', 0, 0), 0);
    });
  });

  describe('sUBTRACT', () => {
    it('should return 6 when subtracting 11.6 and 5.9', () => {
      assert.equal(calculateNumber('SUBTRACT', 11.6, 5.9), 6);
    });
    it('should return 3 when subtracting 4 and 1.4', () => {
      assert.equal(calculateNumber('SUBTRACT', 4, 1.4), 3);
    });
    it('should return 0 when subtracting 0.4 and 0', () => {
      assert.equal(calculateNumber('SUBTRACT', 0.4, 0), 0);
    });
  });

  describe('dIVIDE', () => {
    it('should return 6 when dividing 35.6 and 5.9', () => {
      assert.equal(calculateNumber('DIVIDE', 35.6, 5.9), 6);
    });
    it('should return 3 when dividing 11.5 and 3.9', () => {
      assert.equal(calculateNumber('DIVIDE', 11.5, 3.9), 3);
    });
    it('should return Error when dividing 0.4 and 0', () => {
      assert.equal(calculateNumber('DIVIDE', 0.4, 0), 'Error');
    });
    it('should return 0 when dividing 0 and 4.2', () => {
      assert.equal(calculateNumber('DIVIDE', 0, 4.2), 0);
    });
  });
  describe('iNVALID OPERATOR', () => {
    it('should return 6 when dividing 35.6 and 5.9', () => {
      assert.equal(calculateNumber(35.6, 5.9), undefined);
    });
    it('should return 3 when dividing 11.5 and 3.9', () => {
      assert.equal(calculateNumber('MULTIPLY', 11.5, 3.9), undefined);
    });
    it('should return Error when dividing 0.4 and 0', () => {
      assert.equal(calculateNumber('divide', 0.4, 0), undefined);
    });
    it('should return 0 when dividing 0 and 4.2', () => {
      assert.equal(calculateNumber('divide', 0, 4.2), undefined);
    });
  });
});
