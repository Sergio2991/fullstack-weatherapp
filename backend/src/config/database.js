const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("MONGODB_URI exists:", !!process.env.MONGODB_URI);

    console.log("Attempting database connection...");

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed");

    console.error(error);
  }
};

module.exports = connectDB;
