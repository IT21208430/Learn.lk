import React, { createContext, useState, useContext } from 'react';

// Creating a context to store course details
const CourseContext = createContext();

// Custom hook to use the CourseContext
export const useCourseContext = () => useContext(CourseContext);

// Course provider component
export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  // Function to add a new course
  const addCourse = (newCourse) => {
    setCourses((prevCourses) => [...prevCourses, newCourse]);
  };

  console.log("Course Context ", courses)

  return (
    <CourseContext.Provider value={{ courses, addCourse }}>
      {children}
    </CourseContext.Provider>
  );
};