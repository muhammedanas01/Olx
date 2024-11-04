import React, {useEffect,useContext} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
///////////////////////////////////////////////////////////////////
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
////////////////////////////////////////////////
import { AuthContext, FirebaseContext } from "./store/FirebaseContext";
import { auth, Firestore } from "./Firebase/fireBaseConfig";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{   // here user is obj returned by firebase, onAuthStateChanged is a method provided by Firebase Authentication that allows you to set to observe users sign-in state. logged in or logged out.
      if(user){
        setUser(user)
      }
    })
  })
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

{
  /* <Banner />
      <Create />
      <Footer />
      <Header />
      <Login />
      <Posts />
      <Signup /> */
}
