"use strict";
const logger = require("../lib/logger");
const Guests = require("../Data/guest");
const MessageBroker = require("../lib/messageBroker");

const replaceGuest = {
  method: 'put',
  path: '/guests/:id',
  async handler(request, response) {
    try {
      const id = request.params.id;
      const guestData = request.body;

      if ( await Guests.existsInDB(id) ) {
        // update mongodb
        await Guests.update(id, guestData);
        const guest = await Guests.getOne(id);
        
        // send rabbitmq queue 
        MessageBroker.sendMessage('guest-info', guest);
        
        // http status
        const resourceUri = request.originalUrl
        response.status(200).location(resourceUri).json(guest);
      } else {
        response.status(404).json({
          status: 404,
          error: "Guest not found",
          message: "BNMID does not exist"
        });
      }
    } catch (e) {
      logger.error("Endpoints.replaceGuest", e);

      response.status(500).json({
        status: 500,
        error: "Internal Server Error",
        message: "See server's logs."
      });
    }
  }
}

module.exports = replaceGuest;
