const myFizzBuzz = require('./myFizzBuzz');

describe('the function myFizzBuzz', () => {
  it('test if multiple of 3 and 5 return fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('test if numbers divisible by 3 return fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('test if numbers divisible by 5 return buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('test if number not divisible by 3 and 5 return number', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  it('test if parameter is not number return false', () => {
    expect(myFizzBuzz(typeof NaN)).toBe(false);
  });
});
