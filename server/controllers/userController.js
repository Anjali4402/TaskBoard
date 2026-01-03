import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import { generateToken } from "../utils/generateToken.js";

// Signup a new user
export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    if (!fullName || !email || !password) {
      return res.json({ success: false, message: "Missing Details" });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.json({ success: false, message: "Account already exists" });
    }

    const salt = await bcrypt.genSalt(10); // Generate encrypt password
    const hashedPassword = await bcrypt.hash(password, salt); // encrypt password

    // Create new user
    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    const token = generateToken(newUser._id);

    res.json({
      success: true,
      userData: newUser,
      token: token,
      message: "Account created successfully",
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Login user
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      res.json({ success: false, message: "missing details" });
    }

    const userData = await User.findOne({ email });

    if (!userData) {
      res.json({ success: false, message: "User not exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, userData.password);

    if (!isPasswordCorrect) {
      res.json({ success: false, message: "Invalid credentials" });
    }

    const token = generateToken(userData._id);

    res.json({
      success: true,
      userData,
      token,
      message: "User login successful",
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
