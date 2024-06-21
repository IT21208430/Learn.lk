import React, { useState } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom'; // Import useHistory hook for navigation
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/system';

const GradientBackground = styled(Box)({
    background: 'linear-gradient(135deg, #FEB692 0%, #EA5455 100%)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
});

const AdminLogin = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');
   

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCloseAlert = () => {
        setAlertOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Check if the email and password match the admin credentials
            if (formData.username === 'admin@gmail.com' && formData.password === 'admin1234') {
                // Navigate to the admin dashboard
                window.location.href='/admin/dashboard';
                setAlertSeverity('success');
                setAlertMessage('Login successful!');
                setAlertOpen(true);
            } else {
                setAlertSeverity('error');
                setAlertMessage('Invalid email or password. Please try again.');
                setAlertOpen(true);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setAlertSeverity('error');
            setAlertMessage('Login failed. Please try again.');
            setAlertOpen(true);
        }
    };

    return (
        <GradientBackground>
            <Box
                sx={{
                    width: '500px',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    backgroundColor: 'white',
                    textAlign: 'center',
                    height:'300px'
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Admin Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        name="username"
                        label="Username"
                        variant="outlined"
                        margin="normal"
                        value={formData.username}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        name="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        value={formData.password}
                        onChange={handleChange}
                        fullWidth
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Login
                    </Button>
                </form>
            </Box>
            <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleCloseAlert}>
                <MuiAlert
                    onClose={handleCloseAlert}
                    severity={alertSeverity}
                    elevation={6}
                    variant="filled"
                >
                    {alertMessage}
                </MuiAlert>
            </Snackbar>
        </GradientBackground>
    );
};

export default AdminLogin;
