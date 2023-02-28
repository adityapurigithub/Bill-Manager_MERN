import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { TransactionFormCard, TableCard } from "./";
const Home = () => {
  const initialForm = {
    amount: "",
    description: "",
    date: new Date(),
  };
  const [form, setForm] = useState(initialForm);
  const [transaction, setTransaction] = useState([]);
  const [editTransaction, setEditTransaction] = useState({});
  const [editMode, setEditMode] = useState(false);
  //edit transaction...
  /*it is used for editing the list transaction*/

  const navigate = useNavigate();

  const token = Cookies.get("token");

  useEffect(() => {
    fetchTransactionFromDb();

    console.log(editTransaction);
    if (Object.keys(editTransaction).length !== 0) {
      setForm(editTransaction);
      setEditMode(true);
    } else {
      setEditMode(false);
    }
  }, [editTransaction]);
  console.log(editMode);

  const fetchTransactionFromDb = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/transaction`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

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
    console.log(e.target.name);
    setForm({ ...form, [e.target.name]: e.target.value }); //remember  to put braces[]
  };

  const handleDateChange = (newDate) => {
    setForm({ ...form, date: newDate });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //now we have editTransaction.....

    if (Object.keys(editTransaction).length === 0) {
      createTranasaction();
    } else {
      let id = editTransaction._id;
      saveTransaction(id);
    }
  };

  const createTranasaction = async () => {
    //sending form to backend server
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/transaction`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          data: form,
        }),
      }
    );
    // const data = await response.json();
    // console.log(data);
    console.log(response);
    //also fetching transaction as soon as we add a new one
    if (response.ok) {
      fetchTransactionFromDb();
      alert("Transaction added successfully!!");
    }
    setForm(initialForm);
  };

  const saveTransaction = async (id) => {
    //sending form to backend server
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/transaction/update/${id}`,
      {
        method: "PATCH", //update->patch req. remember
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          data: form,
        }),
      }
    );
    // const data = await response.json();
    // console.log(data);
    console.log(response);
    //also fetching transaction as soon as we add a new one
    if (response.ok) {
      fetchTransactionFromDb();
      alert("Transaction Updated successfully!!");
    }
    setForm(initialForm);
    setEditTransaction({});
  };
  return (
    <Container>
      <TransactionFormCard
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleDateChange={handleDateChange}
        editMode={editMode}
      />
      <TableCard
        transaction={transaction}
        fetchTransactionFromDb={fetchTransactionFromDb}
        form={form}
        setEditTransaction={setEditTransaction}
      />
    </Container>
  );
};

export default Home;
