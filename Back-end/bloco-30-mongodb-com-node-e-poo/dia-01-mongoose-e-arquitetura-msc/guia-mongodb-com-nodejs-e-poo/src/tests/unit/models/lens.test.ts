import { expect } from 'chai';
import sinon from 'sinon';
import LensModel from '../../../models/Lens';
import { Model } from 'mongoose';
import { arrayLensMock, lensMock, lensMockWithId, deletedLens } from '../../mocks/lensModck';
import connectToDatabase from "../../../models/Connection";

describe('Lens Model', () => {

  const lensModel = new LensModel();

	before(async () => {
		sinon.stub(Model, 'create').resolves(lensMockWithId);
		sinon.stub(Model, 'findOne').resolves(lensMockWithId);
    sinon.stub(Model, 'find').resolves(arrayLensMock);
    // sinon.stub(Model, 'findByIdAndDelete').resolves(deletedLens);
		await connectToDatabase();
	});

	after(() => {
		sinon.restore();
	});

  describe('Cria lens', () => {
		it('Criado com sucesso', async () => {
			const newLens = await lensModel.create(lensMock);
			expect(newLens).to.be.deep.equal(lensMockWithId);
		});
	});

	describe('Busca lens por id', () => {
		it('Id encontrado', async () => {
			const lensFound = await lensModel.readOne('62cf1fc6498565d94eba52cd');
			expect(lensFound).to.be.deep.equal(lensMockWithId);
		});

		it('Id não encontrado', async () => {
			try {
				await lensModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

  describe('Busca todos os lens', () => {
		it('Retorna todos os lens', async () => {
			const lensFound = await lensModel.read();
			expect(lensFound).to.be.deep.equal(arrayLensMock);
		});
	});

  describe('Deleta lens', () => {
		it('Lens excluído', async () => {
			const lensDeleted= await lensModel.destroy('62cf1fc6498565d94eba52cd');
			expect(lensDeleted).to.be.deep.equal(deletedLens);
		});

		it('Id não encontrado', async () => {
			try {
				await lensModel.destroy('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

});
