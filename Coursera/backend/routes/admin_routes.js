// routes/users.js

const express = require('express');
const router = express.Router();
const { acceptUser, declineUser } = require('../controllers/admincontroller');

// Route to accept a user
router.patch('/accept/:userId', acceptUser);

// Route to decline a user
router.patch('/decline/:userId', declineUser);

module.exports = router;
