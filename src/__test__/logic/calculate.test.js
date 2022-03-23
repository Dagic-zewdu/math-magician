import calculate from '../../Logic/calculate';

const calculate1 = { total: '', next: '', operation: '' };
const calculate2 = { total: '10', next: '', operation: '' };
describe('calculate methods', () => {
  it('should be a function', () => {
    expect(typeof calculate).toBe('function');
  });
  it('should return an object', () => {
    const result = calculate(calculate1, '20');
    expect(typeof result).toEqual('object');
  });
  it('Should return total divide by 100', () => {
    const result = calculate(calculate2, '÷');
    expect(result.total).toEqual('10');
  });
  it('should return -ve value', () => {
    const result = calculate(calculate2, '+/-');
    expect(result.total).toBe('-10');
  });
  it('should return all null', () => {
    const result = calculate({ total: '10', next: '2', operation: '*' }, 'AC');
    expect(result.next).toBe(null);
    expect(result.total).toBe(null);
    expect(result.operation).toBe(null);
  });
  it('Should return a result of subtraction', () => {
    const result = calculate({ total: '7', next: '10', operation: '-' }, '=');
    expect(result.total * 1).toEqual(-3);
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual(null);
  });

  it('Should return a result of the division', () => {
    const result = calculate({ total: '7', next: '10', operation: '÷' }, '=');
    expect(result.total * 1).toEqual(0.7);
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual(null);
  });
  it('should return a result of addition', () => {
    const result = calculate({ total: '2', next: '2', operation: '+' }, '=');
    expect(result.total * 1).toEqual(4);
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual(null);
  });
  it('should return a result of multiplication', () => {
    const result = calculate({ total: '2', next: '0', operation: 'x' }, '=');
    expect(result.total * 1).toEqual(0);
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual(null);
  });
  it('Adding positive number is not zero', () => {
    const result = calculate({ total: '2', next: '2', operation: '+' }, '=');
    expect(result.total * 1).not.toBe(0);
    expect(result.next).not.toBe(0);
    expect(result.operation).not.toBe('+');
  });
  it('Multiplying positive number is not zero', () => {
    const result = calculate({ total: '2', next: '2', operation: 'x' }, '=');
    const value = result.total * 1;
    expect(value).not.toEqual(0);
  });
});
