import { Box } from "@mui/material";
import { borderRadius, Stack } from "@mui/system";
import React, { useEffect } from "react";
import { Sidebar } from "./";
import { useResultContext } from "../context/ResultContextProvider";
const Feed = () => {
  const { showSideBar } = useResultContext();
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="flex-start">
      <Sidebar />
      <Box
        className="post-wrapper"
        height="80vh"
        overflow="scroll"
        width={showSideBar ? "55vw" : "65vw"}
        p={2}
        m={2}
        color="black"
        sx={{ backgroundColor: "white", borderRadius: "20px" }}
      >
        <span className="front" style={{ height: "3000vh" }}>
          hi
        </span>
      </Box>
    </Stack>
  );
};

export default Feed;
