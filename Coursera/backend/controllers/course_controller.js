const Course = require('../models/course_model');  // Adjust the path to where your Course model is located

// Controller to add a new course
const addCourse = async (req, res) => {
    const { name, code, description, courseImg } = req.body;
    try {
        const newCourse = new Course({ name, code, description, courseImg });
        await newCourse.save();
        res.status(201).json({
            status: "Success",
            message: "Course created successfully",
            courseInfo: newCourse
        });
    } catch (error) {
        res.status(500).json({
            status: "Fail",
            message: "Internal server error, unable to create course",
            error: error.message
        });
    }
};

// Controller to get all courses
const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find({});
        res.status(200).json({
            status: "Success",
            message: "Courses fetched successfully",
            courses
        });
    } catch (error) {
        res.status(500).json({
            status: "Fail",
            message: "Internal server error, unable to fetch courses",
            error: error.message
        });
    }
};

// Controller to update a course
const updateCourse = async (req, res) => {
    const { id } = req.params;
    const { name, code, description, courseImg } = req.body;
    try {
        const updatedCourse = await Course.findByIdAndUpdate(
            id,
            { name, code, description, courseImg },
            { new: true, runValidators: true }
        );
        if (!updatedCourse) {
            return res.status(404).json({
                status: "Fail",
                message: "Course not found"
            });
        }
        res.status(200).json({
            status: "Success",
            message: "Course updated successfully",
            courseInfo: updatedCourse
        });
    } catch (error) {
        res.status(500).json({
            status: "Fail",
            message: "Internal server error, unable to update course",
            error: error.message
        });
    }
};

// Controller to delete a course
const deleteCourse = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCourse = await Course.findByIdAndDelete(id);
        if (!deletedCourse) {
            return res.status(404).json({
                status: "Fail",
                message: "Course not found"
            });
        }
        res.status(200).json({
            status: "Success",
            message: "Course deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            status: "Fail",
            message: "Internal server error, unable to delete course",
            error: error.message
        });
    }
};

module.exports = {
    addCourse,
    getAllCourses,
    updateCourse,
    deleteCourse
};
