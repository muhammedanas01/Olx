import React, {useEffect,useContext, useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
///////////////////////////////////////////////////////////////////
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import ViewPost from './Pages/ViewPost'
////////////////////////////////////////////////
import { AuthContext, FirebaseContext } from "./store/FirebaseContext";
import { auth, Firestore } from "./Firebase/fireBaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import Post from "./store/PostViewContext";

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)

  const [pathDetails, setPostDetails] = useState("")

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{   // here user is obj returned by firebase, onAuthStateChanged is a method provided by Firebase Authentication that allows you to set to observe users sign-in state. logged in or logged out.
      if(user){
        setUser(user)
      }
    })
  })
  return (
    <div>
      {/* this post is a component imported from postcontext */}
      <Post> 
        <Router>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<Create />} />
            <Route path="/view" element={<ViewPost />} />
          </Routes>
        </Router>
      </Post>
    </div>
  );
}

export default App;

