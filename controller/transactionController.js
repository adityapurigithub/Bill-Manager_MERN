import Transaction from "../models/transaction.js";

export const getTransactions = async (req, res) => {
  const transactions = await Transaction.find({ user_id: req.user._id }).sort({
    createdAt: -1,
  });
  //sort according to reverse order so createdAt:-1 used
  return res.json({
    data: transactions,
  });
};

export const createTransaction = async (req, res) => {
  const { amount, description, date } = req.body.data;

  console.log(req.user);

  const transactions = new Transaction({
    // amount:amount   //using short hand
    amount,
    description,
    date,
    user_id: req.user._id,
  });
  await transactions.save();

  res.json({
    // data: transactions,
    message: "Success!!!, Transaction Created",
  });
  console.log(transactions);
};

export const deleteTransaction = async (req, res) => {
  const id = req.params.id;

  const delTransaction = await Transaction.findByIdAndDelete(id);

  res.status(200).json({
    msg: "Deleted Successfully",
  });
};

export const updateTransaction = async (req, res) => {
  const { id } = req.params;
  const { amount, description, date } = req.body.data;

  const updated = await Transaction.findByIdAndUpdate(id, {
    amount,
    description,
    date,
  });
  // console.log(updated);
  res.status(200).json({
    msg: "Updated Successfully",
  });
};
