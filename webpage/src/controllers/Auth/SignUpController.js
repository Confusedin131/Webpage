import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../models/firebase";
import { useNavigate } from 'react-router-dom';
import React from "react";
import { getDatabase, ref, set } from "firebase/database";
import UserPrefs from "../../models/User/UserPrefs";

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

    const handleSignUp = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                const db = getDatabase();
                const userRef = ref(db, `users/${user.uid}`);
                set(userRef, {
                    email: user.email,
                    preferences: new UserPrefs(false, false, false, false, false, false, false),
                });

                nav('/login');
            })
            .catch((error) => {
                console.log(error)
                alert("Please enter a valid email address");
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
