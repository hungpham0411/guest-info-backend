const chai = require('chai');
const chaiHttp = require('chai-http');
const should = require('chai').should();

chai.use(chaiHttp);

// a set of valid guest data
const validGuestData = {
    "wsuID": "1234561",
    "resident": true,
    "zipCode": "01602",
    "unemployment": false,
    "assistance": {
        "socSec": false,
        "TANF": false,
        "finAid": false,
        "other": false,
        "SNAP": false,
        "WIC": false,
        "breakfast": false,
        "lunch": false,
        "SFSP": false
    },
    "guestAge": 42,
    "numberInHousehold": 4
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
            res.should.have.header('Location', '/guests/1234561');
            res.body.should.be.an('object');
            res.body.should.have.property('wsuID').equal('1234561');
            res.body.should.have.property('zipCode').equal('01602');
            res.body.should.have.property('guestAge').equal(42);
            res.body.should.have.property('numberInHousehold').equal(4);
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
        const guestID = guestData.wsuID;
        chai.request('http://localhost:10350')
        .delete(`/guests/${guestID}`)
        .end((err, res) => {
            done();
        });
    });

    it('returns 400 error response if guest data is invalid', (done) => {
        guestData = {...validGuestData};
        guestData.wsuID = '123456X'; // does not conform to wsuID pattern
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
