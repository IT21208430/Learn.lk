const express = require('express');
const router = express.Router();
const { addQuiz, getUserQuizzes } = require('../controllers/quizeController');
const  requireAuth  = require('../middlewares/user_middleware');

// Route to add a quiz
router.post('/add', requireAuth, addQuiz);

// Route to fetch quizzes for the logged-in user
router.get('/user/getQuize', requireAuth, getUserQuizzes);

module.exports = router;
