import User from "../models/user.model.js";
import bcryptjs from ''

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  const newUser = new User({ username, email, password })

  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ error: "Username or email already exists" });
    } else {
      res.status(500).json({ error: "An error occurred" });
    }
  }
};
