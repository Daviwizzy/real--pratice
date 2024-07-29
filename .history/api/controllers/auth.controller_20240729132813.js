import User from "../models/user.model";

export const signup = (req, res) =>{
const {username, email, password} = req.body;
const newUser = new User({username, email, password});
}