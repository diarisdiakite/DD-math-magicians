import calculate from './calculate';

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
  test('Should update the number displayed to "52"', () => {
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
