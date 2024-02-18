import "./AboutUs.css";
import NewNavi from "./NewwNav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
const AboutUs = () => {
    return(
        <>
            <NewNavi/>
            <div className="B_wrapper">
                <div className="about-us">
                    <h2 className="about-heading hedvig">Meet Our Team</h2>
                    <div className="about-members">
                        <div className="about-member">
                            <img src="../../uploads/Profile.png" alt="team member" className="team-member-img" />
                            <div>
                                <h4 className="about-member-role">Manager</h4>
                                <h3 className="about-member-name">Hedvig Svedberg</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                                <div className="about-icon-box">
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon
                                        className="about-icon"
                                        icon={faFacebook}
                                        style={{ fontSize: "30px"}}
                                    />
                                </a>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon
                                        className="about-icon"
                                        icon={faLinkedin}
                                        style={{ fontSize: "30px"}}
                                    />
                                </a>
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon
                                        className="about-icon"
                                        icon={faGithub}
                                        style={{ fontSize: "30px"}}
                                    />
                                </a>
                                <a href="https://www.your-website.com/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon
                                        className="about-icon"
                                        icon={faGlobe}
                                        style={{ fontSize: "30px"}}
                                    />
                                </a>
                                </div>
                            </div>
                        </div>
                        <div className="about-member">
                            <img src="../../uploads/Profile.png" alt="team member" className="team-member-img" />
                            <div>
                                <h4 className="about-member-role">Manager</h4>
                                <h3 className="about-member-name">Hedvig Svedberg</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                                <div className="about-icon-box">
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon
                                        className="about-icon"
                                        icon={faFacebook}
                                        style={{ fontSize: "30px"}}
                                    />
                                </a>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon
                                        className="about-icon"
                                        icon={faLinkedin}
                                        style={{ fontSize: "30px"}}
                                    />
                                </a>
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon
                                        className="about-icon"
                                        icon={faGithub}
                                        style={{ fontSize: "30px"}}
                                    />
                                </a>
                                <a href="https://www.your-website.com/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon
                                        className="about-icon"
                                        icon={faGlobe}
                                        style={{ fontSize: "30px"}}
                                    />
                                </a>
                                </div>
                            </div>
                        </div>
                        <div className="about-member">
                            <img src="../../uploads/Profile.png" alt="team member" className="team-member-img" />
                            <div>
                                <h4 className="about-member-role">Manager</h4>
                                <h3 className="about-member-name">Hedvig Svedberg</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                                <div className="about-icon-box">
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon
                                        className="about-icon"
                                        icon={faFacebook}
                                        style={{ fontSize: "30px"}}
                                    />
                                </a>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon
                                        className="about-icon"
                                        icon={faLinkedin}
                                        style={{ fontSize: "30px"}}
                                    />
                                </a>
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon
                                        className="about-icon"
                                        icon={faGithub}
                                        style={{ fontSize: "30px"}}
                                    />
                                </a>
                                <a href="https://www.your-website.com/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon
                                        className="about-icon"
                                        icon={faGlobe}
                                        style={{ fontSize: "30px"}}
                                    />
                                </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutUs;