const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const Guests = require('../Data/guest');
const MessageBroker = require('../lib/messageBroker');

chai.use(chaiHttp);

describe('replaceGuest endpoint', () => {
  

  it('should update the guest and return 200 with the updated guest data', async () => {
    const updatedGuestData = {
        "wsuID": "1234568",
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
        "wsuID": "1234568",
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
    const res = await chai.request('http://localhost:10350')
      .put(`/guests/1234561`)
      .send(updatedGuestData);

    // Check that the response is correct
    expect(res.status).to.equal(404);
  });

})
