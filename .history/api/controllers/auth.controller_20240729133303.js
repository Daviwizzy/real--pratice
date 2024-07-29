import User from "../models/user.model.js";

export const signup = as(req, res) =>  {
const {username, email, password} = req.body;
const newUser = new User({username, email, password});
  await newUser.save()
}