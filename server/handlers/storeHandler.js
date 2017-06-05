const jsonApi = require("jsonapi-server");
const dbStore = require("jsonapi-store-relationaldb");

const ENV = process.env.NODE_ENV || "dev";
const databaseConfig = require('../database.json')[ENV];

const store = module.exports = () => new dbStore(databaseConfig);
// const store = new jsonApi.MemoryHandler();
