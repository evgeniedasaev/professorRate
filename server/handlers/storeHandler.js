const MongoStore = require("jsonapi-store-mongodb");

const store = new MongoStore({
    url: "mongodb://localhost:27017/jackenstein_rateProfessor",
});

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
