const express = require('express');
const router = express.Router();
const {getAllCourses,addCourse,updateCourse,deleteCourse} = require('../controllers/course_controller'); 

// Route to get all courses
router.get('/courses', getAllCourses);

// Route to create a new course
router.post('/courses',addCourse);

// Route to update an existing course
router.put('/courses/:id', updateCourse);

// Route to delete a course
router.delete('/courses/:id',deleteCourse);

module.exports = router;
