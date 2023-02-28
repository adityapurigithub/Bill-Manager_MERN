import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

export default function TransactionFormCard({
  form,
  handleChange,
  handleSubmit,
  handleDateChange,
  editMode,
}) {
  return (
    <Card sx={{ margin: "2rem", boxShadow: "none" }}>
      <CardContent>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
          onSubmit={handleSubmit}
        >
          <Typography variant="h5">Add New Transaction</Typography>
          <TextField
            sx={{
              minWidth: "300px",
            }}
            id="outlined-basic"
            label="Enter Amount"
            variant="outlined"
            name="amount"
            type="number"
            value={form.amount}
            onChange={handleChange}
            size="small"
          />
          <TextField
            sx={{
              minWidth: "300px",
            }}
            id="outlined-basic"
            label="Enter Description"
            variant="outlined"
            name="description"
            type="text"
            value={form.description}
            onChange={handleChange}
            size="small"
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="DD/MM/YYYY"
              value={form.date}
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField
                  sx={{
                    minWidth: "300px",
                  }}
                  {...params}
                  size="small"
                />
              )}
            />
          </LocalizationProvider>
          {editMode ? (
            <Button
              type="submit"
              sx={{ minWidth: "300px" }}
              variant="contained"
            >
              Save
            </Button>
          ) : (
            <Button
              type="submit"
              sx={{ minWidth: "300px" }}
              variant="contained"
            >
              Add Transaction
            </Button>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
