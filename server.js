import express from "express";
import cors from "cors";
// import mongoose from "mongoose";
import { db } from "./config/db.js";

import bodyParser from "body-parser";

// import Transaction from "./models/transaction.js";
import transactionAPI from "./routes/transactionAPI.js";

const port = process.env.PORT || 5000;

const app = express();

//aquring mongo db connection........
await db();
// .......................

//calling cors used for handling cors err
app.use(cors());

//bodyParser.json() -remeber to handling/get data from req.body
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hi");
});
//separated the routes Using express Router..
app.use("/transaction", transactionAPI);

app.listen(port, (err) => {
  if (err) {
    console.log(`Err in starting server...${err}`);
    return;
  }
  console.log(`server up on port..${port}`);
});
