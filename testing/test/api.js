const axios = require('./axios.js');

module.exports = {
    async listGuests() {
        return axios.get("/guest/list");
    }
};