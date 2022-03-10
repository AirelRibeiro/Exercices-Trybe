const {encode, decode} = require('./encodeDecode');

describe('the function encode', () => {
  it('test if encode is a function', () => {
    expect(typeof encode).toBe('function');
  });

  it('testa se quando recebe "a, e, i, o, u" retorna "1, 2, 3, 4, 5"', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });

  it('testa se quando recebe "b, c, d, f, g"  não retorna "1, 2, 3, 4, 5"', () => {
    expect(encode('b, c, d, f, g')).not.toBe('1, 2, 3, 4, 5');
  });

  it('testa o número de caracteres das strings de entrada e saida são correspondentes', () => {
    const string = 'eu sou um bolinho de arroz'
    expect(encode(string)).toHaveLength(string.length);
  });
});

describe('the function decode', () => {
  it('test if decode is a function', () => {
    expect(typeof decode).toBe('function');
  });

  it('testa se quando recebe "1, 2, 3, 4, 5" retorna "a, e, i, o, u"', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });

  it('testa se quando recebe "6, 7, 8, 9, 0" retorna "a, e, i, o, u"', () => {
    expect(decode('6, 7, 8, 9, 0')).not.toBe('a, e, i, o, u');
  });

  it('testa o número de caracteres das strings de entrada e saida são correspondentes', () => {
    const string = '25 s45 5m b4l3nh4 d2 1rr4z'
    expect(decode(string)).toHaveLength(string.length);
  });
});
