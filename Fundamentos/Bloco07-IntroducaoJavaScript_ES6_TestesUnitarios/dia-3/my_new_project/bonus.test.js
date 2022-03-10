const bonus= require('./bonus');

describe('Testa a função bonus', () => {
  it('Testa se a função techList é definida', () => {
    expect(bonus).toBeDefined();
  });

  it('Testa se bonus é uma função', () => {
    expect(typeof bonus).toBe('function');
  });

  it('Testa se ao pedir id e firstName, retorna o primeiro nome', () => {
    expect(bonus('8579-6', 'firstName')).toBe('Ana');
  });
}); 
