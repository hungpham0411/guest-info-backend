/**
 * guest.js is responsible for manipulating the guests collection in the
 * Mongo database. In architecture parlance, it is a Data Access Object.
 * It abstracts away the details of interact with the database.
 */
"use strict";
const Database = require("../lib/database");
const logger = require("../lib/logger");
const dev = true;

class Guests {

  static async existsInDB(id) {
    try {
      const guestsCollection = await getGuestsCollection();
      // { projection: { _id: 0 } } does not return _id field
      let guest = await guestsCollection.findOne({ BNMID: id }, { projection: { _id: 0 } });
      console.log(guest !== null);
      return guest !== null;
    } catch (e) {
      logger.error("GuestsAccessObject.existsInDB", e);
      throw {
        code: 500,
        error: "Internal Server Error",
        caused_by: e,
      };
    }
  }

  static async getAll() {
    try {
      const guestsCollection = await getGuestsCollection();
      // { projection: { _id: 0 } } does not return _id field
      const guest_cursor = await guestsCollection.find({}, { projection: { _id: 0 } });
      let guests = await guest_cursor.toArray();
      return guests;
    } catch (e) {
      logger.error("GuestsAccessObject.getAll", e);
      throw {
        code: 500,
        error: "Internal Server Error",
        caused_by: e,
      };
    }
  }

  static async getOne(id) {
    try {
      const guestsCollection = await getGuestsCollection();
      // { projection: { _id: 0 } } does not return _id field
      let guest = await guestsCollection.findOne({ BNMID: id }, { projection: { _id: 0 } });
      return guest;
    } catch (e) {
      logger.error("GuestsAccessObject.getOne", e);
      throw {
        code: 500,
        error: "Internal Server Error",
        caused_by: e,
      };
    }
  }

  static async create(guestData) {
    const guestsCollection = await getGuestsCollection();
    const result = await guestsCollection.insertOne(guestData);
    console.log(result);
    // { projection: { _id: 0 } } does not return _id field
    let guest = await guestsCollection.findOne({ _id: result.insertedId }, { projection: { _id: 0 } });
    return guest;
  }

  static async update(id, guestData) {
    try {
      const guestsCollections = await getGuestsCollection();
      await guestsCollections.updateOne(
        //query
        { BNMID: id },
        //request body
        {
          $set: {
            Resident: guestData.Resident,
            Grad_Year: guestData.Grad_Year,
            Grad: guestData.Grad,
            Date: guestData.Date,
            Year_Issued: guestData.Year_Issued,
          },
        }
      );
      return guestData;
    } catch (e) {
      logger.error("GuestsAccessObject.update", e);
      throw {
        code: 500,
        error: "Internal Server Error",
        caused_by: e,
      };
    }
  }

  static async deleteOne(id) {
    const guestsCollection = await getGuestsCollection();
    const result = await guestsCollection.deleteOne(
      { BNMID: id }
    );
    return result.deletedCount >= 1;
  }
}

async function getGuestsCollection() {
  const database = await Database.get();
  return database.db("guests").collection("guests");
}

module.exports = Guests;
