const UserSchema = require("../models/userManagement_model");
const CourseSchema = require("../models/course_model");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
require('dotenv').config();


const enrollCourse = async (req, res) => {
    const { courseId } = req.params;
    const user = req.user;

    if (!mongoose.Types.ObjectId.isValid(courseId)) {
        return res.status(400).json({ status: "Fail", message: "Invalid course ID format" });
    }

    try {
        const course = await CourseSchema.findById(courseId);
        if (!course) {
            return res.status(404).json({ status: "Fail", message: "Course not found" });
        }

        const isEnrolled = user.enrolledCourses.some(id => id.equals(course._id));

        if (isEnrolled) {
            user.enrolledCourses = user.enrolledCourses.filter(id => !id.equals(course._id));
            await user.save();
            return res.status(200).json({
                status: "Success",
                message: "Successfully un-enrolled from the course",
                courseInfo: course
            });
        } else {
            user.enrolledCourses.push(course._id);
            await user.save();
            return res.status(200).json({
                status: "Success",
                message: "Successfully enrolled in the course",
                courseInfo: course
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "Fail",
            message: "Internal server error, unable to process the request",
            error: error.toString()
        });
    }
};




const viewEnrolledStudents = async(req, res) => {
    try {
        const { courseId } = req.params;
        if(courseId.length === 24){
            const students  = await UserSchema.find({ enrolledCourses: new mongoose.Types.ObjectId(courseId)})
            // console.log(students);
            res.status(200).json({
                status: "Success",
                enrolledStudents: students,
                error: null
            })
        }else{
            res.status(400).json({
                status: "Fail",
                message: "error occured - enrolled students not found",
                enrolledStudents: null,
                error: "enrolled students not found: invalid object id",
            });
        }
    } catch (error) {
        console.log(error, error.message);
        res.status(500).json({
            status: "Fail",
            message: "error occured - Internal server error, unable to fetch enrolled students",
            enrolledStudents: null,
            error: `${error} : ${error.message}`,
        });
    }
}

module.exports={
    enrollCourse,
    viewEnrolledStudents
}
