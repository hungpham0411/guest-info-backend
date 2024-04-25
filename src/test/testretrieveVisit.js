process.env.NODE_ENV = 'test';
let chai = require('chai')
chai.use(require("chai-http"));

describe('Rest retrieving visits by date', () => {
    it("should return 200 OK and retrieve visits", (done) => {
        chai.request('http://localhost:10350') 
            .get('/visits/04-12-2023+05-25-2023') 
            .end((error, response) => {
                if (error) {
                    console.log(error);
                    done(error);
                } else {
                    chai.assert.equal(response.status, 200, 'Visits retrieved');
                    //console.log(response.body);
                    done();
                }
            });
    });
});
