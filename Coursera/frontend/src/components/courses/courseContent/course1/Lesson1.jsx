import { FaRegHandPointRight } from "react-icons/fa6";
import { TiArrowRightThick } from "react-icons/ti";

const Lesson1 = ({ changeCurrentComponent }) => {
    return (
        <>
            <div className="lesson" id="startCou">
                <div className="lessonHeading">Introduction to HTML Basics</div>
                <div className="lessonContainer">
                    <div className="lessonDuration">Duration: <span>30 minutes</span></div>
                    <div className="lessonDesc">By the end of this lesson, learners will be able to understand the fundamental structure of HTML and create basic web pages.</div>


                    <div className="lessonSubHeading">
                        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}><TiArrowRightThick /> Key Concepts:</div>
                        <hr />
                    </div>
                    <div className="lessonContent">
                        <ul>
                            <li><FaRegHandPointRight /> What is HTML?</li>
                            <li><FaRegHandPointRight /> Structure of an HTML Document</li>
                            <li><FaRegHandPointRight /> HTML Elements and Tags</li>
                            <li><FaRegHandPointRight /> Basic Text Formatting</li>
                        </ul>
                    </div>

                    <div className="lessonSubHeading">
                        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}><TiArrowRightThick />What is HTML?</div>
                        <hr />
                    </div>
                    <div className="lessonContent">
                        <ul>
                            <li>HTML stands for HyperText Markup Language.</li>
                            <li>It is the standard markup language for creating web pages.</li>
                            <li>HTML provides the structure of a webpage, defining its content and layout.</li>
                        </ul>
                    </div>

                    <div className="lessonSubHeading">
                        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}><TiArrowRightThick />Structure of an HTML Document</div>
                        <hr />
                    </div>
                    <div className="lessonContent">
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210401153104/htmlstrc.PNG" alt="Structure of an HTML Document" />
                    </div>

                    <div className="lessonSubHeading">
                        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}><TiArrowRightThick />HTML Elements and Tags</div>
                        <hr />
                    </div>
                    <div className="lessonContent">
                        <ul>
                            <li>HTML stands for HyperText Markup Language.</li>
                            <li>It is the standard markup language for creating web pages.</li>
                            <li>HTML provides the structure of a webpage, defining its content and layout.</li>
                        </ul>
                    </div>

                    <div className="lessonSubHeading">
                        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}><TiArrowRightThick />Basic Text Formatting</div>
                        <hr />
                    </div>
                    <div className="lessonContent">
                        <ul>
                            <li>HTML stands for HyperText Markup Language.</li>
                            <li>It is the standard markup language for creating web pages.</li>
                            <li>HTML provides the structure of a webpage, defining its content and layout.</li>
                        </ul>
                    </div>

                    <button onClick={changeCurrentComponent}>Next</button>
                </div>
            </div>
        </>
    );
}

export default Lesson1;