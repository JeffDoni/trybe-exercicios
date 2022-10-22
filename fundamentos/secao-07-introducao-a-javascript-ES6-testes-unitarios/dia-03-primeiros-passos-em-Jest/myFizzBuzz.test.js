
const myFizzBuzz = require('./myFizzBuzz.js');

describe('Função myFizzBuzz', () => {
it('myFizzBuzz(15), retorne FizzBuzz', () => {
expect(myFizzBuzz(15)).toBe('fizzbuzz');
expect(myFizzBuzz(9)).toBe('fizz');
expect(myFizzBuzz(10)).toBe('buzz');
    })

})