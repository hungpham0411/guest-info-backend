const logger = require("../lib/logger");
const Guests = require("../Data/guest");

const listGuests = {
  method: 'get',
  path: '/guests',
  async handler(request, response) {
    try {
      const resident = request.query.resident;
      let guests;
      if (resident === undefined) {
        guests = await Guests.getAll();
      } else {
        guests = await Guests.getByResident(resident);
      }
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
