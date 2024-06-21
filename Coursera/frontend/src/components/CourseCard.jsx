import { Rating } from 'react-simple-star-rating'
import { NavLink, useNavigate } from "react-router-dom";


const CourseCard = ({ course }) => {

    const navigate = useNavigate()
    const token = localStorage.getItem('userToken')

    const scrollToTop = () => {
        window.scroll(0,0)
    }

    return ( 
        <>
            <div className="courseCard">

                <div className="courseImage">
                    <img src={"./Images/developer.jpg"} alt="" />
                </div>
                <div className="topContainer">
                    <div className="heading">{course.title? course.title : "Course Title etc.."}</div>
                    <div className="subHeading">{course.description? course.description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi officiis veritatis odit adipisci illo velit."}</div>
                </div>
                <hr />
                <div className="bottomContainer">
                    <Rating initialValue={course.rating} readonly="true" />
                    {/* <div className="price">$200</div> */}
                    <NavLink to={token ? `/courseDetails/course${course.id}` : '/signin'} className="startCourseButton"><button onClick={scrollToTop}>Start Course</button></NavLink>
                </div>
            </div>
        </>
    );
}
 
export default CourseCard;