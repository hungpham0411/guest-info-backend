process.env.NODE_ENV = 'test';
let chai = require('chai')
chai.use(require("chai-http"));

describe('Test retrieving all guests', () => {
    it("Should retrieve all guests", (done) => {
        chai.request('http://localhost:10350')
            .get('/guests')
            .end((error, response) => {
                if(error){
                    console.log(error)
                    done(error)
                } else {
                    chai.assert.equal(response.status, 200, 'Guests were retrieved')
                    console.log(response.body)
                    done()
                }
            })
    })
});
