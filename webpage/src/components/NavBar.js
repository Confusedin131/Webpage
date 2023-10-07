import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'State News', path: '/state-news' },
        { label: 'National News', path: '/national-news' }
    ];

    return (
        <div>
            <AppBar position="static" sx={{ height: '65px', backgroundColor: 'black' }} >
                <Toolbar>
                    <Box sx={{ display: 'flex', flexGrow: 1 }}>
                        {navItems.map((navItem) => (
                            <Button
                                key={navItem.label}
                                component={Link}
                                to={navItem.path}
                                sx={{
                                    color: '#fff',
                                    fontFamily: "Segoe UI",
                                    fontSize: '16px'

                                }}
                            >
                                {navItem.label}
                            </Button>
                        ))}
                    </Box>
                    <Button color="inherit" sx={{ fontSize: "inherit", fontFamily: "inherit" }}>My Feed</Button>
                    <Button color="inherit" sx={{ fontSize: "inherit", fontFamily: "inherit" }}>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
