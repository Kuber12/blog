import "./AboutUs.css";
import NewNavi from "./NewwNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
const AboutUs = () => {
  return (
    <>
      <NewNavi />
      <div className="B_wrapper">
        <div className="about-us">
          <h2 className="about-heading hedvig">Meet Our Team</h2>
          <div className="about-members">
            <div className="about-member">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/uploadingfile-fdbcf.appspot.com/o/me.jpg?alt=media&token=fd1d21dd-c16f-48c4-a974-eda7885d459d"
                alt="team member"
                className="team-member-img"
              />
              <div>
                <h4 className="about-member-role">Frontend Developer</h4>
                <h3 className="about-member-name">Rikin Tuladhar</h3>
                <p>
                  I am an energetic and enthusiastic computer science student
                  with a strong desire to learn and train with professionals in
                  UI/UX and Frontend development.
                </p>
                <div className="about-icon-box">
                  <a
                    href="https://www.facebook.com/senyadta2/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="about-icon"
                      icon={faFacebook}
                      style={{ fontSize: "30px" }}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rikin-tuladhar-0757a7228/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="about-icon"
                      icon={faLinkedin}
                      style={{ fontSize: "30px" }}
                    />
                  </a>
                  <a
                    href="https://github.com/Senyadt2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="about-icon"
                      icon={faGithub}
                      style={{ fontSize: "30px" }}
                    />
                  </a>
                  <a
                    href="https://portfolio-deployed-murex.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="about-icon"
                      icon={faGlobe}
                      style={{ fontSize: "30px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="about-member">
              <img
                src="../../uploads/Profile.png"
                alt="team member"
                className="team-member-img"
              />
              <div>
                <h4 className="about-member-role">Manager</h4>
                <h3 className="about-member-name">Hedvig Svedberg</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                <div className="about-icon-box">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="about-icon"
                      icon={faFacebook}
                      style={{ fontSize: "30px" }}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="about-icon"
                      icon={faLinkedin}
                      style={{ fontSize: "30px" }}
                    />
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="about-icon"
                      icon={faGithub}
                      style={{ fontSize: "30px" }}
                    />
                  </a>
                  <a
                    href="https://www.your-website.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="about-icon"
                      icon={faGlobe}
                      style={{ fontSize: "30px" }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="about-member">
              <img
                src="../../uploads/Profile.png"
                alt="team member"
                className="team-member-img"
              />
              <div>
                <h4 className="about-member-role">Manager</h4>
                <h3 className="about-member-name">Hedvig Svedberg</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                <div className="about-icon-box">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="about-icon"
                      icon={faFacebook}
                      style={{ fontSize: "30px" }}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="about-icon"
                      icon={faLinkedin}
                      style={{ fontSize: "30px" }}
                    />
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="about-icon"
                      icon={faGithub}
                      style={{ fontSize: "30px" }}
                    />
                  </a>
                  <a
                    href="https://www.your-website.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="about-icon"
                      icon={faGlobe}
                      style={{ fontSize: "30px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
