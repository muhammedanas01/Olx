import React, { useState, useContext } from "react";
import { auth, Firestore } from "../../Firebase/fireBaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Logo from "../../olx-logo.png";
import "./Signup.css";
import { FirebaseContext } from "../../store/FirebaseContext";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import { updateProfile } from "firebase/auth"

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const redirect = useNavigate();

  // we created a FirebaseContext, to use that we need to use useContext. whenever if you need to use the created context we need to use useContext and import the created context and pass it inside useContext.
  // note: use same key used to provider. eg:<FirebaseContext.Provider value={{ firebase: Firebase}}>

  const { firebase } = useContext(FirebaseContext);
  const userdb = collection(Firestore, "userdb");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Starting sign-up process...");
    createUserWithEmailAndPassword(auth, email, password) // By passing auth, you ensure the user is created in the correct Firebase project
      .then((userCredentials)=>{
        const user = userCredentials.user;
        //update user profile
        return updateProfile(
          user, {
            displayName: username,
            phoneNumber: phone
          }).then(()=>{
            //add user to db profile
            return addDoc(userdb, {id:user.uid, username:username, phone:phone})
          })
      })
      .then(()=>{
        redirect('/login')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error signing in:", errorCode, errorMessage);
      });
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={email}
            type="email"
            id="fname"
            name="email"
            onChange={(e) => SetEmail(e.target.value)}
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            value={phone}
            type="number"
            id="lname"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            value={password}
            type="password"
            id="lname"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}

//user.updateProfile({displayName:username})
// adding to firestore
