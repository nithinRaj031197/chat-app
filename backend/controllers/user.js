import User from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const jwtSecretKey = process.env.JWT_SECRET_KEY || "jghjv";
console.log(process.env.JWT_SECRET_KEY);

export const createUser = async (request, response) => {
  try {
    console.log(request.body);

    const newUser = new User({
      username: request.body.username,
      email: request.body.email,
      password: await bcrypt.hash(request.body.password, 10),
    });

    await newUser.save();

    response.status(201).json({ sucess: true, message: "User Created Successfully" });
  } catch (error) {
    response.status(500).json({ success: false, message: "Server Error", error });
  }
};

export const loginUser = async (request, response) => {
  try {
    const user = await User.findOne({ email: request.body.email });

    if (!user) response.status(401).json({ success: false, message: "Incorrect Email" });

    const hashedPassword = user.password;
    const originalPassword = request.body.password;

    const isAuthenticated = await bcrypt.compare(originalPassword, hashedPassword);

    if (!isAuthenticated) response.status(401).json({ success: false, message: "Incorrect Password" });

    const access_token = jwt.sign({ userId: user._id }, jwtSecretKey, { expiresIn: "1d" });

    response.status(200).json({ sucess: true, message: "Successfully Signed In", access_token });
  } catch (error) {
    console.log(error);
    response.status(500).json({ success: false, message: "Server Error", error });
  }
};
