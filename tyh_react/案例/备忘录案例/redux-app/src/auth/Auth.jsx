import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const Auth = (props) => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  if (!token) {
    return (
      <Navigate
        to={`/login?redirect=${encodeURIComponent(location.pathname)}`}
      />
    );
  }
  return props.children;
};

export default Auth;
