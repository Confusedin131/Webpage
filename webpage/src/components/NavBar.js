import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import AuthController from '../controllers/AuthController';

const NavBar = () => {
    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'State News', path: '/state-news' },
        { label: 'National News', path: '/national-news' },
        {label: 'Archive', path: 'archive'},
        { label: 'My Feed', path: '/my-feed' },
        { label: 'Edit', path: '/edit', adminOnly: true }
    ];

    return (
        <AuthController>
            {(user, isAdmin,signOutUser) => (
                <div>
                    <AppBar position="static" sx={{ height: '65px', backgroundColor: 'black' }}>
                        <Toolbar>
                            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                                {navItems.map((navItem) => (
                                    (navItem.label === 'My Feed' && !user  )? null : (
                                        (navItem.adminOnly && ((!user) ||(user && !isAdmin))) ? null : (
                                        <Button
                                            key={navItem.label}
                                            component={Link}
                                            to={navItem.path}
                                            sx={{
                                                color: '#fff',
                                                fontFamily: 'Segoe UI',
                                                fontSize: '16px',
                                            }}
                                        >
                                            {navItem.label}
                                        </Button>
                                    ))))}
                            </Box>
                           { console.log(user)}
                            {(user) ? (
                                <Button
                                    onClick={signOutUser}
                                    color="inherit"
                                    sx={{
                                        fontSize: 'inherit',
                                        fontFamily: 'inherit',
                                    }}
                                >
                                    Sign Out
                                </Button>
                            ) : (
                                <Button
                                    component={Link}
                                    to="/login"
                                    color="inherit"
                                    sx={{
                                        fontSize: 'inherit',
                                        fontFamily: 'inherit',
                                    }}
                                >
                                    Login
                                </Button>
                            )}
                        </Toolbar>
                    </AppBar>
                </div>
            )}
        </AuthController>
    );
};

export default NavBar;
