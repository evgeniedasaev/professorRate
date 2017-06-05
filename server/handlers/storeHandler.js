const jsonApi = require("jsonapi-server");
const dbStore = require("jsonapi-store-relationaldb");

const ENV = process.env.NODE_ENV || "dev";
const databaseConfig = require('../database.json')[ENV];

// const store = new dbStore(databaseConfig[ENV]);
const store = new jsonApi.MemoryHandler();

// store.initialise = () => {
//     console.log(arguments);
// };
// store.close = () => {
//     console.log(arguments);
// };
// store.search = () => {
//     console.log(arguments);
// };
// store.find = () => {
//     console.log(arguments);
// };
// store.create = () => {
//     console.log(arguments);
// };
// store.delete = () => {
//     console.log(arguments);
// };
// store.update = () => {
//     console.log(arguments);
// };

module.exports = store;
