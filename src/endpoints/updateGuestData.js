const logger = require("../lib/logger");
const Guests = require("../Data/guest")

/** 
 * endpoints.js is responsible for responding to requests for each endpoint in the REST API.
 * @type {import("../lib/mount-endpoints").EndpointObject} 
 */
const updateGuestData = {
  method: 'put',
  path: '/guest/:id',
  async handler(request, response) {
    try {
      const id = request.params.id;
      const guestData = request.body;
      const guest = await Guests.update(id, guestData);
      const resourceUri = `${request.originalUrl}/${guest._id}`
      response.status(200).location(resourceUri).json(guest);
    } catch (e) {
      logger.error("Endpoints.updateGuestData", e);

      response.status(500).json({
        status: 500,
        error: "Internal Server Error",
        message: "See server's logs."
      });
    }
  }
}

module.exports = updateGuestData;