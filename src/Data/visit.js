/**
 * visit.js is responsible for manipulating the visits collection in the
 * Mongo database. In architecture parlance, it is a Data Access Object.
 * It abstracts away the details of interact with the database.
 */
"use strict";
const Database = require("../lib/database");
const logger = require("../lib/logger");
const dev = true;

class Visits {
    static async existsInDB(id) {
        try {
            const visitsCollection = await getVisitsCollection();          // { projection: { _id: 0 } } does not return _id field
            let visit = await visitsCollection.findOne({ wneID: id }, { projection: { _id: 0 } });
            console.log(visit !== null);
            return visit !== null;
        } catch (e) {
            logger.error("VisitsAccessObject.existsInDB", e);
            throw {
                code: 500,
                error: "Internal Server Error",
                caused_by: e,
            };
        }
    }

    static async getAll() {
        try {
            const visitsCollection = await getVisitsCollection();
            // { projection: { _id: 0 } } does not return _id field
            const visit_cursor = await visitsCollection.find({}, { projection: { _id: 0 } });
            let visits = await visit_cursor.toArray();
            return visits;
        } catch (e) {
            logger.error("VisitsAccessObject.getAll", e);
            throw {
                code: 500,
                error: "Internal Server Error",
                caused_by: e,
            };
        }
    }

    static async create(visitData) {
        const visitsCollection = await getVisitsCollection();
        const result = await visitsCollection.insertOne(visitData);
        console.log(result);
        let visit = await visitsCollection.findOne({ _id: result.insertedId }, { projection: { _id: 0 } });
        return visit;
    }
 
}

async function getVisitsCollection() {
    const database = await Database.get();
    return database.db("guests").collection("visits")
}

module.exports = Visits;
