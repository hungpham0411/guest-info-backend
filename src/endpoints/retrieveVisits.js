"use strict";
const logger = require("../lib/logger");
const Visits = require("../Data/visit");

const retrieveVisits = {
    method: 'get',
    path: '/visits/:date',
    async handler(request, response) {
    try {
        const date = request.params.date.split("+");
        const start_date = date[0];
        const end_date = date[1];
        let visits = await Visits.getAll();
        let visits_in_range = [];
        for (const visit of visits) {
            if (new Date(visit["date"]).getTime() >= new Date(start_date).getTime() && 
                new Date(visit["date"]).getTime() <= new Date(end_date).getTime()) {
                visits_in_range.push(visit);
            } 
        }
        response.status(200).json(visits_in_range);
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
