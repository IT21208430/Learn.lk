import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const UsersContent = () => {
    const [users, setUsers] = useState([]);
    const [successOpen, setSuccessOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3001/user_api/allusers');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleAccept = async (userId) => {
        try {
            await axios.patch(`http://localhost:3001/api/admin/accept/${userId}`);
            console.log('Accepted user with ID:', userId);
            setSuccessOpen(true);
            setTimeout(() => {
                window.location.href='/admin/dashboard';
            }, 2000);
        } catch (error) {
            console.error('Error accepting user:', error);
            setErrorOpen(true);
        }
    };

    const handleDecline = async (userId) => {
        try {
            await axios.patch(`http://localhost:3001/api/admin/decline/${userId}`);
            console.log('Declined user with ID:', userId);
            setSuccessOpen(true);
            setTimeout(() => {
                window.location.href='/admin/dashboard';
            }, 2000);
        } catch (error) {
            console.error('Error declining user:', error);
            setErrorOpen(true);
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSuccessOpen(false);
        setErrorOpen(false);
    };

    return (
        <div>
            <center><h1 style={{marginTop:'40px'}}>USER CONTENT</h1></center>
            <TableContainer component={Paper} sx={{marginTop:'50px'}}>
                <Table aria-label="users table" >
                    <TableHead>
                        <TableRow>
                            <TableCell>Full Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Contact Number</TableCell>
                            <TableCell>Company Name</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(user => (
                            <TableRow key={user._id}>
                                <TableCell>{user.fullName}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.contactNumber}</TableCell>
                                <TableCell>{user.companyName}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>{user.status}</TableCell>
                                <TableCell>
                                    <Button variant="contained" onClick={() => handleAccept(user._id)}>Accept</Button>
                                    <Button variant="contained" onClick={() => handleDecline(user._id)} sx={{margin:'30px',backgroundColor:'red'}}>Decline</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Snackbar open={successOpen} autoHideDuration={2000} onClose={handleClose}>
                <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="success">
                    Action successful!
                </MuiAlert>
            </Snackbar>
            <Snackbar open={errorOpen} autoHideDuration={2000} onClose={handleClose}>
                <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="error">
                    Action failed!
                </MuiAlert>
            </Snackbar>
        </div>
    );
};

export default UsersContent;
