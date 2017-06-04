const ENV = process.env.NODE_ENV || "dev";

const RelationalDbStore = require("jsonapi-store-relationaldb");
const databaseConfig = require('../database.json');

const store = new RelationalDbStore(databaseConfig[ENV]);

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
