import React from "react";
import FESLogo from "./assets/FES-Logo.png";

function Navbar({ user, email, password, setEmail, setPassword, login, register, buttonLoading, logout, toggleDropdown, dropdownVisible }) {
  return (
    <nav className="nav__bar">
      <img
        src={FESLogo}
        className="logo__img"
        alt="FES Logo"
        onError={(e) => {
          e.target.src = "/path/to/fallback-image.png"; 
        }}
      />
      {!user ? (
        <div className="nav__buttons">
          <button
            className={`nav__login ${buttonLoading ? "loading" : ""}`}
            onClick={login}
            aria-label="Login"
            disabled={buttonLoading}
          >
            {buttonLoading ? (
              <>
                <div className="spinner"></div>
              <div className="skeleton__links"> 
              <div className="skeleton__login"></div>
              <div className="skeleton__register"></div>
              </div>
              </>
            ) : "Login"}
          </button>

          {!buttonLoading && (
            <button className="nav__register btnR" onClick={register} aria-label="Register">
              Register
            </button>
          )}
        </div>
      ) : (
        <>
             <button className="initial__btn" onClick={toggleDropdown}>
            {user.email[0].toUpperCase()}
          </button>
          {dropdownVisible && (
            <div className="dropdown-menu show ">
              <button  onClick={logout}>Logout</button>
              
            </div>
          )}
        </>
      )}
    </nav>
  );
}

export default Navbar;
