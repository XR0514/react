import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const login = () => {
    const token = "12343234565432345432123321";
    localStorage.setItem("token", token);
    const redirect = decodeURIComponent(searchParams.get("redirect") || "/");
    navigate(redirect);
  };
  return (
    <div>
      <button onClick={login}>登录</button>
    </div>
  );
};

export default Login;
