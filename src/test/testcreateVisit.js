process.env.NODE_ENV = 'test';
let chai = require('chai');
const Visits = require("../Data/visit");
chai.use(require("chai-http"));

const visitData = {
    "BNMID": "AW0123456",
    "Date": "04-15-2023"
};

const malformedVisitData = {
    "WNEID": "AW0123456",
    "Date": "04-15-2023"
};

const conflictVisitData = {
    "BNMID": "AW0123457",
    "Date": "04-15-2023"
};

describe('testcreateVisit', () => {
    it("Should return 201 and create visit", (done) => {
        chai.request('http://localhost:10350')
        .post('/visits')
        .send(visitData)
        .end((error, response) => {
            if(error){
                console.log(error)
                //console.log(response.body)
                done(error)
            } else {
                console.log(response.body.BNMID)
                chai.assert.equal(response.status, 201, 'visit was created')
                chai.assert.equal(response.body.BNMID, 'AW0123456', 'visit was created')
                chai.assert.equal(response.body.Date, '04-15-2023', 'visit was created')
                //console.log(response.body) 
                done()
            }
        })
    })

    it("Should return 400: Malformed Request", (done) => {
        chai.request('http://localhost:10350')
        .post('/visits')
        .send(malformedVisitData)
        .end((error, response) => {
            if(error){
                console.log(error)
                done(error)
            } else {
                chai.assert.equal(response.status, 400, 'Malformed BNMID entered')
                done()
            }
        })
    })

    it("Should return 409: Conflict", (done) => {
        chai.request('http://localhost:10350')
        .post('/visits')
        .send(conflictVisitData)
        .end((error, response) => {
            if(error){
                console.log(error)
                done(error)
            } else {
                chai.assert.equal(response.status, 409, "Creating visit when guest doesn't exist")
                //console.log(response.body)
                done()
            }
        })
    })
    
    it("Should return 500: Server error", (done) => {
        chai.request('http://localhost:10350')
        .post('/visits')
        .send(conflictVisitData)
        .end((error, response) => {
            if(error){
                console.log(error)
                done(error)
            } else {
                chai.assert.equal(response.status, 500, "Server error")
                //console.log(response.body)
                //supposed to fail
                done()
            }
        })
    })
});
