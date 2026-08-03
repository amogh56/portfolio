import { useEffect } from "react";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { 
  FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGithub, FaGitAlt, FaFigma, FaDatabase
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiVite, SiExpress, SiPostgresql, SiMysql, SiSupabase, SiFlask, SiCapacitor, SiRender, SiNetlify, SiGnubash 
} from "react-icons/si";
import "./styles/TechStack.css";

const TechStack = () => {
  useEffect(() => {
    // Refresh ScrollTrigger to ensure bounds are correctly aligned
    ScrollTrigger.refresh();
    
    // Add dynamic interactive hover radial lighting trail on bento cards
    const cards = document.querySelectorAll(".bento-card");
    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const card = mouseEvent.currentTarget as HTMLDivElement;
      const rect = card.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left;
      const y = mouseEvent.clientY - rect.top;
      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
      });
    };
  }, []);

  const frontendSkills = [
    { name: "React", icon: <FaReact className="skill-icon react" /> },
    { name: "Next.js", icon: <SiNextdotjs className="skill-icon nextjs" /> },
    { name: "TypeScript", icon: <SiTypescript className="skill-icon typescript" /> },
    { name: "JavaScript", icon: <SiJavascript className="skill-icon javascript" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="skill-icon tailwind" /> },
    { name: "Vite", icon: <SiVite className="skill-icon vite" /> },
    { name: "HTML5", icon: <FaHtml5 className="skill-icon html5" /> },
    { name: "CSS3", icon: <FaCss3Alt className="skill-icon css3" /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs className="skill-icon nodejs" /> },
    { name: "Express", icon: <SiExpress className="skill-icon express" /> },
    { name: "Python", icon: <FaPython className="skill-icon python" /> },
    { name: "SQL", icon: <FaDatabase className="skill-icon sql" /> },
    { name: "MySQL", icon: <SiMysql className="skill-icon mysql" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="skill-icon postgres" /> },
    { name: "Supabase", icon: <SiSupabase className="skill-icon supabase" /> },
    { name: "Flask", icon: <SiFlask className="skill-icon flask" /> },
  ];

  const toolsSkills = [
    { name: "Capacitor", icon: <SiCapacitor className="skill-icon capacitor" /> },
    { name: "Git", icon: <FaGitAlt className="skill-icon git" /> },
    { name: "GitHub", icon: <FaGithub className="skill-icon github" /> },
    { name: "Figma", icon: <FaFigma className="skill-icon figma" /> },
    { name: "Render", icon: <SiRender className="skill-icon render" /> },
    { name: "Netlify", icon: <SiNetlify className="skill-icon netlify" /> },
    { name: "Linux CLI", icon: <SiGnubash className="skill-icon linux" /> },
  ];

  return (
    <div className="techstack" id="techstack">
      <h2>MY TECH STACK</h2>
      <div className="tech-bento-grid">
        <div className="bento-card bento-frontend">
          <div className="bento-card-header">
            <h3>FRONTEND</h3>
            <p>Creating immersive, responsive, and pixel-perfect user interfaces.</p>
          </div>
          <div className="skills-tag-container">
            {frontendSkills.map((skill, index) => (
              <div className="skill-tag" key={index}>
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bento-card bento-backend">
          <div className="bento-card-header">
            <h3>BACKEND & DATABASES</h3>
            <p>Building secure, scalable APIs and managing performant relational systems.</p>
          </div>
          <div className="skills-tag-container">
            {backendSkills.map((skill, index) => (
              <div className="skill-tag" key={index}>
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bento-card bento-tools">
          <div className="bento-card-header">
            <h3>MOBILE & DEPLOYMENT</h3>
            <p>Tuning CI/CD delivery pipelines and bundling hybrid mobile apps.</p>
          </div>
          <div className="skills-tag-container">
            {toolsSkills.map((skill, index) => (
              <div className="skill-tag" key={index}>
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
