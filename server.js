import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
// import mongoose from "mongoose";
import bodyParser from "body-parser";
import passport from "passport";
import path from "path";

import { db } from "./config/db.js";

//using passport for authenticating the apis...

//importing passport-jwt config...
import passportConfig from "./config/passport.js";

// import Transaction from "./models/transaction.js";
import transactionAPI from "./routes/transactionAPI.js";
import authAPI from "./routes/authAPI.js";
import userAPI from "./routes/userAPI.js";

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

//aquring mongo db connection........
await db();
// .......................

//calling cors used for handling cors err
app.use(cors());

//bodyParser.json() -remeber to handling/get data from req.body
app.use(bodyParser.json());

//using passport middleware...init passport..
app.use(passport.initialize());

//we want only authenticated user to fetch transaction so applying passport jwt middleware on transaction....

//after initializing passport.. in config setting up passport jwt strategy...
passportConfig(passport);

app.get("/", (req, res) => {
  res.send("hi");
});
//separated the routes Using express Router..
app.use("/transaction", transactionAPI);

app.use("/auth", authAPI);

app.use("/user", userAPI);
app.listen(port, (err) => {
  if (err) {
    console.log(`Err in starting server...${err}`);
    return;
  }
  console.log(`server up on port..${port}`);
});
