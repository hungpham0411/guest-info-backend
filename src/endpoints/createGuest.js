"use strict";
const logger = require("../lib/logger");
const Guests = require("../Data/guest");

const createGuest = {
  method: 'post',
  path: '/guests',
  async handler(request, response) {
    try {
      const guestData = request.body;
      if ( await Guests.existsInDB(request.body.BNMID) === false ) {
        const guest = await Guests.create(guestData);
        const resourceUri = `${request.originalUrl}/${guest.BNMID}`;
        delete guest["_id"]; // do not return the mongoID
        response.status(201).location(resourceUri).json(guest);
      } else {
        response.status(409).json({
          status: 409,
          error: "Conflict",
          message: "Guest already exists"
        });
      }
    } catch (e) {
      logger.error("Endpoints.createGuest", e);
      response.status(500).json({
        status: 500,
        error: "Internal Server Error",
        message: "See server's logs."
      })
    }
  }
};

module.exports = createGuest
