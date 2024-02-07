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
        let visits = await Visits.getAll();
        let visits_in_range = [];
        let current_time = new Date();
        let last_week_time = new Date(current_time.getDate() - 7);
        for (const visit of visits) {
            if (new Date(visit.date).getTime() >= last_week_time.getTime() && 
                new Date(visit.date).getTime() <= current_time.getTime()) {
                if (visit.wneID == id) {
                  visits_in_range.push(visit)
                }
            } 
        }
        guest.recent_visit_count = visits_in_range.length;
        response.status(200).json(guest);
      } else {
        response.status(404).json({
          status: 404,
          error: "Guest not found",
          message: "wneID does not exist"
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
