import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './views/Home'
import SignIn from './views/SignIn'
import Profile from './views/Profile'
import Courses from './views/Courses'
import SignUp from './views/SignUp'
import CourseDetails from './views/CourseDetails'
import Dashboard from './admin/dashboard'

import { useCourseContext } from './context/CourseContext'
import { useEffect } from 'react'
import AdminLogin from './admin/adminLogin'


function App() {
  
  const { addCourse } = useCourseContext();
  
  // useEffect(() => {
  //   addCourse({
  //     id: 1,
  //     title: "Course 1",
  //     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus veniam eum nostrum, nisi numquam quidem. Eos sint minima voluptatem, esse, necessitatibus commodi maxime voluptatibus fugit ab, deserunt unde atque fugiat",
  //     rating: "2"
  //   })
  //   addCourse({
  //     id: 2,
  //     title: "Course 2",
  //     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus veniam eum nostrum, nisi numquam quidem. Eos sint minima voluptatem, esse, necessitatibus commodi maxime voluptatibus fugit ab, deserunt unde atque fugiat",
  //     rating: "4"
  //   })
  //   addCourse({
  //     id: 3,
  //     title: "Course 3",
  //     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus veniam eum nostrum, nisi numquam quidem. Eos sint minima voluptatem, esse, necessitatibus commodi maxime voluptatibus fugit ab, deserunt unde atque fugiat",
  //     rating: "3"
  //   })
  //   addCourse({
  //     id: 4,
  //     title: "Course 4",
  //     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus veniam eum nostrum, nisi numquam quidem. Eos sint minima voluptatem, esse, necessitatibus commodi maxime voluptatibus fugit ab, deserunt unde atque fugiat",
  //     rating: "1"
  //   })
  //   addCourse({
  //     id: 5,
  //     title: "Course 5",
  //     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus veniam eum nostrum, nisi numquam quidem. Eos sint minima voluptatem, esse, necessitatibus commodi maxime voluptatibus fugit ab, deserunt unde atque fugiat",
  //     rating: "5"
  //   })
  //   addCourse({
  //     id: 6,
  //     title: "Course 6",
  //     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus veniam eum nostrum, nisi numquam quidem. Eos sint minima voluptatem, esse, necessitatibus commodi maxime voluptatibus fugit ab, deserunt unde atque fugiat",
  //     rating: "3"
  //   })
  // }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<SignIn />} path='/signin' />
        <Route element={<Profile />} path='/profile' />
        <Route element={<Courses />} path='/courses' />
        <Route element={<SignUp />} path='/signup' />
        <Route element={<CourseDetails />} path='/coursedetails/*' />
        <Route element={<Dashboard />} path='/admin/dashboard' />
        <Route element={< AdminLogin/>} path='/admin/login' />


      </Routes>
    </BrowserRouter>
  )
}

export default App
