import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return ( 
        <footer>
            <div className="topContainer">
                <div className="logo">LEARN<span>.</span></div>
                <div className="contentContainer">
                    <div className="linksContainer">
                        <div className="heading">Learning</div>
                        <div className="link">Courses</div>
                        <div className="link">Blog</div>
                        <div className="link">Courses</div>
                        <div className="link">Blog</div>
                    </div>
                    <div className="linksContainer">
                        <div className="heading">Contact Us</div>
                        <div className="link"><span><FaPhoneAlt /></span> &nbsp; +01 123 456 7890</div>
                        <div className="link"><span><FaFacebook /></span> &nbsp; Facebook</div>
                        <div className="link"><span><FaTwitter /></span> &nbsp; Twitter</div>
                        <div className="link"><span><FaInstagram /></span> &nbsp; Instagram</div>
                    </div>
                </div>
            </div>
            <div className="bottomContainer">© 2024 Free HTML5. All Rights Reserved.</div>
        </footer>
     );
}
 
export default Footer;