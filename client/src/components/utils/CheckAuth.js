import React, { useEffect, useState } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
//here if user is there then render the children component of CheckAuth.........

const CheckAuth = ({ children }) => {
  const user = useSelector((state) => state);

  return user.isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default CheckAuth;
