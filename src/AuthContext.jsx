import { useState, useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const user = {
          uid: currentUser.uid,
          name: currentUser.displayName,
          photo: currentUser.photoURL,
          email: currentUser.email,
        };
        setuserData(user);
      }
    });

    return () => unsub();
  }, []);

  const value = {
    userData,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
