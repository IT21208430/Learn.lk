import NavBar from "../NavBar";
import { NavHashLink } from "react-router-hash-link";

import { useCourseContext } from '../../context/CourseContext'

const course5 = () => {

    const { courses } = useCourseContext();

    return ( 
        <div className="heroContainer">
            <NavBar />
            <div className="hero">
                <div className="mainTextContainer">{courses[4].title}</div>
                <div className="buttonContainer">
                    <NavHashLink><button style={{display: 'none'}}>Take a Course</button></NavHashLink>
                    <NavHashLink to=""><button>Start Course</button></NavHashLink>
                </div>
            </div>
        </div>
    );
}
 
export default course5;