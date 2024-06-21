const express = require('express');
const router = express.Router();
const {  register,
    login,
    getUserProfile,
    updateProfile,
    deleteUser,
    deleteUserByID,
    verifyToken,
    getAllUsers} = require('../controllers/userManagement_controller');
const authMiddleware = require('../middlewares/user_middleware');

// Registration route
router.post('/user_register', register);

// Login route
router.post('/user_login', login);

//get user profile
router.get('/user_profile', authMiddleware, getUserProfile);

//update profile
router.put('/update_profile', authMiddleware, updateProfile);

//delete user profile
router.delete('/delete_profile', authMiddleware,deleteUser);

router.delete('/delete_profile_byID/:userID',deleteUserByID);

router.get('/allusers',getAllUsers);



// //verify token
// router.post('/verify_token',verifyAuthorityStudent,verifyToken);
module.exports = router;

