const { it } = require('jest-circus')
const { describe } = require('yargs')
const searchEmployee = require('./bonus')

describe('Testes da funçãi searchEmployee', () => {
    it('Verifica se a função existe', () => {
        expect(typeof searchEmployee).toBe('function');
    })
})