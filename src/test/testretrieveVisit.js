process.env.NODE_ENV = 'test';
let chai = require('chai')

const Visits = require("../Data/visit");

chai.use(require("chai-http"));

describe('test GET /visits/', () => {
    it("200 OK", (done) => {
        chai.request('http://localhost:')
            .get('/visits/')
            .end((error, response) => {
                if(error){
                    console.log(error)
                    done(error)
                } else {
                    chai.assert.equal(response.status, 200, 'Visits retrieved')
                    console.log(response.BNMID)
                    done()
                }
            })
    })

    it("404 not found", (done) => {
        chai.request('http://localhost:10350')
            .get('/guests/AW7890199')
            .end((error, response) => {
                if(error){
                    console.log(error)
                    done(error)
                } else {
                    chai.assert.equal(response.status, 404, 'Response was not okay')
                    console.log(response.body)
                    done()
                }
            })
    })

    
});
