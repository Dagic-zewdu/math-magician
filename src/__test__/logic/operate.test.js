import operate from '../../Logic/operate';

describe('correct result is displayed', () => {
  test('operators return correct sum', () => {
    const res = operate('7', '3', '+');
    expect(res).toEqual('10');
  });

  test('operators return correct product', () => {
    const res = operate('7', '3', 'x');
    expect(res).toEqual('21');
  });

  test('operators return correct difference', () => {
    const res = operate('7', '3', '-');
    expect(res).toEqual('4');
  });

  test('operators return correct quotient', () => {
    const res = operate('15', '3', '÷');
    expect(res).toEqual('5');
  });

  test('division by 0 returns a message', () => {
    const result = operate('7', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });
});
