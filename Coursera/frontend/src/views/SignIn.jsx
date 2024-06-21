import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import NavBar from "../components/NavBar";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Signin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [openAlert, setOpenAlert] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('error');
    const [alertMessage, setAlertMessage] = useState('');

    const inputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
    };

    const submitForm = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:3001/user_api/user_login',
                formData
            );
            if (response.data.token) {
                const token = JSON.stringify(response.data);
                localStorage.setItem('userToken', token);
                setAlertSeverity('success');
                setAlertMessage('Login successful');
                navigate('/');
                // Clear form data after successful login
                setFormData({
                    email: '',
                    password: ''
                });
            } else {
                // Handle non-successful login due to pending or declined status
                throw new Error(response.data.message);
            }
        } catch (error) {
            // Check for specific status related messages
            const message = error.response?.data.message;
            if (message.includes('pending')) {
                setAlertSeverity('warning');
                setAlertMessage('Your account is still not accepted. Please wait for approval.');
            } else if (message.includes('declined')) {
                setAlertSeverity('error');
                setAlertMessage('Your account has been declined. Please contact support for assistance.');
            } else {
                setAlertSeverity('error');
                setAlertMessage('Login failed. Please check your credentials.');
            }
        } finally {
            setOpenAlert(true);
        }
    };

    return (
        <>
            <div className="heroContainer">
                <NavBar />
                <div className="signInForm">
                    <div className="formTitle">Sign In</div>
                    <form onSubmit={submitForm}>
                        <div className="inputContainer">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" onChange={inputChange} value={formData.email} />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" id="password" onChange={inputChange} value={formData.password} />
                        </div>
                        <div className="buttonContainer">
                            <button type="submit">Sign In</button>
                        </div>
                        <div className="noAccount">Don't have an account? <span><NavLink to="/signup">Sign Up</NavLink></span></div>
                    </form>
                </div>
            </div>
            <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleAlertClose}>
                <MuiAlert elevation={6} variant="filled" onClose={handleAlertClose} severity={alertSeverity}>
                    {alertMessage}
                </MuiAlert>
            </Snackbar>
        </>
    );
}

export default Signin;
