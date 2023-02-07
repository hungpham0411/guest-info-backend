"use strict";
const logger = require("../lib/logger");
const { API_VERSION } = require("../lib/config");

const getAPIVersion = {
  method: 'get',
  path: '/version',
  async handler(request, response) {
    try {
      response.status(200).send(API_VERSION);
    } catch (e) {
      logger.error("Endpoints.getAPIVersion", e);
      response.status(500).json({
        status: 500,
        error: "Internal Server Error",
        message: "See server's logs."
      })
    }
  }
};

module.exports = getAPIVersion
