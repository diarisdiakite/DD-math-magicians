import operate from "./operate";

const numbers = {number1:2, number2:2}

describe('', () => {
  test('adds 2 + 2 to equal 4', () => {
      expect(operate(2, 2, '+')).toBe('4');
  });
  test('substract 2 - 2 to equal 0', () => {
      expect(operate(2, 2, '-')).toBe('0');
  });
  test('multiply 2 * 2 to equal 4', () => {
      expect(operate(2, 2, '*')).toBe('4');
  });
  test('divide 2 ÷ 2 to equal 1', () => {
      expect(operate(2, 2, '÷')).toBe('1');
  });
  test('module 2 + 2 to equal 3', () => {
      expect(operate(2, 2, '%')).toBe('0');
  });
})