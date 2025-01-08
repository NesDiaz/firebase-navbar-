import React from "react";
import FESLogo from "./assets/FES-Logo.png";

function Navbar({
  user,
  email,
  password,
  setEmail,
  setPassword,
  login,
  register,
  buttonLoading,
  logout,
  toggleDropdown,
  dropdownVisible,
}) {
  return (
    <nav className="nav__bar">
      <img
        src={FESLogo}
        className="logo__img"
        alt="FES Logo"
        onError={(e) => {
          e.target.src = "/path/to/fallback-image.png"; // Ensure this path is valid
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
              <div className="spinner"></div>
            ) : (
              "Login"
            )}
          </button>

          {!buttonLoading && (
            <button
              className="nav__register btnR"
              onClick={register}
              aria-label="Register"
            >
              Register
            </button>
          )}
        </div>
      ) : (
        <div className="user__dropdown">
          <button
            className="initial__btn"
            onClick={toggleDropdown}
            aria-expanded={dropdownVisible}
            aria-controls="dropdown-menu"
          >
            {user.email[0].toUpperCase()}
          </button>
          {dropdownVisible && (
            <div
              id="dropdown-menu"
              className={`dropdown-menu ${dropdownVisible ? "show" : ""}`}
            >
              <button onClick={logout} aria-label="Logout">
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
