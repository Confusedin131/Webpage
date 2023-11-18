import {createUserWithEmailAndPassword } from "firebase/auth";
import{auth} from "../models/firebase";
import { useNavigate} from 'react-router-dom';
import React from "react";



const SignUpController = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const nav = useNavigate();


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePassChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSignUp= (e) => {
        e.preventDefault();
        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
          }
          
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                nav('/login')
            })
            .catch((error) => {
              console.log(error)
              alert("please enter valid email address");
              return;
            });
            
            

        }

        return {
            email,
            password,
            handleEmailChange,
            handlePassChange,
            handleSignUp,
        };
    };

    export default SignUpController;
