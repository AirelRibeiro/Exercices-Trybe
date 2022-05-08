let { retornaNumeroAleatorio, retornaPrimeira, concatena, fetchDog } = require('./service');
const service = require('./service')

describe('Testa função retornaNumeroAleatorio', () => {
  test('Se o número tetornado pela função está entre 0 e 100', () => {
    retornaNumeroAleatorio = jest.fn().mockReturnValue(10);
    // retornaNumeroAleatorio = jest.fn().mockReturnValueOnce(10);
    // expect(retornaNumeroAleatorio()).toBe(10);
    const number = retornaNumeroAleatorio();
    expect(number).toBe(10);
  });
  test('Se a função foi chamada e quantas vezes ela doi chamada', () => {
    retornaNumeroAleatorio = jest.fn();
    retornaNumeroAleatorio();
    expect(retornaNumeroAleatorio).toHaveBeenCalled();
    expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
    retornaNumeroAleatorio();
    expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(2);
  });
  test('A implementação da função como a divisão entre dois números', () => {
    retornaNumeroAleatorio = jest.fn().mockImplementationOnce((a, b) => a / b);
    const number = retornaNumeroAleatorio(100, 50);
    console.log(number);
    expect(number).toBe(2);
    expect(retornaNumeroAleatorio).toHaveBeenCalled();
    expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
    expect(retornaNumeroAleatorio).toBeCalledWith(100, 50);
    expect(retornaNumeroAleatorio).not.toHaveBeenCalledTimes(2);
  });
  test('A implementação da função como a multiplicação entre três números', () => {
    retornaNumeroAleatorio = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
    const number = retornaNumeroAleatorio(10, 5, 2);
    console.log(number);
    expect(number).toBe(100);
    expect(retornaNumeroAleatorio).toHaveBeenCalled();
    expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
    expect(retornaNumeroAleatorio).toBeCalledWith(10, 5, 2);
    expect(retornaNumeroAleatorio).not.toHaveBeenCalledTimes(2);
    retornaNumeroAleatorio(1, 1, 1);
    expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(2);
  });
  test('Se a função, recebendo um parâmetro retorna o dobro dele', () => {
    expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(2);
    retornaNumeroAleatorio.mockReset();
    expect(retornaNumeroAleatorio).not.toHaveBeenCalled();
    retornaNumeroAleatorio = jest.fn().mockImplementationOnce((a) => a * 2);
    const number = retornaNumeroAleatorio(10);
    expect(number).toBe(20);
    expect(retornaNumeroAleatorio).toHaveBeenCalled();
    expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
    expect(retornaNumeroAleatorio).toBeCalledWith(10);
  });
  
});

describe('Testa função fazMaiusculas', () => {
  test('Se ao ser implementada usando mock a função retorna strigs minúsculas', () => {
    const fazMaiusculas = jest.spyOn(service, 'fazMaiusculas').mockImplementationOnce((a) => a.toLowerCase());
    const minuscula = fazMaiusculas('Eu Sou Um Bolinho De Arroz')
    expect(minuscula).toBe('eu sou um bolinho de arroz')
  });
  test('Se ao ter sua implementação resetada, a função volta a relizar seu propósito original', () => {
    service.fazMaiusculas.mockRestore();
    const resultado = service.fazMaiusculas('eu sou um bolinho de arroz');
    expect(resultado).toBe('EU SOU UM BOLINHO DE ARROZ');
  });
});

describe('Testa função retornaPrimeira', () => {
  test('Se ao ser implementada usando mock a função retorna a última letra', () => {
    retornaPrimeira = jest.fn().mockImplementationOnce((a) => a[a.length - 1]);
    const letra = retornaPrimeira('Eu Sou Um Bolinho De Arroz')
    expect(letra).toBe('z')
  });
});

describe('Testa função concatena', () => {
  test('Se ao ser implementada usando mock a função retorna a concatenação de três strings', () => {
    concatena = jest.fn().mockImplementationOnce((a, b, c) => `${a}${b}${c}`);
    const resultado = concatena('S', 'o', 'u');
    expect(resultado).toBe('Sou');
  });
});

describe("Testa função fetchDog", () => {
  fetchDog = jest.fn();
  afterEach(fetchDog.mockReset);

  test("testando requisição caso a promisse resolva", async () => {
    fetchDog.mockResolvedValue("request sucess");

    fetchDog();
    expect(fetchDog).toHaveBeenCalled();
    expect(fetchDog).toHaveBeenCalledTimes(1);
    await expect(fetchDog()).resolves.toBe("request sucess");
    expect(fetchDog).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promisse seja rejeitada", async () => {
    fetchDog.mockRejectedValue("request failed");

    expect(fetchDog).toHaveBeenCalledTimes(0);
    await expect(fetchDog()).rejects.toMatch("request failed");
    expect(fetchDog).toHaveBeenCalledTimes(1);
  });
});