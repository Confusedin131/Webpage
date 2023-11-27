import React from 'react';
import { auth } from "../../models/firebase";
import { useNavigate } from 'react-router-dom';
import { setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";

const SignInController = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const nav = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePassChange = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = () => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            
            nav('/');
          })
          .catch((error) => {
            console.log(error);
            alert("Invalid login. Please try again.");
          });
      });
  }

  return {
    email,
    password,
    handleEmailChange,
    handlePassChange,
    handleLogin,
  };
};

export default SignInController;
