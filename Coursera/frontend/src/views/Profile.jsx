import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import { NavHashLink } from 'react-router-hash-link'
import ProgressBar from "@ramonak/react-progress-bar";

import profilePhoto from '../images/profilePhoto.webp'

const Profile = () => {
    return ( 
        <>
            <div className="heroContainer">
                <NavBar />
                <div className="hero">
                    <div className="mainTextContainer">Welcome John Doe!</div>
                    <div className="buttonContainer">
                        <NavHashLink to="#profile"><button>Explore Your Profile</button></NavHashLink>
                        {/* <NavLink to="/signup"><button>Create Account</button></NavLink> */}
                    </div>
                </div>
            </div>
            <div className="profilePage" id="profile">
                <div className="topContainer">
                    <div className="profilePhoto">
                        <img src={profilePhoto} alt="profile photo" />
                    </div>
                    <div className="profileMainDetails">
                        <div className="name">John Doe</div>
                        <div className="company">ABC (Pvt) Ltd</div>
                        <div className="email">johndoe@gmail.com</div>
                        <div className="courseDetailsContainer">
                            <div className="enrolledCourses">
                                <div className="count">5</div>
                                <div className="title">Enrolled Courses</div>
                            </div>
                            <hr />
                            <div className="enrolledCourses">
                                <div className="count">10</div>
                                <div className="title">Completed Courses</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottomContainer">
                    <div className="containerTitle">Enrolled Courses</div>
                    <hr />
                    <div className="courseCardContainer">
                        <div className="courseCard">
                            <input type="radio" name="collpase" id="first" checked/>
                            <label htmlFor='first'> Course 1 Title</label>
                            <p>
                                <div className="courseCompletion">
                                    Course Completion <ProgressBar completed={50} bgColor="#999"  />
                                </div>
                                <div className="quizCompletion">
                                    <div className="title">Quiz Marks</div>
                                    <hr />
                                    <div className="quizes">
                                        <div className="quiz">
                                            Quize 1 <ProgressBar completed={80} bgColor="#ccc"  />
                                        </div>
                                        <div className="quiz">
                                            Quize 2 <ProgressBar completed={80} bgColor="#ccc"  />
                                        </div>
                                        <div className="quiz">
                                            Quize 3 <ProgressBar completed={80} bgColor="#ccc"  />
                                        </div>
                                        <div className="quiz">
                                            Quize 4 <ProgressBar completed={80} bgColor="#ccc"  />
                                        </div>
                                    </div>
                                </div>
                            </p>
                        </div>
                        <div className="courseCard">
                            <input type="radio" name="collpase" id="second" />
                            <label htmlFor='second'> Course 2 Title</label>
                            <p>
                                <div className="courseCompletion">
                                    Course Completion <ProgressBar completed={50} bgColor="#999"  />
                                </div>
                                <div className="quizCompletion">
                                    <div className="title">Quiz Marks</div>
                                    <hr />
                                    <div className="quizes">
                                        <div className="quiz">
                                            Quize 1 <ProgressBar completed={80} bgColor="#ccc"  />
                                        </div>
                                        <div className="quiz">
                                            Quize 2 <ProgressBar completed={80} bgColor="#ccc"  />
                                        </div>
                                        <div className="quiz">
                                            Quize 3 <ProgressBar completed={80} bgColor="#ccc"  />
                                        </div>
                                        <div className="quiz">
                                            Quize 4 <ProgressBar completed={80} bgColor="#ccc"  />
                                        </div>
                                    </div>
                                </div>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
     );
}
 
export default Profile;