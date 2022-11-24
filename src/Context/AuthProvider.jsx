import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase.config";
import toast from "react-hot-toast";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loader, setLoader] = useState(false);

  const provider = new GoogleAuthProvider();

  // ======Sign Up=======//
  const handleSignUpWithEmailPassword = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //======Name & Image=====//
  const nameAndImageUpload = (name, image) => {
    setLoader(true);
    return updateProfile(auth, name, image);
  };

  //=======Sign in with email pass======//
  const logInWithEmailPass = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //====Sign in with Google=====/
  const loginWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };

  //=====LogOut===//
  const LogOut = () => {
    setLoader(true);
    toast.success("Log Out successful!");
    return signOut(auth);
  };

  //======Set Current User=====//
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    LogOut,
    loader,
    setLoader,
    handleSignUpWithEmailPassword,
    nameAndImageUpload,
    logInWithEmailPass,
    loginWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
