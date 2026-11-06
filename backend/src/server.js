require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/database");

connectDB();

module.exports = app;
