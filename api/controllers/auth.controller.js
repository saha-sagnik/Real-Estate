import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password:", hashedPassword);

    // Create the user in the database
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    console.log("New User:", newUser);

    // Send success response after user creation
    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Error:", error);

    // Check if the error is due to a unique constraint violation
    if (error.code === 'P2002') {
      res.status(400).json({ message: "Username or email already exists" });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials!" });
    }

    // Check if the password is correct
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid Credentials!" });
    }
    const time = 1000*60*60*24*7;
    const token = jwt.sign({
      id:user.id
    },process.env.JWT_SECRET,{
      expiresIn: time
    });

    // Generate cookie token and send to user
    
    const {password: userPassword,...userInfo} = user;

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: time,
    });
      res.status(200).json({ message: {userInfo}, token: token });
      

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const logout = (req, res) => {
  // Implement logout functionality
  res.clearCookie("token").status(200).json("message:Logout succesfull")
};
