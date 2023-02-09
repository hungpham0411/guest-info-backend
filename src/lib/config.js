/**
 * config.js supplies configuration to the rest of the system.
 * It pulls some of its values from environment variables, and sets defaults
 * values when they are not provided.
 *
 * Example Usage:
 *    const config = require("./config.js");
 *    const rootDirectory = config.ROOT_DIR;
 */

"use strict";
const path = require('path');
const yaml = require('js-yaml');
const { readFileSync } = require('fs');
const ROOT_DIR = path.join(__dirname, "..", "..");

// Define config, a simple object that contains configuration values
// that will be use throughout the application.
const config = {

  // The root directory of this project. Note that this will be some path
  // inside the Docker container.
  ROOT_DIR: ROOT_DIR,

  // The port to access this app from the host.
  HOST_BASE_URL: process.env.HOST_BASE_URL ? process.env.HOST_BASE_URL : "http://localhost:10350",

  // The port the server listens on.
  // @ts-ignore
  SERVER_PORT: process.env.SERVER_PORT || 10350,

  ENDPOINTS_DIR: path.join(ROOT_DIR, "src", "endpoints"),

  // MongoDB connection string
  MONGO_URI: process.env.MONGO_URI ? process.env.MONGO_URI : 'mongodb://localhost:27018',

  // RabbitMQ connection string
  RABBITMQ_URL: process.env.RABBITMQ_URL ? process.env.RABBITMQ_URL : 'amqp://guest:guest@localhost:5672/?connection_attempts=5&retry_delay=5',

  // OpenAPI schema object
  OPENAPI_SCHEMA: path.join(ROOT_DIR, 'lib', 'openapi.yaml'),
  
  //RabbitMQ timeout
  TIME_OUT: process.env.TIME_OUT || 7000
};

/**
 * Load API version directly from openapi.yaml
 */
const apiSchema = yaml.load(readFileSync(config.OPENAPI_SCHEMA, 'utf8'));
config.API_VERSION = apiSchema.info.version;

module.exports = config;
