import React from "react";
import { Link } from "react-router-dom";
const login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link className="btn btn-primary" to="shops">
        Login
      </Link>
    </div>
  );
};

export default login;
