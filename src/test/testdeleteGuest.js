process.env.NODE_ENV = 'test';
let chai = require('chai')

const Guests = require("../Data/guest");
chai.use(require("chai-http"));

const validGuestData = {
    "wneID": "247-23",
    "residency": "resident",
    "grad_year": 2024,
    "grad": "UG",
    "date": "04-15-2023"
};
// The actual guest to test using valid or invalid property values.
// Important: copy by values using spread operator. If you copy by ref to validGuestData and then mutate guestData,
// JS will not respect the const-ness of validGuestData
let guestData = {...validGuestData};




describe('test DELETE /guest/WNEID', () => {
    it("200 OK", (done) => {

        chai.request('http://localhost:10350')
        .post('/guests')
        .send(guestData)
        .end((err, res) => {
            chai.expect(err).to.be.null
            if (err) {
                return done(err);
            }
        });

        chai.request('http://localhost:10350')
            .delete('/guests/246-23')
            .end((error, response) => {
                if(error){
                    console.log(error)
                    return done(error)
                } else {
                    chai.assert.equal(response.status, 200)
                    done();
                }
            });
    })

    it("404 not found", (done) => {
        chai.request('http://localhost:10350')
            .delete('/guests/123-23')
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