import {createContext, useContext, useEffect, useState} from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth"
import {auth} from "../firebase";


const userAuthContext = createContext();

export function UserAuthContextProvider({children}) {
 const [user, setUser] = useState("") 
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    }
  },[])
  return (
    <userAuthContext.Provider value ={{user, signUp, login}} > {children} </userAuthContext.Provider>
  )
}

export function useUserAuth() {
  return useContext(userAuthContext);
}