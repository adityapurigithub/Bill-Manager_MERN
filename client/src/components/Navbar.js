import React, { useEffect, useState } from "react";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useResultContext } from "../context/ResultContextProvider";

const Navbar = () => {
  const { showSideBar, setShowSideBar } = useResultContext();
  return (
    <Stack
      className="nav"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      padding={2}
      position="sticky"
      top="0"
      zIndex="9"
      sx={{
        background: "black",
        boxShadow: "0 0 2px rgba(255,255,255,0.5)",
      }}
    >
      <Box display="flex" alignItems="center">
        <img
          className="bar"
          src="https://cdn-icons-png.flaticon.com/512/7711/7711100.png"
          height="30px"
          onClick={() => {
            setShowSideBar(!showSideBar);
          }}
          alt="bar"
        />
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            textDecoration: "none",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2374/2374449.png"
            width="40px"
            style={{
              margin: "0 10px",
              objectFit: "contain",
            }}
          />
          <Typography variant="h5" fontWeight="bold" ml={1}>
            Zmail
          </Typography>
        </Link>
      </Box>
      <Paper class="form" component="form">
        <IconButton
          type="submit"
          sx={{
            position: "absolute",
            padding: "4px",
          }}
        >
          &#128269;
        </IconButton>
        <input type="text" placeholder="Search Mails" />
      </Paper>

      <Box className="profile">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3132/3132084.png"
          alt="setting1"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/5461/5461304.png"
          alt="setting1"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
          alt="profile"
        />
      </Box>
    </Stack>
  );
};

export default Navbar;
