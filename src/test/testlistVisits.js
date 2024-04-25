process.env.NODE_ENV = 'test';
let chai = require('chai')
chai.use(require("chai-http"));

describe('testlistVisits /visits', () => {
    it("Should return 200 and list all visits", (done) => {
        chai.request('http://localhost:10350')
            .get('/visits')
            .end((error, response) => {
                if(error){
                    console.log(error)
                    done(error)
                } else {
                    chai.assert.equal(response.status, 200, 'List of visits was displayed')
                    //console.log(response.body)
                    done()
                }
            })
    })
});
