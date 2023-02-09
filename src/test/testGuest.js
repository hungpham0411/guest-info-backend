process.env.NODE_ENV = 'test';

const chai = require('chai');

describe('test POST /guests', () => {
    it("example: equal integers should be equal", () => {
        const result = 14+1;
        chai.assert.strictEqual(result, 15, 'identical integers are equal');
        chai.assert.equal(result, '15', '<string> \'15\' equals <integer> 15');
        chai.assert.notStrictEqual(result, '15', 'different types are equal but not identical');
    })
});
