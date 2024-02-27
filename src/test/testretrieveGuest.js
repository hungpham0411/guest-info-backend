process.env.NODE_ENV = 'test';
let chai = require('chai')

const Guests = require("../Data/guest");



describe('test GET /guests/WNEID', () => {
    it("200 OK", (done) => {
        chai.request('http://localhost:10350')
            .get('/guests/123-23')
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
            .get('/guests/123-23')
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
