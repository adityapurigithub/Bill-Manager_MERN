import React, { useEffect, useState } from "react";

const Home = () => {
  const initialForm = {
    amount: "",
    description: "",
    date: "",
  };
  const [form, setForm] = useState(initialForm);
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    fetchTransactionFromDb();
  }, []);

  const fetchTransactionFromDb = async () => {
    const response = await fetch("http://localhost:5000/transaction");

    const data = await response.json();

    setTransaction(data.data);
  };

  const handleChange = (e) => {
    // if (e.target.name === "amount") {
    //   setForm({ ...form, amount: e.target.value });
    // } else if (e.target.name === "description") {
    //   setForm({ ...form, description: e.target.value });
    // } else {
    //   setForm({ ...form, date: e.target.value });
    // } //instead of doing this below is the easy way in one line...

    setForm({ ...form, [e.target.name]: e.target.value }); //remember  to put braces[]
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //sending form to backend server
    const response = await fetch("http://localhost:5000/transaction", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        data: form,
      }),
    });
    // const data = await response.json();
    // console.log(data);
    console.log(response);
    //also fetching transaction as soon as we add a new one
    if (response.ok) {
      fetchTransactionFromDb();
    }
    setForm(initialForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="amount"
          type="number"
          placeholder="Enter Amount"
          value={form.amount}
          onChange={handleChange}
        />
        <input
          name="description"
          type="text"
          placeholder="Enter Desc"
          value={form.description}
          onChange={handleChange}
        />

        <input
          name="date"
          type="date"
          onChange={handleChange}
          value={form.date}
        />
        <button type="submit">Done</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map((trx) => (
            <tr key={trx._id}>
              <td>{trx.amount}</td>
              <td>{trx.description}</td>
              <td>{trx.date.substring(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
