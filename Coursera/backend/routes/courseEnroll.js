const express = require("express");
const router = express.Router();
const {enrollCourse,viewEnrolledStudents} = require("../controllers/courseEnroll");
const authMiddleware = require("../middlewares/user_middleware")

router.post("/courses/:courseId",authMiddleware,enrollCourse);
router.get("/view/:courseId",viewEnrolledStudents);

module.exports = router;