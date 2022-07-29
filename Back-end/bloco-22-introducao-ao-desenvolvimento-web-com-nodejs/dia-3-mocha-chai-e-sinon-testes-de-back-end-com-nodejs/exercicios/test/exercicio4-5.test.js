const { expect } = require('chai');
const writeFile = require('../exercicio4-5');
const fs = require('fs');
const sinon = require('sinon');

describe('Testa a função writeFile', () => {
  describe('O retorno', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync');
    });
  
    after(() => {
      fs.writeFileSync.restore();
    });
    it('Retorno é uma "string"', () => {
      const resposta = writeFile('teste.txt', 'conteúdo');

      expect(resposta).to.be.a('string');
    });

    it('Conteúdo é "Ok"', () => {
      const resposta = writeFile('teste.txt', 'conteúdo');

      expect(resposta).to.be.equals('Ok');
    });
  });
});