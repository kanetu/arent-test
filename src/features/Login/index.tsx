import React from "react";

interface ILogin {}

const Login: React.FC<ILogin> = () => {
  return (
    <div className="login">
      Hi this is login page, it's now develop right now please go to the source
      code and update <b>isAuthenticated</b> to <b>true</b> in path
      `src\app\index.tsx`. <br />
      <span>Many thanks</span>
    </div>
  );
};

export default Login;
