import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const CoursesContent = () => {
    const [formData, setFormData] = useState({
        name: '',
        code: '',
        description: '',
        courseImg: ''
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
            await axios.post('http://localhost:3001/api/courses/courses', formData);
            setFormData({
                name: '',
                code: '',
                description: '',
                courseImg: ''
            });
            setAlertSeverity('success');
            setAlertMessage('Course added successfully!');
            setAlertOpen(true);
        } catch (error) {
            console.error('Error adding course:', error);
            setAlertSeverity('error');
            setAlertMessage('Failed to add course. Please try again.');
            setAlertOpen(true);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
        >
            <h1>Add Course</h1>
            <Paper
                sx={{
                    width: '600px',
                    padding: '20px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    borderRadius: '10px',
                }}
            >
                <form onSubmit={handleSubmit} style={{ width: '100%', color: 'white' }}>
                    <TextField
                        name="name"
                        label="Name"
                        variant="outlined"
                        margin="normal"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        name="code"
                        label="Code"
                        variant="outlined"
                        margin="normal"
                        value={formData.code}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        name="description"
                        label="Description"
                        variant="outlined"
                        margin="normal"
                        value={formData.description}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        name="courseImg"
                        label="Image URL"
                        variant="outlined"
                        margin="normal"
                        value={formData.courseImg}
                        onChange={handleChange}
                        fullWidth
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Add Course
                    </Button>
                </form>
            </Paper>
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
        </Box>
    );
};

export default CoursesContent;
