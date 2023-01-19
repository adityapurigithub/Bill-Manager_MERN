import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

//mongo connection................................
await mongoose.connect(
  "mongodb+srv://aditya99:KCfPhVqlLfEPkKGS@cluster0.zwofint.mongodb.net/?retryWrites=true&w=majority"
);
console.log("mongo connected");
//.........................................

app.get("/", (req, res) => {
  res.send("hi Node");
});
app.post("/", (req, res) => {});

app.listen(port, (err) => {
  if (err) {
    console.log(`Err in starting server...${err}`);
    return;
  }
  console.log(`server up on port..${port}`);
});
