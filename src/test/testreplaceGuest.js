const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const Guests = require('../Data/guest')
const MessageBroker = require('../lib/messageBroker')

chai.use(chaiHttp)

describe('replaceGuest endpoint', () => {
    it('should update the guest and return 200 with the updated guest data', async () => {
        const updatedGuestData = {
            bnmID: 'AW7890123',
            residency: 'resident',
            grad_year: 2024,
            grad: 'G',
            date: '04-15-2023',
        }
        const res = await chai
            .request('http://localhost:10350')
            .put(`/guests/AW7890123`)
            .send(updatedGuestData)

        // Check that the response is correct
        expect(res.status).to.equal(200)
        expect(res.body).to.deep.equal(updatedGuest)
        expect(res.headers.location).to.equal(`/guests/AW7890123`)
    })

    it('should return 404 if the guest does not exist', async () => {
        const updatedGuestData = {
            bnmID: 'AW7890123',
            residency: 'resident',
            grad_year: 2024,
            grad: 'G',
            date: '04-15-2023',
        }
        const res = await chai
            .request('http://localhost:10350')
            .put(`/guests/AW7890123`)
            .send(updatedGuestData)

        // Check that the response is correct
        expect(res.status).to.equal(404)
    })
})
