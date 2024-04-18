process.env.NODE_ENV = 'test';
let chai = require('chai')

const Visits = require("../Data/visit");

chai.use(require("chai-http"));
//will be able to retrive visits by date range
describe('test GET /visits/XX-XX-XXXX+XX-XX-XXXX', () => {
    it("200 OK", (done) => {
        chai.request('http://localhost:date_range')
            .get('/visits/04-12-2023+05-25-2023')
            .end((error, response) => {
                if(error){
                    console.log(error)
                    done(error)
                } else {
                    chai.assert.equal(response.status, 200, 'Guest retrieved')
                    console.log(response.BNMID)
                    done()
                }
            })
    })

    
});
