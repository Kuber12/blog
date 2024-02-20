import "./AboutUs.css";
import NewNavi from "./NewwNav";
import Footer from "./Footer";
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
                src="https://firebasestorage.googleapis.com/v0/b/uploadingfile-fdbcf.appspot.com/o/kuber.jpg?alt=media&token=5bb414ab-6dba-4798-9256-369e2a315981"
                alt="team member"
                className="team-member-img"
              />
              <div>
                <h4 className="about-member-role">Full Stack Developer</h4>
                <h3 className="about-member-name">Kuber Bajra Shakya</h3>
                <p>
                  I am proficient in web development, specializing in creating
                  and designing efficient systems. My skills extend to project
                  management and web designing ensuring successful oversight and
                  completion of tasks.
                </p>
                <div className="about-icon-box">
                  <a
                    href="https://www.facebook.com/profile.php?id=100004524277925"
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
                    href="https://www.linkedin.com/in/kuber-shakya/"
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
                    href="https://github.com/Kuber12"
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
                    href="https://kuberbajrashakya.com.np"
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
                src="https://firebasestorage.googleapis.com/v0/b/uploadingfile-fdbcf.appspot.com/o/sariinaa.jpg?alt=media&token=0c370aad-443f-4973-897b-03d7b70e87f8"
                alt="team member"
                className="team-member-img"
              />
              <div>
                <h4 className="about-member-role">Frontend Developer</h4>
                <h3 className="about-member-name">Sarina Maharjan</h3>
                <p>
                  I am a proactive person with a genuine eagerness to learn and
                  expand my knowledge. Currently a student, my specific interest
                  lies in Frontend Development and UI/UX Designing.
                </p>
                <div className="about-icon-box">
                  <a
                    href="https://www.facebook.com/sareena.maharjan.1447?mibextid=YMEMSu"
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
                    href="https://www.linkedin.com/in/sarina-maharjan-b29609244/"
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
                    href="https://github.com/666Deadsoul"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="about-icon"
                      icon={faGithub}
                      style={{ fontSize: "30px" }}
                    />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
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
      <Footer />
    </>
  );
};
export default AboutUs;
