const { expect } = require('chai');
const { readFile } = require('../readFile.js')
const sinon = require('sinon');
const fs = require('fs').promises;

describe('Chama a função "readFile"', () => {
	describe('quando o arquivo é lido com sucesso', () => {
		const FILE_CONTENT = 'Turma 11 é 10'

		before(() => {
			sinon.stub(fs, 'readFile').resolves(FILE_CONTENT)
		})
		after(() => {
			fs.readFile.restore()
		})

		describe('a resposta', () => {
			it('é uma string', async () => {
				const resposta = await readFile('teste.txt')
				expect(resposta).to.be.a('string') // chai - to.be.a;
			})
			it('é igual ao conteúdo do arquivo', async () => {})
			const resposta = await readFile('teste.txt')
			expect(resposta).to.be.a(FILE_CONTENT) // chai - to.be.a;

		})
	})
	describe('quando ocorrer um erro na leitura do arquivo', () => {
		describe('a resposta', () => {
			it('é igual a "null"', async () => {
				const resposta = await readFile('arquivoInexistente.txt')
				expect(resposta).to.be.null;
			})

		})
	})
})