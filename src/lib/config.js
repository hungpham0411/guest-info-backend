/**
 * config.js supplies configuration to the rest of the system.
 * It pulls some of its values from environment variables, and sets defaults
 * values when they are not provided.
 *
 * Example Usage:
 *    const config = require("./config.js");
 *    const rootDirectory = config.ROOT_DIR;
 */

const path = require('path');
const ROOT_DIR = path.join(__dirname, "..", "..");

/**
 * @typedef {Object} Config
 * @property {string} ROOT_DIR
 * @property {string} HOST_BASE_URL
 * @property {string} SERVER_PORT
 * @property {any} MONGO_URI
 * @property {any} OPENAPI_SCHEMA
 * @property {string} ENDPOINTS_DIR
 */

// Define config, a simple object that contains configuration values
// that will be use throughout the application.
/** @type {Config} config */
const config = {

  // The root directory of this project. Note that this will be some path
  // inside the Docker container.
  ROOT_DIR,

  // The port to access this app from the host.
  HOST_BASE_URL: process.env.HOST_BASE_URL || "http://localhost:3000/",

  // The port the server listens on.
  SERVER_PORT: process.env.SERVER_PORT || "3000",

  ENDPOINTS_DIR: path.join(ROOT_DIR, "src", "endpoints"),

  // MongoDB connection string
  MONGO_URI: undefined,

  // OpenAPI schema object
  OPENAPI_SCHEMA: undefined
};


/** 
 * @param {string} filePath 
 * @returns {any}
 */
function loadOpenApi(filePath) {
  const jsYaml = require("js-yaml");
  const fs = require("fs");
  const openapiYaml = fs.readFileSync(filePath);
  // @ts-ignore
  const openapi = jsYaml.load(openapiYaml);
  return openapi;
}
config.OPENAPI_SCHEMA = loadOpenApi(path.join(config.ROOT_DIR, 'lib', 'openapi.yaml'));

// Replace the URL in the OPENAPI_SCHEMA with HOST_BASE_URL
// so the interactive documentation works properly.
if (config.OPENAPI_SCHEMA.servers === undefined) {
  config.OPENAPI_SCHEMA.servers = [{url: null}];
}
config.OPENAPI_SCHEMA.servers[0].url = config.HOST_BASE_URL;

// The URI for connecting to our MongoDB.
config.MONGO_URI = process.env.MONGO_URI;

module.exports = config;