import express from "express";
import cors from "cors";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import testRoute from "./routes/test.route.js"


// Initialize express app
const app = express();

// CORS Middleware
app.use(cors({
  origin: process.env.CLIENT_URL, // Set this to the URL of your frontend
  credentials: true, // Allows sending cookies with requests
}));

// Middleware for parsing JSON bodies and cookies
app.use(express.json()); // Ensure JSON body parsing is set up
app.use(cookieParser());  // Enable cookie parsing

// Routes
app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);

// Start the server
app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
