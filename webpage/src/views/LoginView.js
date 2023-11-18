import { Avatar, Button, Container, TextField, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import SignInController from '../controllers/SignInController';

const LoginView = () => {
    const SignInControl = SignInController();
    const email = SignInControl.email;
    const password = SignInControl.password;
    const onEmailChange = SignInControl.handleEmailChange;
    const onPasswordChange = SignInControl.handlePassChange;
    const onLogin = SignInControl.handleLogin;

    return (
        <div>
            <Container maxWidth="xs">
                <Box

                    display="flex"
                    flexDirection="column"
                    alignItems="center" // Center the content horizontally
                    justifyContent="center"
                    marginTop={'150px'}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography sx={{ marginTop: '5px', fontWeight: 'medium', fontSize: '30px', variant: 'h1', fontFamily: "Segoe UI" }}>
                        Sign in</Typography>
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
                        onClick={onLogin}
                    >Login</Button>

                    <Typography sx={{ marginTop: '15px', variant: 'h1', fontFamily: "Segoe UI" }}>
                        <Link to="/signup"> Dont Have an Account? Sign Up!</Link>
                    </Typography>
                </Box>


            </Container>

        </div>
    )
}

export default LoginView
