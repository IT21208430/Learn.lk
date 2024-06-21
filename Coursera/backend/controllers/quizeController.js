const Quiz = require('../models/quize');

exports.addQuiz = async (req, res) => {
    try {
        const { userId, courseId, name, marks } = req.body;
        const quiz = new Quiz({ userId, courseId, name, marks });
        await quiz.save();
        res.status(201).json({ success: true, message: 'Quiz added successfully', quiz });
    } catch (error) {
        console.error('Error adding quiz:', error);
        res.status(500).json({ success: false, message: 'Failed to add quiz', error: error.message });
    }
};


exports.getUserQuizzes = async (req, res) => {
    try {
        const userId = req.user._id; // Assuming you have implemented authentication middleware to attach user object to req
        const quizzes = await Quiz.find({ userId }).populate('courseId');
        
        // Extract required data and format response
        const formattedQuizzes = quizzes.map(quiz => {
            const quizDetails = {
                name: quiz.name,
                marks: quiz.marks,
                courseName: quiz.courseId.name // Assuming course has a field 'name'
            };

            // Logging the quiz details to the console
            console.log('Quiz Details:', quizDetails);

            return quizDetails;
        });

        res.status(200).json({ success: true, quizzes: formattedQuizzes });
    } catch (error) {
        console.error('Error fetching quizzes:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch quizzes', error: error.message });
    }
};
