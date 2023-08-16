import calculate from './calculate';

describe('calculate', () => {
  describe('when buttonName is a number', () => {
    it('should update next', () => {
      // Arrange
      const state = { total: '5', next: '3', operation: '+' };

      // Act
      const result = calculate(state, '2');

      // Assert
      expect(result).toEqual({ total: '5', next: '32', operation: '+' });
    });
  });

  describe('when buttonName is . and next does not include .', () => {
    it('should update next', () => {
      // Arrange
      const state = { total: '5', next: '3', operation: '+' };

      // Act
      const result = calculate(state, '.');

      // Assert
      expect(result).toEqual({ total: '5', next: '3.', operation: '+' });
    });
  });

  describe('when buttonName is . and next includes .', () => {
    it('should not update next', () => {
      // Arrange
      const state = { total: '5', next: '3.5', operation: '+' };

      // Act
      const result = calculate(state, '.');

      // Assert
      expect(result).toEqual({ total: '5', next: '3.5', operation: '+' });
    });
  });

  describe('when there is an operation and no next', () => {
    it('should update next to 0.', () => {
      // Arrange
      const state = { total: '5', next: null, operation: '+' };

      // Act
      const result = calculate(state, '.');

      // Assert
      expect(result).toEqual({ total: '5', next: '0.', operation: '+' });
    });
  });

  describe('when there is no operation and no next', () => {
    it('should update next to .', () => {
      // Arrange
      const state = { total: null, next: null, operation: null };

      // Act
      const result = calculate(state, '.');

      // Assert
      expect(result).toEqual({ total: null, next: '0.', operation: null });
    });
  });

  describe('when buttonName is = and there is no next and operation', () => {
    it('should return an empty object', () => {
      // Arrange
      const state = { total: '5', next: null, operation: null };

      // Act
      const result = calculate(state, '=');

      // Assert
      expect(result).toEqual({});
    });
  });

  describe('when buttonName is = and there is a next and operation', () => {
    it('should return an object with total set to the result of operate, next set to null, and operation set to null', () => {
      // Arrange
      const state = { total: '5', next: '3', operation: '+' };

      // Act
      const result = calculate(state, '=');

      // Assert
      expect(result).toEqual({ total: '8', next: null, operation: null });
    });
  });

  describe('when buttonName is +/- and there is a next', () => {
    it('should return an object with next set to the negation of next', () => {
      // Arrange
      const state = { total: '5', next: '3', operation: '+' };

      // Act
      const result = calculate(state, '+/-');

      // Assert
      expect(result).toEqual({ total: '5', next: '-3', operation: '+' });
    });
  });

  describe('when buttonName is +/- and there is no next and there is a total', () => {
    it('should return an object with total set to the negation of total', () => {
      // Arrange
      const state = { total: '5', next: null, operation: '+' };

      // Act
      const result = calculate(state, '+/-');

      // Assert
      expect(result).toEqual({ total: '-5', next: null, operation: '+' });
    });
  });

  describe('when buttonName is not a number, ., =, or +/- and there is no next but there is a total and no operation', () => {
    it('should return an object with operation set to buttonName', () => {
      // Arrange
      const state = { total: '5', next: null, operation: null };

      // Act
      const result = calculate(state, '-');

      // Assert
      expect(result).toEqual({ total: '5', next: null, operation: '-' });
    });
  });

  describe('when buttonName is not a number, ., =, or +/- and there is a next but no total or operation', () => {
    it('should return an object with total set to next, next set to null, and operation set to buttonName', () => {
      // Arrange
      const state = { total: null, next: '5', operation: null };

      // Act
      const result = calculate(state, '-');

      // Assert
      expect(result).toEqual({ total: '5', next: null, operation: '-' });
    });
  });
});

/*
  function calculate(obj, buttonName)
  takes 2 params
  example obj === {
    total: '0',
    next: '5',
    operation: '-'
  }
  buttonName === keypad buttons
*/

describe('Test calculate function', () => {
  test('Should update the number to displayed "52"', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '2');
    expect(result).toEqual({ total: '10', next: '52', operation: '+' });
  });
  test('Should update the result object with the values of calculate and the operator to "-"', () => {
    const result = calculate({ total: '10', next: '52', operation: '+' }, '-');
    expect(result).toEqual({ total: '62', next: null, operation: '-' });
  });
  test('Should reinitialize total and next to null', () => {
    const result = calculate({ total: '62', next: null, operation: '-' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });
});
