const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const Guests = require('../Data/guest');
const MessageBroker = require('../lib/messageBroker');

chai.use(chaiHttp);

describe('replaceGuest endpoint', () => {


  it('should update the guest and return 200 with the updated guest data', async () => {
    const updatedGuestData = {
      "wneID": "246-23",
      "residency": "resident",
      "grad_year": 2024,
      "grad": "G",
      "date": "04-15-2023"
    };
    const res = await chai.request('http://localhost:10350')
      .put(`/guests/1234567`)
      .send(updatedGuestData);

    // Check that the response is correct
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal(updatedGuest);
    expect(res.headers.location).to.equal(`/guests/1234568`);
  });

  it('should return 404 if the guest does not exist', async () => {
    const updatedGuestData = {
      "wneID": "246-23",
      "residency": "resident",
      "grad_year": 2024,
      "grad": "G",
      "date": "04-15-2023"
    };
    const res = await chai.request('http://localhost:10350')
      .put(`/guests/246-23`)
      .send(updatedGuestData);

    // Check that the response is correct
    expect(res.status).to.equal(404);
  });

})
