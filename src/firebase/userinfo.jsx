import React from "react";


function UserInfo({
  email,
  password,
  setEmail,
  setPassword,
  login,
  register, 
  buttonLoading,
  logout,
}) {
  return (
    <>
      <nav className="nav__bar">
     
      
        <div className="nav__links">
          <button
            className={`nav__login ${buttonLoading ? "loading" : ""}`}
            onClick={login}
            aria-label="Login"
            disabled={buttonLoading}
          >
            {buttonLoading ? <div className="spinner"></div> : "Login"}
          </button>
          <button
            className="nav__register btnR"
            onClick={register} 
            aria-label="Register"
          >
            Register
          </button>
        </div>
      </nav>
    </>
  );
}

export default UserInfo;
