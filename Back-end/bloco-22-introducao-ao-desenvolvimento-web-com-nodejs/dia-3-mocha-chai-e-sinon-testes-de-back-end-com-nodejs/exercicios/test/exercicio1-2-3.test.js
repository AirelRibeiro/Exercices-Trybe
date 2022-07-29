const { expect } = require('chai');
const whatIsThisNumber = require('../exercicio1-2-3.js');

describe('Testa a função whatIsThisNumber', () => {
  describe('Testa o retorno caso seja passada uma string', () => {
    it('Tipo de retorno', () => {
      const retorno = whatIsThisNumber('isso não é um número');
      expect(retorno).to.be.a('string');
    });
    it('Conteúdo do retorno', () => {
      const retorno = whatIsThisNumber('isso não é um número');
      expect(retorno).to.be.equals('O valor deve ser um número');
    });
  });
  describe('Testa o retorno caso seja passado 0', () => {
    it('Tipo de retorno', () => {
      const retorno = whatIsThisNumber(0);
      expect(retorno).to.be.a('string');
    });
    it('Conteúdo do retorno', () => {
      const retorno = whatIsThisNumber(0);
      expect(retorno).to.be.equals('neutro');
    });
  });
  describe('Testa o retorno caso seja passado um número positivo', () => {
    it('Tipo de retorno caso seja passado 10', () => {
      const retorno = whatIsThisNumber(10);
      expect(retorno).to.be.a('string');
    });
    it('Conteúdo do retorno caso seja passado 10', () => {
      const retorno = whatIsThisNumber(10);
      expect(retorno).to.be.equals('positivo');
    });
    it('Tipo de retorno caso seja passado 100', () => {
      const retorno = whatIsThisNumber(100);
      expect(retorno).to.be.a('string');
    });
    it('Conteúdo do retorno caso seja passado 100', () => {
      const retorno = whatIsThisNumber(100);
      expect(retorno).to.be.equals('positivo');
    });
    it('Tipo de retorno caso seja passado 2.5', () => {
      const retorno = whatIsThisNumber(2.5);
      expect(retorno).to.be.a('string');
    });
    it('Conteúdo do retorno caso seja passado 2.5', () => {
      const retorno = whatIsThisNumber(2.5);
      expect(retorno).to.be.equals('positivo');
    });
    it('Tipo de retorno caso seja passado 500000000.2', () => {
      const retorno = whatIsThisNumber(500000000.2);
      expect(retorno).to.be.a('string');
    });
    it('Conteúdo do retorno caso seja passado 500000000.2', () => {
      const retorno = whatIsThisNumber(500000000.2);
      expect(retorno).to.be.equals('positivo');
    });
  });
  describe('Testa o retorno caso seja passado um número negativo', () => {
    it('Tipo de retorno', () => {
      const retorno = whatIsThisNumber(-10);
      expect(retorno).to.be.a('string');
    });
    it('Conteúdo do retorno caso seja passado um número negativo como parâmetro', () => {
      const retorno = whatIsThisNumber(-10);
      expect(retorno).to.be.equals('negativo');
    });
    it('Tipo de retorno caso seja passado -100', () => {
      const retorno = whatIsThisNumber(-100);
      expect(retorno).to.be.a('string');
    });
    it('Conteúdo do retorno caso seja passado -100', () => {
      const retorno = whatIsThisNumber(-100);
      expect(retorno).to.be.equals('negativo');
    });
    it('Tipo de retorno caso seja passado -2.5', () => {
      const retorno = whatIsThisNumber(-2.5);
      expect(retorno).to.be.a('string');
    });
    it('Conteúdo do retorno caso seja passado -2.5', () => {
      const retorno = whatIsThisNumber(-2.5);
      expect(retorno).to.be.equals('negativo');
    });
    it('Tipo de retorno caso seja passado -500000000.2', () => {
      const retorno = whatIsThisNumber(-500000000.2);
      expect(retorno).to.be.a('string');
    });
    it('Conteúdo do retorno caso seja passado -500000000.2', () => {
      const retorno = whatIsThisNumber(-500000000.2);
      expect(retorno).to.be.equals('negativo');
    });
  });
});