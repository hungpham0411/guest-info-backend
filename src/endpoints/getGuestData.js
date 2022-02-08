const logger = require("../lib/logger");
const Guests = require("../Data/guest");
const mongo = require("mongodb");

/** 
 * endpoints.js is responsible for responding to requests for each endpoint in the REST API.
 * @type {import("../lib/mount-endpoints").EndpointObject} 
 * */
const getGuestData = {
  method: 'get',
  path: '/guest-info/:id',
  async handler(request, response) {
    try {
      const id = request.params.id;
      //TODO: convert id to Mongodb hex id
      const guest = await Guests.getOne(id);
      response.status(200).json(guest !== null ? guest : {});
    } catch (e) {
      logger.error("Endpoints.getGuestData", e);
      response.status(500).json({
        status: 500,
        error: "Internal Server Error",
        message: "See server's logs."
      })
    }
  }
};

module.exports = getGuestData