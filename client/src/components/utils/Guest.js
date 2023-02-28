import React, { useEffect } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

//here if user is not there then render the children component of Guest.........
const Guest = ({ children }) => {
  const user = useSelector((state) => state);

  return !user.isAuthenticated ? children : <Navigate to="/" replace={true} />;
};

export default Guest;
