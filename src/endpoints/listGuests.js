"use strict";
const logger = require("../lib/logger");
const Guests = require("../Data/guest");

const listGuests = {
  method: 'get',
  path: '/guests',
  async handler(request, response) {
    try {
      let guests;
        guests = await Guests.getAll();
      response.status(200).json(guests);
    } catch (e) {
      logger.error("Endpoints.listGuests", e);
      response.status(500).json({
        status: 500,
        error: "Internal Server Error",
        message: "See server's logs."
      })
    }
  }
};

module.exports = listGuests
