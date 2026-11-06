const express = require("express");
const cors = require("cors");

const weatherRoutes = require("./routes/weatherRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", weatherRoutes);
app.use("/users", userRoutes);

module.exports = app;
