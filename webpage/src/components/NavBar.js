import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AuthController from '../controllers/Auth/AuthController';

const NavBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const nav = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        nav(`/search?query=${searchValue}`);

    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }
    };

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'State News', path: '/state-news' },
        { label: 'National News', path: '/national-news' },
        { label: 'Archive', path: 'archive' },
        { label: 'My Feed', path: '/my-feed' },
        { label: 'Edit', path: '/edit', adminOnly: true }
    ];

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '50ch',
            },
        },
    }));


    return (
        <AuthController>
            {(user, isAdmin, signOutUser) => (
                <div>
                    <AppBar position="static" sx={{ height: '65px', backgroundColor: 'black' }}>
                        <Toolbar>
                            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                                {navItems.map((navItem) => (
                                    (navItem.label === 'My Feed' && !user) ? null : (
                                        (navItem.adminOnly && ((!user) || (user && !isAdmin))) ? null : (
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
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search for articles..."
                                        inputProps={{ 'aria-label': 'search' }}
                                        value={searchValue}
                                        autoFocus={searchValue !== ''}
                                        onInput={(e) => setSearchValue(e.target.value)}
                                        onKeyDown={handleKeyPress}
                                    />
                                </Search>
                            </Box>
                            {(user ) ? (
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
