// Controller component
import React, { useEffect, useState } from 'react';
import { auth } from "../models/firebase";
import { onAuthStateChanged } from 'firebase/auth';
import { signOut } from 'firebase/auth';

const AuthController = ({ children }) => {
  const [user, setUser] = useState(false);
  const [isAdmin, setAdmin] = useState(false);


  const signOutUser = () => {

    signOut(auth)
      .then(() => {
        setAdmin(false);
        setUser(false);
        console.log('Sign out successful!');
      })
      .catch((error) => {
        console.error('Error signing out:', error.message);
      });
  };

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (authUser) => {

      if (authUser && authUser.email === 'hannahtran481@gmail.com') {
        console.log("hannah!")
        setAdmin(true);
      }
      setUser(false);
      if (authUser) {
        setUser(true);
      }
    })

    return () => unsubscribe();
  }, []);

  return <div>{children(user, isAdmin, signOutUser)}</div>;
};

export default AuthController;
