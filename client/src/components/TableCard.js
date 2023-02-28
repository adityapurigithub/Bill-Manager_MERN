import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import dayjs from "dayjs";
import Cookies from "js-cookie";
export default function TableCard({
  transaction,
  fetchTransactionFromDb,
  form,
  setEditTransaction,
}) {
  const token = Cookies.get("token");

  const removeTranscation = async (id) => {
    console.log(id);

    if (window.confirm("This will be Deleted!!!")) {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/transaction/delete-transcation/${id}`,
        {
          method: "delete",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        window.alert("deleted Successsully");
        fetchTransactionFromDb();
      }
    }
  };

  const formatDate = (date) => {
    return dayjs(date).format("DD-MMM, YYYY");
  };
  console.log(form);

  const editTransaction = (row) => {
    console.log(row);
    setEditTransaction(row);
  };

  return (
    <>
      <Typography variant="h4" textAlign="center">
        List Of the Transaction
      </Typography>
      {transaction.length === 0 ? (
        <Typography mt={10} variant="h5" textAlign="center">
          No Transaction Found
        </Typography>
      ) : (
        <TableContainer sx={{ marginY: "2rem" }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="start">Description</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transaction.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" align="start" scope="row">
                    {row.description}
                  </TableCell>
                  <TableCell align="center">{row.amount}</TableCell>
                  <TableCell align="center">{formatDate(row.date)}</TableCell>
                  <TableCell align="center">
                    <IconButton
                      color="primary"
                      onClick={() => editTransaction(row)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="warning"
                      onClick={() => removeTranscation(row._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
