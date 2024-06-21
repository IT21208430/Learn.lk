import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar'
import { Rating } from 'react-simple-star-rating'

import { useCourseContext } from '../context/CourseContext'
import CourseCard from '../components/CourseCard';

const Home = () => {

    const { courses } = useCourseContext();
    var timesLooped = 0

    return ( 
        <>
            <div className="heroContainer">
                <NavBar />
                <div className="hero">
                    <div className="mainTextContainer">The Art of Teaching is the Art of Assisting Discovery</div>
                    <div className="buttonContainer">
                        <NavLink to="/courses"><button>Take a Course</button></NavLink>
                        <NavLink to="/signup"><button>Create Account</button></NavLink>
                    </div>
                </div>
            </div>
            <div className="coursesContainer">
                <div className="headerText">
                    <div className="main">Demanding Courses</div>
                    <div className="sub">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
                </div>
                <div className="courseCardContainer">
                    {courses.map( (course) => {
                        if(course.rating >= 3){
                            timesLooped++
                        }
                        return(
                            <>
                                {course.rating >= 3 && timesLooped <= 3 ? <CourseCard course={course} /> : ""}
                            </>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </>
     );
}
 
export default Home;