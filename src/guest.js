/**
 * guest.js is responsible for manipulating the guests collection in the
 * Mongo database. In architecture parlance, it is a Data Access Object.
 * It abstracts away the details of interact with the database.
 */
const Database = require("./database");
const logger = require("./logger");

class Guests {
  static async getAll() {
    try {
      const guestsCollections = await getGuestsCollection();
      const guests_cursor = guestsCollections.find();

      let guests = await guests_cursor.toArray();

      guests.forEach((guest) => {
          guest._id = guest._id.toHexString();
      });

      return guests;
    } catch(e) {
      logger.error("GuestsAccessObject.getAll", e);

      throw new {
          code: 500,
          error: "Internal Server Error",
          caused_by: e
      };
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
