import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import NavBar from "../components/NavBar";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactNumber: '',
        companyName: '',
        password: '',
        nationalIdentityCardNumber: '',
        role: ''
    });
    const [openAlert, setOpenAlert] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('');
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

    const formSubmit = async (event) => {
        event.preventDefault();
        try {
            formData.role = 'user';
            await axios.post(
                'http://localhost:3001/user_api/user_register',
                formData
            );
            setFormData({
                fullName: '',
                email: '',
                contactNumber: '',
                companyName: '',
                password: '',
                nationalIdentityCardNumber: '',
                role: ''
            });
            setOpenAlert(true);
            setAlertSeverity('success');
            setAlertMessage('Registration successful. Please sign in.');
            navigate('/signin');
        } catch (error) {
            setOpenAlert(true);
            setAlertSeverity('error');
            setAlertMessage('Registration failed. Please try again.');
            console.error('Error registering user:', error);
        }
    };

    return (
        <>
            <div className="heroContainer">
                <NavBar />
                <div className="signInForm">
                    <div className="formTitle">Sign Up</div>
                    <form onSubmit={formSubmit}>
                        <div className="inputContainer">
                            <label htmlFor="fullName">Full Name <span>*</span></label>
                            <input type="text" name="fullName" id="fullName" onChange={inputChange} value={formData.fullName} />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="email">Email <span>*</span></label>
                            <input type="email" name="email" id="email" onChange={inputChange} value={formData.email} />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="contactNumber">Contact No. <span>*</span></label>
                            <input type="number" name="contactNumber" id="contactNumber" onChange={inputChange} value={formData.contactNumber} />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="nationalIdentityCardNumber">NIC <span>*</span></label>
                            <input type="number" name="nationalIdentityCardNumber" id="nationalIdentityCardNumber" onChange={inputChange} value={formData.nationalIdentityCardNumber} />
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="password">Password <span>*</span></label>
                            <input type="password" name="password" id="password" onChange={inputChange} value={formData.password} />
                        </div>
                       <div className="inputContainer">
                            <label htmlFor="companyName">Company Name <span>*</span></label>
                            <input type="text" name="companyName" id="companyName" onChange={inputChange} value={formData.companyName} />
                            </div>

                        <div className="buttonContainer">
                            <button type="submit">Sign Up</button>
                        </div>
                        <div className="noAccount">Already have an account? <span><NavLink to="/signin">Sign In</NavLink></span></div>
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

export default SignUp;
