import React from 'react'
import { Avatar, Button, Container, TextField, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import SignUpController from '../controllers/SignUpController';

const SignUpView = () => {

    const SignUpControl = SignUpController();


    const email = SignUpControl.email;
    const password = SignUpControl.password;
    const onEmailChange = SignUpControl.handleEmailChange;
    const onPasswordChange = SignUpControl.handlePassChange;
    const onSignUp = SignUpControl.handleSignUp;
    return (
        <div>
            <Container maxWidth="xs">
                <Box

                    display="flex"
                    flexDirection="column"
                    alignItems="center" // Center the content horizontally
                    justifyContent="center"
                    marginTop="150px"
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography sx={{ marginTop: '5px', fontWeight: 'medium', fontSize: '30px', variant: 'h1', fontFamily: "Segoe UI" }}>
                        Sign Up</Typography>
                    <TextField

                        required
                        fullWidth
                        label="Email Address"
                        sx={{ marginTop: '15px' }}
                        value={email}
                        onChange={(event) => onEmailChange(event)}

                    />
                    <TextField
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        sx={{ marginTop: '15px' }}
                        value={password}
                        onChange={(event) => onPasswordChange(event)}
                    />
                    <Button

                        sx={{ fontFamily: 'Segoe UI', marginTop: '10px' }}
                        variant="contained"
                        endIcon={<SendIcon />}
                        fullWidth
                        onClick={onSignUp}
                    >Sign Up</Button>
                </Box>


            </Container>

        </div>
    )
}

export default SignUpView
