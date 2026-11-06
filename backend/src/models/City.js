const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  cityName: {
    type: String,
    required: true,
  },
  main: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tempMin: {
    type: Number,
    required: true,
  },
  tempMax: {
    type: Number,
    required: true,
  },
});

const City = mongoose.model("cities", citySchema);

module.exports = City;
