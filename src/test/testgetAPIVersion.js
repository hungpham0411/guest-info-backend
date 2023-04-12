process.env.NODE_ENV = 'test';
const chai = require('chai');
const should = require('chai').should();
const chaiHttp = require('chai-http');
const Guests = require("../Data/guest");
const apiVersion = require('../lib/config').API_VERSION;

chai.use(chaiHttp)

describe('test GET /version', () => {
    it("200 OK", (done) => {
        chai.request('http://localhost:10350')
            .get('/version')
            .end((error, response) => {
                chai.expect(error).to.be.null;
                chai.expect(response).to.not.be.null;

                response.should.have.status(200);

                // expect version to be in range ['0.0.0', '99.99.99']
                response.should.have.a.property('text').with.length.above(4).and.below(9);
                response.text.should.equal(apiVersion);
                done();
            })
    })
});
