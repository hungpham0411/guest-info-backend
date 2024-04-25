const chai = require('chai')
const expect = chai.expect
chai.use(require("chai-http"));

const validGuestData = {
    "BNMID": "AW0123456",
    "Resident": "resident",
    "Grad_Year": 2024,
    "Grad": "UG",
    "Date": "04-15-2023",
    "Year_Issued": 2022
};

describe('Test replacing guest data', () => {

    it('creates a new guest for replace test', (done) => {
        chai.request('http://localhost:10350')
        .post('/guests')
        .send(validGuestData)
        .end((err, res) => {
            chai.expect(err).to.be.null
            if (err) {
                return done(err);
            }
            done();
        });
    });
    it('should update the guest and return 200 with the updated guest data', async () => {
        const updatedGuestData = {
            "BNMID": "AW0123456",
            "Resident": "resident",
            "Grad_Year": 2025,
            "Grad": "G",
            "Date": "04-15-2023",
            "Year_Issued": 2022,
        }
        const res = await chai 
            .request('http://localhost:10350')
            .put(`/guests/AW0123456`)
            .send(updatedGuestData)

        // Check that the response is correct
        expect(res.status).to.equal(200)
        expect(res.body).to.deep.equal(updatedGuestData)
        expect(res.headers.location).to.equal(`/guests/AW0123456`)
    })

    it('should return 404 if the guest does not exist', async () => {
        const updatedGuestData = {
            BNMID: 'AW7890123',
            Resident: 'resident',
            Grad_Year: 2024,
            Grad: 'G',
            Date: '04-15-2023',
            Year_Issued: 2022,
        }
        const res = await chai
            .request('http://localhost:10350')
            .put(`/guests/AW7890123`)
            .send(updatedGuestData)

        // Check that the response is correct
        expect(res.status).to.equal(404)
    })
})
