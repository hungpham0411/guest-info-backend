/**
 * endpoints.js is responsible for responding to requests for each endpoint
 * in the REST API.
 */

const logger = require("./logger");
const Guests = require("./guest")

class Endpoints {
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

  /**
   * GET /get-guest-info/{studentID}
   *
   * Documented in openapi.yaml
   */
  static async getGuestData(request, response) {
    // TODO Implement
    // See example:
    // https://gitlab.com/LibreFoodPantry/training/spikeathons/winter-2021/stoney-manage-items/backend/-/tree/main/src
  }
}

module.exports = Endpoints;
