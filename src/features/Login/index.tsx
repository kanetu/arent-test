import React from "react";

interface ILogin {}

const Login: React.FC<ILogin> = () => {
  return (
    <div className="Login">
      Hi this is login page, it's now develop right now please go to the source
      code and update isAuthenticated to true. Many thanks
    </div>
  );
};

export default Login;
