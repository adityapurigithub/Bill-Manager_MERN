import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useResultContext } from "../context/ResultContextProvider";
const Sidebar = () => {
  const { showSideBar } = useResultContext();
  return (
    <Stack className={showSideBar ? "show" : "hide"}>
      <Box>
        <button className="compose-btn" type="submit">
          <img
            src="https://cdn-icons-png.flaticon.com/128/16/16941.png"
            alt="pen"
            height="20px"
          />
          <span>Compose</span>
        </button>
      </Box>
      <Box className="side-options" width="100%">
        <button>
          <img
            src="https://cdn-icons-png.flaticon.com/128/9379/9379855.png"
            alt="pen"
            height="20px"
          />
          <span>Inbox</span>
        </button>
        <button>
          <img
            src="https://cdn-icons-png.flaticon.com/128/9379/9379855.png"
            alt="pen"
            height="20px"
          />
          <span>Inbox</span>
        </button>{" "}
        <button>
          <img
            src="https://cdn-icons-png.flaticon.com/128/9379/9379855.png"
            alt="pen"
            height="20px"
          />
          <span>Inbox</span>
        </button>{" "}
        <button>
          <img
            src="https://cdn-icons-png.flaticon.com/128/9379/9379855.png"
            alt="pen"
            height="20px"
          />
          <span>Inbox</span>
        </button>{" "}
        <button>
          <img
            src="https://cdn-icons-png.flaticon.com/128/9379/9379855.png"
            alt="pen"
            height="20px"
          />
          <span>Inbox</span>
        </button>{" "}
        <button>
          <img
            src="https://cdn-icons-png.flaticon.com/128/9379/9379855.png"
            alt="pen"
            height="20px"
          />
          <span>Inbox</span>
        </button>{" "}
        <button>
          <img
            src="https://cdn-icons-png.flaticon.com/128/9379/9379855.png"
            alt="pen"
            height="20px"
          />
          <span>Inbox</span>
        </button>{" "}
        <button>
          <img
            src="https://cdn-icons-png.flaticon.com/128/9379/9379855.png"
            alt="pen"
            height="20px"
          />
          <span>Inbox</span>
        </button>
      </Box>
    </Stack>
  );
};

export default Sidebar;
