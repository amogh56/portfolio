import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Credentials
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. (AI & ML)</h4>
                <h5>Visvesvaraya Technological University (VTU)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Bachelor of Engineering in Artificial Intelligence & Machine Learning, Karnataka. Core Coursework: Neural Networks, Machine Learning, Operating Systems, and Algorithm Analysis.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Certifications</h4>
                <h5>Infosys Springboard & Framework Accreditation</h5>
              </div>
              <h3>CERT</h3>
            </div>
            <p>
              AI foundations & Machine Learning concepts certification alongside Web Developer accreditation validating modern component development, state management, and full-stack web engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Google Cloud Arcade</h4>
                <h5>Google Cloud Platform</h5>
              </div>
              <h3>LABS</h3>
            </div>
            <p>
              Hands-on cloud architecture and data pipeline labs exploration, specializing in backend scaling and cloud resource management.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance & Upskilling</h4>
                <h5>Self-Directed Experience</h5>
              </div>
              <h3>ongoing</h3>
            </div>
            <p>
              Developing responsive frontends, configuring secure REST APIs, and tuning database performance for client projects, while mastering modern engineering architectures (Next.js, TS, PostgreSQL, and cloud native setups).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
