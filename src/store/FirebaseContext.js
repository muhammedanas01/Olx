import { createContext, useState } from "react";
// here we created a contex for firebase as Firebasecontext
export const FirebaseContext = createContext(null) // null is initial value.

export const AuthContext = createContext(null);

// when  a user is logined firebase will return a object which contained id,email,password,email.

// children is default inside props.

// if this is  a parent component the child components are children.
export default function Context({children}) {
    const [user, setUser] = useState(null);  // we can use this globally in child components.
    return(
        <AuthContext.Provider value={{user:user, setUser:setUser}}>
            {children}  
        </AuthContext.Provider>
    )
}
