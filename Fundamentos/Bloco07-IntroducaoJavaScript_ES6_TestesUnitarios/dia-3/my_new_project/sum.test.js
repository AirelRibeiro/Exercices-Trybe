const sum = require('./sum');

describe ('the function sum', () => {
  it('test if 4 + 5 to equal 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('test if 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('error when parameter is not number', () => {
    expect(()=> {sum(4, '5')}).toThrow('parameters must be numbers');
  });
});
