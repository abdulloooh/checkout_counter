import React, { useContext } from "react";
import UserContext from "./userContext";

const Login = () => {
  const userContext = useContext(UserContext);

  return (
    <button onClick={() => userContext.onUserChange("Mosh")}>Login</button>
  );
};

export default Login;
