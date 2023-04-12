process.env.NODE_ENV = 'test';
let chai = require('chai')
let chaiHttp = require('chai-http');
const Guests = require("../Data/guest");

chai.use(chaiHttp)

describe('test DELETE /guest/WSUID', () => {
    it("200 OK", (done) => {
        chai.request('http://localhost:10350')
            .delete('/guests/1234567')
            .end((error, response) => {
                if(error){
                    console.log(error)
                    done(error)
                } else {
                    chai.assert.equal(response.status, 200, 'Response was not okay')
                    console.log(response.body)
                    done()
                }
            })
    })

    it("404 not found", (done) => {
        chai.request('http://localhost:10350')
            .delete('/guests/1234568')
            .end((error, response) => {
                if(error){
                    console.log(error)
                    done(error)
                } else {
                    chai.assert.equal(response.status, 404, 'Response was found')
                    console.log(response.body)
                    done()
                }
            })
    })
});
