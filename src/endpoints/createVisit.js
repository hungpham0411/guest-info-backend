"use strict";
const logger = require("../lib/logger");
const Guests = require("../Data/guest")
const Visits = require("../Data/visit");

const createVisit = {
  method: 'post',
  path: '/visits',
  async handler(request, response) {
    try {
      const visitData = request.body;
      if ( await Guests.existsInDB(visitData.BNMID) === true) {
        const visit = await Visits.create(visitData);
        const resourceUri = `${request.originalUrl}/${visit.BNMID}`;
        delete visit["_id"]; // do not return the mongoID
        response.status(201).location(resourceUri).json(visit);
      } else {
        response.status(409).json({
          status: 409,
          error: "Conflict",
          message: "Guest does not exist"
        });
      }
    } catch (e) {
      logger.error("Endpoints.createVisit", e);
      response.status(500).json({
        status: 500,
        error: "Internal Server Error",
        message: "See server's logs."
      })
    }
  }
};

module.exports = createVisit