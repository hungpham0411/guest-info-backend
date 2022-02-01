/**
 * endpoints.js is responsible for responding to requests for each endpoint
 * in the REST API.
 */

 const logger = require("../lib/logger");
 const Guests = require("../Data/guest")

 module.exports = {

 /**
   * PUT /update-guest-info/{studentID}
   *
   * Documented in openapi.yaml
   */
    static async updateGuestData(request, response) {
    try {
      const guestData = request.body;
      const guest = await Guests.update(guestData);
      const resourceUri = `${request.originalUrl}/${guest._id}`

      response.status(201).location(resourceUri).json(guest);
    } catch(e) {
      logger.error("Endpoints.updateGuestData", e);

      response.status(500).json({
        status: 500,
        error: "Internal Server Error",
        message: "See server's logs."
      });
    }
}
};