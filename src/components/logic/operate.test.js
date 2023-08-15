import operate from './operate';

const numbers = { number1: 6.5, number2: 16 };

describe('', () => {
  test('adds 2 + 2 to equal 4', () => {
    expect(operate(2, 2, '+')).toBe('4');
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
  test('module 2 + 2 to equal 3', () => {
    expect(operate(2, 2, '%')).toBe('0');
  });
});

describe('', () => {
  test('adds 6.5 + 16 to equal 22.5', () => {
    expect(operate(numbers.number1, numbers.number2, '+')).toBe('22.5');
  });
  test('substract 6.5 - 16 to equal -9.5', () => {
    expect(operate(numbers.number1, numbers.number2, '-')).toBe('-9.5');
  });
  test('multiply 6.5 * 16 to equal 104', () => {
    expect(operate(numbers.number1, numbers.number2, 'x')).toBe('104');
  });
  test('divide 6.5 ÷ 16 to equal 0.40625', () => {
    expect(operate(numbers.number1, numbers.number2, '÷')).toBe('0.40625');
  });
  test('module 6.5 + 16 to equal 6.5', () => {
    expect(operate(numbers.number1, numbers.number2, '%')).toBe('6.5');
  });
});
