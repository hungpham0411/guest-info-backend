// Axios
//   - Used to make HTTP request to the SUT (system under test).
//   - Related identifiers: axios, get, post, and response.
//   - <https://github.com/axios/axios>
const axios_ = require("axios");
// const {SUT_BASE_URL} = require('./env.js');
const axios = axios_.create({ baseURL: "http://localhost:10001/" });

module.exports = axios;