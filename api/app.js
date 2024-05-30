import express from "express";

const app = express();

app.use("/api/test", (req, res) => {
  res.send("Hello");
});

app.use("/api/auth/register", (req, res) => {
    res.send("Hello");
  });

app.use("/api/auth/login", (req,res)=>{
    res.send("Hello");
})

app.use("/api/posts/logout",(req,res)=>{
    res.send("Hello");
})

app.use("/api/posts/", (req, res) => {
    res.send("Hello");
  });

// get command

  app.use("/api/posts/", (req, res) => {
    res.send("Hello");
  });

  app.use("/api/posts/1234", (req, res) => {
    res.send("Hello");
  });


app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
