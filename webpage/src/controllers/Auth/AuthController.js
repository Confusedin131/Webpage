// Controller component
import React, { useEffect, useState } from 'react';
import { auth } from "../../models/firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getDatabase, ref, set,get } from 'firebase/database';
import UserPrefs from '../../models/User/UserPrefs';
import { useNavigate } from 'react-router-dom';
const AuthController = ({ children }) => {
  const [user, setUser] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const nav = useNavigate();


  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setAdmin(false);
        setUser(false);
        nav('/')
        console.log('Sign out successful!');
      })
      .catch((error) => {
        console.error('Error signing out:', error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser && authUser.email === 'hannahtran481@gmail.com') {
        console.log("admin logged in")
        setAdmin(true);
      }
      setUser(authUser ? true : false);

      if (authUser) {
        const db = getDatabase();
        const userRef = ref(db, `users/${authUser.uid}`);
        const snapshot = await get(userRef);

        if (!snapshot.exists()) {
          set(userRef, {
            email: authUser.email,
            prefs: new UserPrefs(false, false, false, false, false, false, false)
          });
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return <div>{children(user, isAdmin, signOutUser)}</div>;
};

export default AuthController;
