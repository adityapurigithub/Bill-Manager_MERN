import { Router } from "express";
import {
  createTransaction,
  deleteTransaction,
  getTransactions,
  updateTransaction,
} from "../controller/transactionController.js";
// import Transaction from "../models/transaction.js";

import passport from "passport";

const router = Router();

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  createTransaction
);

// created this get route for fetching transactions..
//applying passport middleware....for authenticated user to fetch transactions...
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  getTransactions
);

router.delete(
  "/delete-transcation/:id",
  passport.authenticate("jwt", { session: false }),
  deleteTransaction
);

router.patch(
  "/update/:id",
  passport.authenticate("jwt", { session: false }),
  updateTransaction
);

export default router;
