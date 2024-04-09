"use strict";
const logger = require("../lib/logger");
const Visits = require("../Data/visit");

const retrieveVisits = {
    method: 'get',
    path: '/visits/:date_range',
    async handler(request, response) {
    try {
        const date_range = request.params.date_range.split("+");
        const start_date = date_range[0];
        const end_date = date_range[1];
        let visits = await Visits.getAll();
        let visits_in_range = [];
        for (const visit of visits) {
            if (new Date(visit.Date).getTime() >= new Date(start_date).getTime() && 
                new Date(visit.Date).getTime() <= new Date(end_date).getTime()) {
                visits_in_range.push(visit)
            } 
        }
        let total = {};
        total["Total Visits"] = visits_in_range.length;
        visits_in_range.push(total);

        response.status(200).json({
            visits: visits_in_range,
        });
    } catch (e) {
        logger.error("Endpoints.retrieveVisits", e);
        response.status(500).json({
            status: 500,
            error: "Internal Server Error",
            message: "See server's logs."
        })
      }
    }
};

module.exports = retrieveVisits
