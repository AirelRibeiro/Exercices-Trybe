// ./src/tests/unit/models/frame.test.ts

import { expect } from 'chai';
import sinon from 'sinon';
import FrameModel from '../../../models/Frame';
import { Model } from 'mongoose';
import { arrayFrameMock, frameMock, frameMockWithId, deletedFrame } from '../../mocks/frameMock';

describe('Frame Model', () => {
  const frameModel = new FrameModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(frameMockWithId);
		sinon.stub(Model, 'findOne').resolves(frameMockWithId);
    sinon.stub(Model, 'find').resolves(arrayFrameMock);
    sinon.stub(Model, 'findByIdAndDelete').resolves(deletedFrame);
	});

	after(() => {
		sinon.restore();
	});

  describe('Cria frame', () => {
		it('Criado com sucesso', async () => {
			const newFrame = await frameModel.create(frameMock);
			expect(newFrame).to.be.deep.equal(frameMockWithId);
		});
	});

	describe('Busca frame por Id', () => {
		it('Frame encontrado', async () => {
			const framesFound = await frameModel.readOne('62cf1fc6498565d94eba52cd');
			expect(framesFound).to.be.deep.equal(frameMockWithId);
		});

		it('Id não encontrado', async () => {
			try {
				await frameModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

  describe('Busca todas as frames', () => {
		it('Retorna todas as frames', async () => {
			const framesFound = await frameModel.read();
			expect(framesFound).to.be.deep.equal(arrayFrameMock);
		});
	});

  describe('Deleta frame', () => {
		it('Frame excluído', async () => {
			const framesDeleted= await frameModel.destroy('62cf1fc6498565d94eba52cd');
			expect(framesDeleted).to.be.deep.equal(deletedFrame);
		});

		it('Id não encontrado', async () => {
			try {
				await frameModel.destroy('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

});
