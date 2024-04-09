"use strict";
const logger = require("../lib/logger");
const Guests = require("../Data/guest");

const retrieveGuest = {
  method: 'get',
  path: '/guests/:id',
  async handler(request, response) {
    try {
      const id = request.params.id;
      const guest = await Guests.getOne(id);
      if (guest !== null) {
        response.status(200).json(guest);
      } else {
        response.status(404).json({
          status: 404,
          error: "Guest not found",
          message: "BNMID does not exist"
        });
      }
    } catch (e) {
      logger.error("Endpoints.retrieveGuest", e);
      response.status(500).json({
        status: 500,
        error: "Internal Server Error",
        message: "See server's logs."
      })
    }
  }
};

module.exports = retrieveGuest
