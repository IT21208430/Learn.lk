const Lesson2 = ({ changeCurrentComponent }) => {
    return (
        <>
            <div className="lesson" id="startCou">
                <div className="lessonHeading">Introduction to HTML Basics 2</div>
                <div className="lessonContainer">
                    <div className="lessonDuration">Duration: <span>30 minutes</span></div>
                    <div className="lessonDesc">By the end of this lesson, learners will be able to understand the fundamental structure of HTML and create basic web pages.</div>


                    <div className="lessonSubHeading">
                        Key Concepts:                    
                        <hr />
                    </div>
                    <div className="lessonContent">
                        <ul>
                            <li>What is HTML?</li>
                            <li>Structure of an HTML Document</li>
                            <li>HTML Elements and Tags</li>
                            <li>Basic Text Formatting</li>
                        </ul>
                    </div>

                    <div className="lessonSubHeading">
                        What is HTML?
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
                        Structure of an HTML Document
                        <hr />
                    </div>
                    <div className="lessonContent">
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210401153104/htmlstrc.PNG" alt="Structure of an HTML Document" />
                    </div>

                    <div className="lessonSubHeading">
                        HTML Elements and Tags
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
                        Basic Text Formatting
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

export default Lesson2;