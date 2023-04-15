const chai = require('chai');
const chaiHttp = require('chai-http');
const should = require('chai').should();

chai.use(chaiHttp);

// a set of valid guest data
const validGuestData = {
    "wneID": "246-23",
    "residency": "resident",
    "grad_year": 2024,
    "grad": "UG",
    "date": "04-15-2023"
};
// The actual guest to test using valid or invalid property values.
// Important: copy by values using spread operator. If you copy by ref to validGuestData and then mutate guestData,
// JS will not respect the const-ness of validGuestData
let guestData = {...validGuestData};

describe('Create Guest Endpoint', () => {
    it('creates a new guest when valid data is provided', (done) => {
        chai.request('http://localhost:10350')
        .post('/guests')
        .send(guestData)
        .end((err, res) => {
            chai.expect(err).to.be.null;
            if (err) {
                return done(err);
            }

            res.should.have.status(201);
            res.should.have.header('Location', '/guests/246-23');
            res.body.should.be.an('object');
            res.body.should.have.property('wneID').equal('246-23');
            res.body.should.have.property('residency').equal('resident');
            res.body.should.have.property('grad_year').equal(2024);
            res.body.should.have.property('grad').equal("UG");
            res.body.should.have.property('date').equal("04-15-2023");
            done();
        });
    });

    it('returns a 409 error if the guest already exists', (done) => {
        chai.request('http://localhost:10350')
        .post('/guests')
        .send(guestData)
        .end((err, res) => {
            chai.expect(err).to.be.null;
            if (err) {
                return done(err);
            }

            res.should.have.status(409);
            res.body.should.be.an('object');
            res.body.should.have.property('status').equal(409);
            res.body.should.have.property('error').equal('Conflict');
            res.body.should.have.property('message').equal('Guest already exists');
            done();
        });
    });

    // Remove the guest so you can repeatedly call `npm run test` without running `commands/rebuild.sh` to remove the conflicting guest.
    // Delete this one it() when migrating unit tests into CI pipeline.
    it('...remove the guest', (done) => {
        const guestID = guestData.wneID;
        chai.request('http://localhost:10350')
        .delete(`/guests/${guestID}`)
        .end((err, res) => {
            done();
        });
    });

    it('returns 400 error response if guest data is invalid', (done) => {
        guestData = {...validGuestData};
        guestData.wneID = '123456X'; // does not conform to wneID pattern
        chai.request('http://localhost:10350')
        .post('/guests')
        .send(guestData)
        .end((err, res) => {
            chai.expect(err).to.be.null;
            if (err) {
                return done(err);
            }

            res.should.have.status(400);
            res.should.have.own.property('body').with.own.property('errors');
            res.body.errors.should.have.members;
            res.body.errors[0].should.have.own.property('errorCode').equal('pattern.openapi.validation');
        });

        guestData = {...validGuestData};
        guestData.resident = 5; // invalid property type
        chai.request('http://localhost:10350')
        .post('/guests')
        .send(guestData)
        .end((err, res) => {
            chai.expect(err).to.be.null;
            if (err) {
                return done(err);
            }

            res.should.have.status(400);
            res.should.have.own.property('body').with.own.property('errors').that.has.own.members;
            res.body.errors[0].should.have.own.property('errorCode').equal('type.openapi.validation');
        });

        done();
    });
});
