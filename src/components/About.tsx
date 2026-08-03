import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a Full-Stack Engineer and Undergraduate Engineering Student who bridges the gap between clean component architecture and production scale. My experience ranges from packing cross-platform mobile frameworks to launching live, high-traffic systems—most notably managing a web ecosystem that successfully handled operational data for over 1,000 active users with zero platform downtime. I focus on building resilient, high-performance applications using React, Node.js, SQL, and modern cloud deployment pipelines.
        </p>
        <div className="about-metrics-grid">
          <div className="metric-card">
            <span className="metric-num">1,000+</span>
            <span className="metric-desc">Active Concurrent Users</span>
          </div>
          <div className="metric-card">
            <span className="metric-num">100%</span>
            <span className="metric-desc">Platform Uptime Managed</span>
          </div>
          <div className="metric-card">
            <span className="metric-num">Mobile</span>
            <span className="metric-desc">Cross-Platform Binaries</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
