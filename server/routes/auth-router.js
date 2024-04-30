import { Router } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const router = Router();

// POST REQUEST : SIGN UP
router.post(`/register`, async (req, res) => {
  try {
    const newApexUser = new User(req.body);
    newApexUser.userId = "APEX" + Date.now();
    const savedApexUser = await newApexUser.save();
    res.status(200).json(savedApexUser);
  } catch (error) {
    console.error("Error adding USER:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST REQUEST : LOG IN
router.post(`/login`, async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (!user) {return res.status(401).json({ error: "INVALID CREDENTIALS" });}
    const token = jwt.sign({ id: user.id, username: user.username },process.env.JWT_SECRET_KEY);
    res.status(200).json({ token });
  } catch (error) {
    console.log("ERROR: ", error);
    res.status(500).json({ message: "INTERNAL SERVER ERROR OCCURED", error });
  }
});

export default router;
