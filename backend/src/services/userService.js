const User = require("../models/User");

const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const createUser = async (user) => {
  return await User.create(user);
};

module.exports = {
  findUserByEmail,
  createUser,
};
