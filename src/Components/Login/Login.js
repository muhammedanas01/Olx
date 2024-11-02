import React, { useState,  useContext  } from "react";
import { FirebaseContext } from "../../store/FirebaseContext";
import { auth, Firestore } from "../../Firebase/fireBaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate  } from "react-router-dom";

import Logo from "../../olx-logo.png";
import "./Login.css";

function Login() {

  const [email, verifyEmail] = useState('');
  const [password, verifyPassword] = useState('');

  const {firebase} = useContext(FirebaseContext);

  const redirect = useNavigate();

  const handleLogin = (e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials)=>{
      alert("you are logged in.")
      const user = userCredentials.user
      redirect('/home')
    }).catch((error)=>{
      alert(error.message,"please verify your email and password.")
    })
    // this catch block is commonly used with Firebase Authentication to handle errors during sign-in.
    .catch((error)=>{
      const errorCode = error.code; 
      const errorMessage = error.message; 
      console.error("Error signing in:", errorCode,errorMessage);
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={email}
            type="email"
            id="fname"
            name="email"
            onChange={(e) => verifyEmail(e.target.value)}
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e) => verifyPassword(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
