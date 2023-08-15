import operate from "./operate";

const numbers = {number1:200, number2:2}

describe('', () => {
  test('adds 2 + 2 to equal 4', () => {
      expect(operate(numbers.number1, numbers.number2, '+')).toBe('202');
  });
  test('substract 2 - 2 to equal 0', () => {
      expect(operate(2, 2, '-')).toBe('0');
  });
  test('multiply 2 * 2 to equal 4', () => {
      expect(operate(2, 2, 'x')).toBe('4');
  });
  test('divide 2 ÷ 2 to equal 1', () => {
      expect(operate(2, 2, '÷')).toBe('1');
  });
  test('modulo 2 % 2 to equal 0', () => {
      expect(operate(2, 2, '%')).toBe('0');
  });
})