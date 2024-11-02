import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FirebaseContext} from "./store/FirebaseContext";
import Context from "./store/FirebaseContext";
import { Firebase } from "./Firebase/fireBaseConfig";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase: Firebase }}>
    <Context>
      <App />
    </Context>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

// Provider in React Context is like setting up a central “control room” for your data.
// it allows you to share state across multiple components without prop-drilling
// eg: Imagine having a piece of data, like the user’s theme preference, accessible throughout your app.

// value : It specifies the data that you want to be accessible by any component that consumes the context

// note: FirebaseContext is a context created from useContext. and we passing the Firebase as the value to the context.

// FirebaseContext is wrapped inside <App /> so any where from App we can access this FirebaseContext. and the value for context is Firebase.

//value={{ firebase: Firebase}} here firebase is the key and Firebase is value whenever you are using this context you should access the Firebase object with same key word used here. eg: const {firebase} = useContext(FirebaseConstent).
