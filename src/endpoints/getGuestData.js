/**
 * endpoints.js is responsible for responding to requests for each endpoint
 * in the REST API.
 */

 const logger = require("../lib/logger");
 const Guests = require("../data/guest")

 module.exports = {
 /**
   * GET /get-guest-info/{studentID}
   *
   * Documented in openapi.yaml
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   */
   async getGuestData(request, response) {
    try {
      const id = request.params.studentID;
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