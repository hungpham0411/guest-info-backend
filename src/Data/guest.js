/**
 * guest.js is responsible for manipulating the guests collection in the
 * Mongo database. In architecture parlance, it is a Data Access Object.
 * It abstracts away the details of interact with the database.
 */
 const { ObjectId } = require("mongodb");
 const Database = require("../lib/database");
 const logger = require("../lib/logger");
 
 /**
  * @typedef {Object} Assistance
  * @property {boolean} socSec
  * @property {boolean} TANF
  * @property {boolean} finAid
  * @property {boolean} other
  * @property {boolean} SNAP
  * @property {boolean} WIC
  * @property {boolean} breakfast
  * @property {boolean} lunch
  * @property {boolean} SFSP
  */
 
 /**
  * @typedef {Object} Guest
  * @property {string | undefined} _id
  * @property {string} studentID
  * @property {boolean} resident
  * @property {string} zipCode
  * @property {boolean} unemployment
  * @property {Assistance[]} assistance
  * @property {string[]} household
  */
 
 class Guests {
  /**
   * 
   */ 
  static async getAll(){
    try {
      const guestsCollection = await getGuestsCollection();
      const guest_cursor = await guestsCollection.find();
      let guests = await guest_cursor.toArray();
      return guests;
    } catch (e) {
      logger.error("GuestsAccessObject.getAll", e);
      throw {
        code: 500,
        error: "Internal Server Error",
        caused_by: e
      }
    }
   }

   /**
    * @param {string} id
    * @returns {Promise<Guest>}
    */
   static async getOne(id) {
     try {
       const guestsCollection = await getGuestsCollection();
       let guest = await guestsCollection.findOne({ studentID: new ObjectId(id) });
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
 
   /**
    * @param {any} guestData
    * @returns {Promise<any>}
    */
   static async update(guestData) {
     try {
       const guestsCollections = await getGuestsCollection();
       //TODO: return guest object and update return type
     } catch (e) {
       logger.error("GuestsAccessObject.update", e);
 
       throw {
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