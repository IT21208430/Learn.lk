import { NavHashLink } from "react-router-hash-link";
import { useCourseContext } from '../../context/CourseContext'
import { useEffect, useRef, useState } from "react";

import NavBar from "../NavBar";
import Quiz1 from './courseContent/course1/Quiz1'
import Quiz2 from "./courseContent/course1/Quiz2";
import Lesson1 from "./courseContent/course1/Lesson1";
import Lesson2 from "./courseContent/course1/Lesson2";


const Course1 = () => {

  const { courses } = useCourseContext();
  const [currentComponent, setCurrentComponent] = useState(1)
  const [enrolled, setEnrolled] = useState(false)
  const pageContentDiv = useRef()

  const Quiz1Questions = [
    {
      question: 'What is the capital of France?',
      answers: ['London', 'Madrid', 'Berlin', 'Paris'],
      correctAnswer: 3 // Index of correct answer
    },
    {
      question: 'What is the largest mammal?',
      answers: ['Elephant', 'Whale', 'Giraffe', 'Rhino'],
      correctAnswer: 1
    },
    {
      question: 'Which country is known as the Land of the Rising Sun?',
      answers: ['Australia', 'India', 'Japan', 'China'],
      correctAnswer: 2
    },
    {
      question: 'What is the tallest mountain in the world?',
      answers: ['Mount Kilimanjaro', 'Mount Everest', 'Mount Fuji', 'Mount McKinley'],
      correctAnswer: 1
    },
    // Add more questions as needed
  ];

  const Quiz2Questions = [
    {
      question: 'What is the capital of France?',
      answers: ['London', 'Madrid', 'Berlin', 'Paris'],
      correctAnswer: 3 // Index of correct answer
    },
    {
      question: 'What is the largest mammal?',
      answers: ['Elephant', 'Whale', 'Giraffe', 'Rhino'],
      correctAnswer: 1
    },
    {
      question: 'Which country is known as the Land of the Rising Sun?',
      answers: ['Australia', 'India', 'Japan', 'China'],
      correctAnswer: 2
    },
    {
      question: 'Who is credited with discovering the theory of relativity?',
      answers: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nikola Tesla'],
      correctAnswer: 1
    },
    // Add more questions as needed
  ];

  const changeCurrentComponent = () => {
    // Incrementing currentComponent, and looping back to 1 if it exceeds the total number of components
    setCurrentComponent(currentComponent === 4 ? 1 : currentComponent + 1);
  };

  const enrollToCourse = async () => {
    try {
      //axios call for enrolling to course
      // make it as to not have duplicates in the db and if it has a duplicate throw an error with the progress of the course
      throw Error("something")
      // if(response.ok){
      //   setCurrentComponent(1)
      //   window.scrollTo(0,window.innerHeight)
      // }
    } catch(error){
      setEnrolled(true)
      pageContentDiv.current.style = 'flex'

      // switch(progress){
      //   case 25:
      //     setCurrentComponent(2)
      //     break;
      //   case 50:
      //     setCurrentComponent(3)
      //     break;
      // }
      window.scrollTo(0,window.innerHeight)
    }
  }

  useEffect(() => {
    enrollToCourse()
  }, [])

  useEffect(() => {
    if(currentComponent == 0){
      pageContentDiv.current.style.display = 'none'
    }
  }, [currentComponent])

  return (
    <>
      <div className="heroContainer">
        <NavBar />
        <div className="hero">
          <div className="mainTextContainer">{courses[0] && courses[0].title}</div>
          <div className="buttonContainer">
            <NavHashLink><button style={{ display: 'none' }} >Take a Course</button></NavHashLink>
            {enrolled ? (<NavHashLink to="#startCourse"><button>Continue Course</button></NavHashLink>) : (<NavHashLink><button onClick={enrollToCourse}>Start Course</button></NavHashLink>)}
          </div>
        </div>
      </div>
      <div className="pageContent" id="startCourse" style={{display: 'none'}} ref={pageContentDiv}>
        {currentComponent == 0 && ""}
        {currentComponent == 1 && <Lesson1 changeCurrentComponent={changeCurrentComponent} />}
        {currentComponent == 2 && <Quiz1 questions={Quiz1Questions} changeCurrentComponent={changeCurrentComponent} />}
        {currentComponent == 3 && <Lesson2 changeCurrentComponent={changeCurrentComponent} />}
        {currentComponent == 4 && <Quiz2 questions={Quiz2Questions} changeCurrentComponent={changeCurrentComponent} />}
      </div>
    </>
  );
}

export default Course1;