import { hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    // Validations
    if (!name) {
      return res.send({ error: "Name is required" });
    }
    if (!email) {
      return res.send({ error: "Email is required" });
    }
    if (!password) {
      return res.send({ error: "Password is required" });
    }
    if (!phone) {
      return res.send({ error: "Phone is required" });
    }
    if (!address) {
      return res.send({ error: "Address is required" });
    }
    // Check User
    const existingUser = await userModel.findOne({ email });
    // Existing User
    if (existingUser) {
      return res.status(200).send({
        message: "Already Registered, Please Login",
      });
    }
    // Register User
    const hashedPassword = await hashPassword(password);
    // Save User
    const user = await new userModel({
      // Check spelling with userModel.js
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      error,
    });
  }
};
export default registerController;
