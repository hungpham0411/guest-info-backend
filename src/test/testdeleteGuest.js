process.env.NODE_ENV = 'test';
let chai = require('chai')
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Test deleting guests using their ID', () => {
    it("Guest found and deleted", (done) => {
        chai.request('http://localhost:10350')
            .delete('/guests/AW0123456')
            .end((error, response) => {
                if(error){
                    console.log(error)
                    return done(error)
                } else {
                    chai.assert.equal(response.status, 200)
                    done();
                }
            })
    })

    it("Guest not found", (done) => {
        chai.request('http://localhost:10350')
            .delete('/guests/AW0123456')
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