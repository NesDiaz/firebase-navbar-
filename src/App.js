import React, { useEffect, useState } from "react";
import "./App.css";
import { auth } from "./firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import Navbar from "./navbar";

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });
    return () => unsubscribe();
  }, []);


  useEffect(() => {
    function handleClickOutside(event) {
      if (
        !event.target.closest(".initial__btn") &&
        !event.target.closest(".dropdown-menu")
      ) {
        setDropdownVisible(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function register() {
    console.log("Registering...");
    createUserWithEmailAndPassword(auth, "test123@email.com", "test123")
      .then((userCredential) => {
        console.log("User registered:", userCredential.user);
      })
      .catch((error) => {
        console.error("Registration error:", error.message);
      });
  }

  function login() {
    console.log("Logging in...");
    setButtonLoading(true);
    setTimeout(() => {
      signInWithEmailAndPassword(auth, "test123@email.com", "test123")
        .then(({ user }) => {
          console.log("User logged in:", user);
          setUser(user);
        })
        .catch((error) => {
          console.error("Login error:", error.message);
        })
        .finally(() => {
          setButtonLoading(false);
        });
    }, 1000);
  }

  function toggleDropdown() {
    setDropdownVisible((prevState) => !prevState);
  }

  function logout() {
    console.log("Logging out...");
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.error("Logout error:", error.message));
  }

  return (
    <div className="App">
      <Navbar
        user={user}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        login={login}
        register={register}
        setShowRegisterForm={() => setShowRegisterForm(true)}
        logout={logout}
        buttonLoading={buttonLoading}
        toggleDropdown={toggleDropdown}
        dropdownVisible={dropdownVisible}
      />

      <div className="content">
        {showRegisterForm ? (
          <div>
            <h2>Registration form here</h2>
            <button onClick={() => setShowRegisterForm(false)}>
              Close Registration Form
            </button>
          </div>
        ) : user ? (
          <>
            <p>Welcome, {user.email}</p>
          </>
        ) : (
          <p>Please Login</p>
        )}
      </div>
    </div>
  );
}

export default App;
