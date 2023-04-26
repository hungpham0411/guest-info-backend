"use strict";
const logger = require("../lib/logger");
const Visits = require("../Data/visit");

const listVisits = {
  method: 'get',
  path: '/visits',
  async handler(request, response) {
    try {
      let visits = await Visits.getAll();
      response.status(200).json(visits);
    } catch (e) {
      logger.error("Endpoints.listVisits", e);
      response.status(500).json({
        status: 500,
        error: "Internal Server Error",
        message: "See server's logs."
      })
    }
  }
};

module.exports = listVisits
