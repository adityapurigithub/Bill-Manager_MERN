import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const port = process.env.PORT || 5000;

const app = express();

//calling cors used for handling cors err
app.use(cors());

//bodyParser.json() -remeber to handling/get data from req.body
app.use(bodyParser.json());

//mongo connection................................
await mongoose.connect(
  "mongodb+srv://aditya99:KCfPhVqlLfEPkKGS@cluster0.zwofint.mongodb.net/?retryWrites=true&w=majority"
);
console.log("mongo connected");
//.........................................

app.get("/", (req, res) => {
  res.send("hey");
});
app.post("/transaction", (req, res) => {
  res.json({
    message: "Hello React User",
  });
  console.log(req.body);
});

app.listen(port, (err) => {
  if (err) {
    console.log(`Err in starting server...${err}`);
    return;
  }
  console.log(`server up on port..${port}`);
});
