import { NavLink , useNavigate} from "react-router-dom";

import { FaTwitter, FaGithubAlt, FaInstagram } from "react-icons/fa";

const NavBar = () => {

    const navigate = useNavigate()

    const token = localStorage.getItem('userToken')

    const logout = () => {
        localStorage.removeItem('userToken')
        navigate('/')
    }

    return ( 
        <>
            { !token ? (
            <nav>
                <div className="topContainer">
                    <div className="contactNo">Call: +01 123 456 7890</div>
                    <hr />
                    <div className="socials">
                        <FaTwitter />
                        <FaGithubAlt />
                        <FaInstagram />
                    </div>
                </div>
                <div className="bottomContainer">
                    <div className="logo">LEARN<span>.</span></div>
                    <div className="linksContainer">
                        <div className="link"><NavLink to="/">Home</NavLink></div>
                        <div className="link"><NavLink to="/courses">Courses</NavLink></div>
                        <div className="link"><NavLink to="/blog">Blog</NavLink></div>
                        <div className="link"><NavLink to="/signin">Sign In</NavLink></div>
                    </div>
                </div>
            </nav>
        ) : (
            <nav>
                <div className="topContainer">
                    <div className="contactNo">Call: +01 123 456 7890</div>
                    <hr />
                    <div className="socials">
                        <FaTwitter />
                        <FaGithubAlt />
                        <FaInstagram />
                    </div>
                </div>
                <div className="bottomContainer">
                    <div className="logo">LEARN<span>.</span></div>
                    <div className="linksContainer">
                        <div className="link"><NavLink to="/">Home</NavLink></div>
                        <div className="link"><NavLink to="/courses">Courses</NavLink></div>
                        <div className="link"><NavLink to="/blog">Blog</NavLink></div>
                        <div className="link"><NavLink to="/profile">Profile</NavLink></div>
                        <div className="link" onClick={logout}>Log Out</div>
                    </div>
                </div>
            </nav>
        )}
        </>
     );
}
 
export default NavBar;