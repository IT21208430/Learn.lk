import Course1 from '../components/courses/1';
import Course2 from '../components/courses/2';
import Course3 from '../components/courses/3';
import Course4 from '../components/courses/4';
import Course5 from '../components/courses/5';
import Course6 from '../components/courses/6';
import { Routes, Route } from 'react-router-dom'

const CourseDetails = () => {


    return (
        <Routes>
            <Route element={<Course1 />} path='/course1' />
            <Route element={<Course2 />} path='/course2' />
            <Route element={<Course3 />} path='/course3' />
            <Route element={<Course4 />} path='/course4' />
            <Route element={<Course5 />} path='/course5' />
            <Route element={<Course6 />} path='/course6' />
        </Routes>
    );
}
 
export default CourseDetails;