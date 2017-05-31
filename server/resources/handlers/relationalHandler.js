const ENV = process.env.NODE_ENV || "development"

const RelationalDbStore = require("jsonapi-store-relationaldb");
const databaseConfig = require('../database.json')

const storeConfig = databaseConfig[ENV]
storeConfig.logging = false;

module.exports = new RelationalDbStore(storeConfig)