import { NavHashLink } from 'react-router-hash-link';

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CourseCard from '../components/CourseCard';

import { useCourseContext } from '../context/CourseContext'



const Courses = () => {

    const { courses } = useCourseContext();

    console.log(courses)
    return ( 
        <>
            <div className="heroContainer">
                <NavBar />
                <div className="hero">
                    <div className="mainTextContainer">The Art of Teaching is the Art of Assisting Discovery</div>
                    <div className="buttonContainer">
                        <NavHashLink to="/courses#coursesContainer"><button>View All Courses</button></NavHashLink>
                        {/* <button>Take a Course</button> */}
                    </div>
                </div>
            </div>

            <div className="coursesContainer" id="coursesContainer">
                <div className="headerText">
                    <div className="main">Take a course</div>
                    <div className="sub">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
                </div>
                <div className="courseCardContainer">

                    {courses.map( (course, index) => (
                        <CourseCard key={index} course={course} />
                    ))}

                </div>
            </div>

            <Footer />
        </>
    );
}
 
export default Courses;