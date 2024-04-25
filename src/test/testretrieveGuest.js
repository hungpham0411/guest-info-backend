process.env.NODE_ENV = 'test';
let chai = require('chai')
chai.use(require("chai-http"));

describe('Test retrieving guest by ID', () => {
    it("200 OK", (done) => {
        chai.request('http://localhost:10350')
            .get('/guests/AW0123456')
            .end((error, response) => {
                if(error){
                    console.log(error)
                    done(error)
                } else {
                    chai.assert.equal(response.status, 200, 'Guest retrieved')
                    console.log(response.body)
                    done()
                }
            })
    })

    it("Test retrieving with guest with incorrect ID", (done) => {
        chai.request('http://localhost:10350')
            .get('/guests/AW0123455')
            .end((error, response) => {
                if(error){
                    console.log(error)
                    done(error)
                } else {
                    chai.assert.equal(response.status, 404, 'Guest was not found')
                    console.log(response.body)
                    done()
                }
            })
    })
});
