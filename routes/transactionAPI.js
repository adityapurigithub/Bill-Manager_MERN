import { Router } from "express";
import Transaction from "../models/transaction.js";

const router = Router();

router.post("/", async (req, res) => {
  const { amount, description, date } = req.body.data;

  const transactions = new Transaction({
    // amount:amount   //using short hand
    amount,
    description,
    date,
  });
  await transactions.save();

  res.json({
    // data: transactions,
    message: "Success!!!, Transaction Created",
  });
  console.log(transactions);
});

// created this get route for fetching transactions..
router.get("/", async (req, res) => {
  const transactions = await Transaction.find({}).sort({ createdAt: -1 });
  //sort according to reverse order so createdAt:-1 used
  res.json({
    data: transactions,
  });
});

export default router;
