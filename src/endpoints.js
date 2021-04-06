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
    try {
      const id = request.params.studentID;
      const guest = await Guests.getOne(id);
      if (guest !== null) {
        response.status(200).json(guest);
      } else {
        response.status(404).json({
          status: 404,
          error: "Guest not found",
          message: "StudentID does not exist"
        })
      }
    } catch (e) {
      logger.error("Endpoints.getGuestData", e);
      response.status(500).json({
        status: 500,
        error: "Internal Server Error",
        message: "See server's logs."
      })
    }
  }
}

module.exports = Endpoints;
