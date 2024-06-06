// unittest for calculateNumber function

const chai = require('chai');

const { expect } = chai;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('should return 7 when adding 1 and 5.9', () => {
      expect(calculateNumber('SUM', 1, 5.9)).to.equal(7);
    });
    it('should return 3 when adding 0 and 2.5', () => {
      expect(calculateNumber('SUM', 0, 2.5)).to.equal(3);
    });
    it('should return 0 when adding 0 and 0', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
  });

  describe('sUBTRACT', () => {
    it('should return 6 when subtracting 11.6 and 5.9', () => {
      expect(calculateNumber('SUBTRACT', 11.6, 5.9)).to.equal(6);
    });
    it('should return 3 when subtracting 4 and 1.4', () => {
      expect(calculateNumber('SUBTRACT', 4, 1.4)).to.equal(3);
    });
    it('should return 0 when subtracting 0.4 and 0', () => {
      expect(calculateNumber('SUBTRACT', 0.4, 0)).to.equal(0);
    });
  });

  describe('dIVIDE', () => {
    it('should return 6 when dividing 35.6 and 5.9', () => {
      expect(calculateNumber('DIVIDE', 35.6, 5.9)).to.equal(6);
    });
    it('should return 3 when dividing 11.5 and 3.9', () => {
      expect(calculateNumber('DIVIDE', 11.5, 3.9)).to.equal(3);
    });
    it('should return Error when dividing 0.4 and 0', () => {
      expect(calculateNumber('DIVIDE', 0.4, 0)).to.equal('Error');
    });
    it('should return 0 when dividing 0 and 4.2', () => {
      expect(calculateNumber('DIVIDE', 0, 4.2)).to.equal(0);
    });
  });
  describe('iNVALID OPERATOR', () => {
    it('should return 6 when dividing 35.6 and 5.9', () => {
      expect(calculateNumber(35.6, 5.9)).to.equal(undefined);
    });
    it('should return 3 when dividing 11.5 and 3.9', () => {
      expect(calculateNumber('MULTIPLY', 11.5, 3.9)).to.equal(undefined);
    });
    it('should return Error when dividing 0.4 and 0', () => {
      expect(calculateNumber('divide', 0.4, 0)).to.equal(undefined);
    });
    it('should return 0 when dividing 0 and 4.2', () => {
      expect(calculateNumber('divide', 0, 4.2)).to.equal(undefined);
    });
  });
});
