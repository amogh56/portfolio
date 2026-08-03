import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:amoghyalameli26@gmail.com" data-cursor="disable">
                amoghyalameli26@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Location</h4>
            <p style={{ margin: "10px 0 20px 0" }}>
              <span style={{ color: "#eae5ec", fontSize: "1.1rem", fontWeight: 300 }}>
                Karnataka, India
              </span>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/amogh56"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/amogh-yalameli-b4998233b?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/amoghh15/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Amogh Yalameli</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
