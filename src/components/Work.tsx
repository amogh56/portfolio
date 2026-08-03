import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    num: "01",
    name: "EventVault",
    category: "Production Event Ecosystem",
    role: "Lead Developer & System Administrator",
    stack: "SQL, Render, SMTP, Tailwind CSS",
    bullets: [
      "Live Scale Deployment: Engineered and scaled a platform managing real-time registration, scheduling, and live operations for over 1,000 users with zero downtime.",
      "Infrastructure Tuning: Maintained 100% platform uptime on Render by tracking environment configurations and refining full-stack deployment pathways under high traffic.",
      "High-Volume Communication: Implemented custom domain verification and SMTP configurations to handle automated transactional updates to 1,000+ attendees.",
      "Relational Architecture: Designed robust SQL schemas to securely store and isolate concurrent event timelines and student tracking profiles without bottlenecks."
    ],
    image: "/images/eventvault_mockup.jpg"
  },
  {
    num: "02",
    name: "HealthHub",
    category: "Cross-Platform Healthcare Framework",
    role: "Full-Stack Web & Mobile Engineer",
    stack: "React, Node.js, Capacitor, Tailwind CSS",
    bullets: [
      "Hybrid App Delivery: Developed a comprehensive medical accessibility platform using React and successfully compiled the codebase into cross-platform mobile binaries using Capacitor.",
      "Layout Design & Styling: Built a fully responsive interface tailored to look sharp and clean across both mobile viewports and desktop monitors using Tailwind utility styling.",
      "Architectural Documentation: Authored and formatted an in-depth technical research paper with an academic guide mapping out the platform's data workflows and system endpoints."
    ],
    image: "/images/healthhub_mockup.jpg"
  },
  {
    num: "03",
    name: "Moodsong",
    category: "Contextual Music Discovery",
    role: "UI/UX Frontend Developer",
    stack: "React, Vite, Tailwind CSS",
    bullets: [
      "State-Driven Interface: Engineered a fluid, unique music discovery UI built around custom state variations that suggest and recommend tracks based on distinct emotional inputs.",
      "Optimized Performance: Built the core application frontend utilizing Vite for instant Hot Module Replacement (HMR) and highly efficient production-ready asset bundles.",
      "Aesthetic Theme Engine: Leveraged Tailwind class configurations to map a tight, immersive design language across the application layout matching user interactions."
    ],
    image: "/images/moodsong_mockup.jpg"
  }
];

const Work = () => {
  useGSAP(() => {
    function s() {
      const box = document.getElementsByClassName("work-box");
      if (box.length === 0) return 0;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      return rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    let r = s();
    function t() {
      let i: any = null;
      if (i) clearTimeout(i);
      i = setTimeout(() => {
        r = s();
      }, 200);
    }

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "+=1500",
        scrub: 0.5,
        pinSpacing: true,
        pin: true,
        pinType: window.innerWidth > 1024 ? "transform" : "fixed",
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -r,
      duration: 500,
      delay: 0.2,
    });

    window.addEventListener("resize", t);

    // Clean up
    return () => {
      window.removeEventListener("resize", t);
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p style={{ color: "var(--accentColor)", fontWeight: 500 }}>{project.category}</p>
                  </div>
                </div>
                <div className="project-details" style={{ marginBottom: "12px", borderBottom: "1px dashed rgba(255,255,255,0.1)", paddingBottom: "8px" }}>
                  <p style={{ fontSize: "14px", fontWeight: 600, color: "#eae5ec", margin: 0 }}>
                    Role: {project.role}
                  </p>
                  <p style={{ fontSize: "12px", color: "var(--accentColor)", margin: "4px 0 0 0", opacity: 0.8 }}>
                    Stack: {project.stack}
                  </p>
                </div>
                <div className="project-highlights" style={{ marginTop: "8px" }}>
                  <ul style={{ paddingLeft: "15px", margin: 0, listStyleType: "square" }}>
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx} style={{ fontSize: "13px", lineHeight: "1.5", color: "#adacac", marginBottom: "8px" }}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
