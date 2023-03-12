import React, { useState, useEffect } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const authListener = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        window.localStorage.clear();
      } else {
        window.localStorage.clear();
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const handleSignup = () => {
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then((response) => {
        console.log("sign up", response);
        navigate("/profile");
        window.localStorage.setItem("user", response.user.email);
        setEmail(response.user.email);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleSignin = () => {
    signInWithEmailAndPassword(getAuth(), email, password)
      .then((response) => {
        console.log("sign in", response);
        navigate("/profile");
        window.localStorage.setItem("user", response.user.email);
        setEmail(response.user.email);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div>
      {hasAccount ? (
        <Signup
          email={email}
          password={password}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          handleEmail={handleEmail}
          handlePassword={handlePassword}
          handleSignup={handleSignup}
        />
      ) : (
        <Signin
          email={email}
          password={password}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          handleEmail={handleEmail}
          handlePassword={handlePassword}
          handleSignin={handleSignin}
        />
      )}
    </div>
  );
}

export default Home;
