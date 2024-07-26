import express from "express";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser"

const app = express();

app.use(express.json()); // Corrected to call express.json as a function

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute); // Corrected to use app.use for the authRoute

console.log("test2");

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
