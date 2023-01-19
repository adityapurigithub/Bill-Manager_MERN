import React, { useState } from "react";

const Home = () => {
  const [form, setForm] = useState({
    amount: "",
    description: "",
    date: "",
  });

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
    console.log(form);

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
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="amount"
          type="text"
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
    </div>
  );
};

export default Home;
