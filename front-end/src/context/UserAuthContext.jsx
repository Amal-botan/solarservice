import {createContext, useContext, useEffect, useState} from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider, 
  signInWithPopup, 
  sendPasswordResetEmail
} from "firebase/auth"
import {auth} from "../firebase";


const userAuthContext = createContext(null);

export function UserAuthContextProvider({children}) {
 const [user, setUser] = useState("") 
 const [loading, setLoading] = useState(true);
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const login = (email, password) => {
    console.log("email", email)
    console.log("passowrd", password)
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    setLoading(true);  
    return signOut(auth);
  }

  const googleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider); 
  }

  // const passwordReset = () => {
  //   const sendPasswordReset = 
  // }

//only want to run when mounting component
  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);  
    });

    return () => {
      unsubscribe();
      setLoading(true);  
    }
  },[])

  return (
    <userAuthContext.Provider value ={{user, signUp, login, logOut, googleSignIn}} > {!loading && children} </userAuthContext.Provider>
  )
}

export function useUserAuth() {
  return useContext(userAuthContext);
}