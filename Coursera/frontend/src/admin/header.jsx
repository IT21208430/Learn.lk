// Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Header = ({ onUsersClick, onCoursesClick }) => {
    return (
        <AppBar position="static" sx={{backgroundColor:'blue'}}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Admin Dashboard
                </Typography>
                <IconButton color="inherit" onClick={onUsersClick}>
                    <Typography variant="body1" sx={{ mr: 1 }}>Users</Typography>
                </IconButton>
                <IconButton color="inherit" onClick={onCoursesClick}>
                    <Typography variant="body1" sx={{ mr: 1 }}>Courses</Typography>
                </IconButton>
                <IconButton color="inherit">
                    <AccountCircle />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
