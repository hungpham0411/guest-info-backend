/**
 * guest.js is responsible for manipulating the guests collection in the
 * Mongo database. In architecture parlance, it is a Data Access Object.
 * It abstracts away the details of interact with the database.
 */
const { ObjectID } = require("mongodb");
const Database = require("./database");
const logger = require("./logger");

class Guests {
  static async getOne(id) {
    try{
      const guestsCollection = await getGuestsCollection();
      let guest = await guestsCollection.findOne({ studentID: ObjectID(id) });
      if (guest !== null) {
        guest.studentID = guest.studentID.toHexString();
      }
      return guest;
    } catch (e) {
      logger.error("GuestsAccessObject.getAll", e);
      throw {
        code: 500,
        error: "Internal Server Error",
        caused_by: e
      }
    }
  }

  static async update(guestData) {
    try {
      const guestsCollections = await getGuestsCollection();
    } catch(e) {
      logger.error("GuestsAccessObject.update", e);

      throw new {
        code: 500,
        error: "Internal Server Error",
        caused_by: e
      };
    }
  }
}

async function getGuestsCollection() {
  const database = await Database.get();
  return database.db("guests").collection("guests");
}

module.exports = Guests;
