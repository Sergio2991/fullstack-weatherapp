const bcrypt = require("bcrypt");

const { findUserByEmail, createUser } = require("../services/userService");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body || {};

    if (!name || !email || !password) {
      return res.status(400).json({
        result: false,
        error: "Missing or empty fields",
      });
    }

    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      return res.status(409).json({
        result: false,
        error: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await createUser({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      result: true,
    });
  } catch (error) {
    res.status(500).json({
      result: false,
      error: error.message,
    });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({
        result: false,
        error: "Missing or empty fields",
      });
    }

    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(404).json({
        result: false,
        error: "User not found",
      });
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      return res.status(401).json({
        result: false,
        error: "Invalid password",
      });
    }

    res.json({
      result: true,
    });
  } catch (error) {
    res.status(500).json({
      result: false,
      error: error.message,
    });
  }
};

module.exports = {
  signup,
  signin,
};
