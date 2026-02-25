import {
  SiPython,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTensorflow,
  SiMysql,
  SiMongodb,
  SiGit,
  SiLinux,
  SiSelenium,
} from "react-icons/si";
import { FaJava,FaAws } from "react-icons/fa";

export default function Skills() {
  console.log("🔥 NEW SKILLS FILE LOADED");
  const bubbles = [
    { icon: <SiPython color="#4FA8FF" />, label: "Python", x: "14%", y: "32%", speed: "22s" },
    { icon: <SiJavascript color="#FFE600" />, label: "JavaScript", x: "28%", y: "22%", speed: "26s" },
    { icon: <SiReact color="#6FE7FF" />, label: "React", x: "18%", y: "56%", speed: "28s" },

    { icon: <SiCplusplus color="#4DA6FF" />, label: "C++", x: "40%", y: "38%", speed: "20s" },
    { icon: <FaJava color="#33C6FF" />, label: "Java", x: "52%", y: "28%", speed: "24s" },
    { icon: <SiC color="#D6DEE6" />, label: "C", x: "34%", y: "66%", speed: "27s" },

    { icon: <SiHtml5 color="#FF7849" />, label: "HTML", x: "58%", y: "60%", speed: "25s" },
    { icon: <SiCss3 color="#3FA9F5" />, label: "CSS", x: "66%", y: "24%", speed: "23s" },

    { icon: <SiMysql color="#5DB2FF" />, label: "MySQL", x: "76%", y: "42%", speed: "30s" },
    { icon: <SiMongodb color="#4AF626" />, label: "MongoDB", x: "70%", y: "68%", speed: "26s" },

    { icon: <SiTensorflow color="#FF8C1A" />, label: "TensorFlow", x: "50%", y: "64%", speed: "21s" },
    { icon: <FaAws color="#FF9900" />, label: "AWS", x: "82%", y: "22%", speed: "28s" },

    { icon: <SiGit color="#FF5A3C" />, label: "Git", x: "62%", y: "78%", speed: "29s" },
    { icon: <SiLinux color="#FCC624" />, label: "Linux", x: "44%", y: "80%", speed: "31s" },
    { icon: <SiSelenium color="#43B02A" />, label: "Selenium", x: "86%", y: "54%", speed: "27s" },
  ];

  return (
    <>
      <style>{`
        .skills-section {
          padding: 90px 6%;
          background: radial-gradient(circle at top, #122b33, #000);
          color: #f2fefe;
          min-height: 100vh;
        }

        .skills-title {
          font-size: 2.6rem;
          color: #00ffe1;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .skills-subtitle {
          color: #d6fefe;
          font-size: 1rem;
          margin-bottom: 45px;
        }

        .bubble-area {
          position: relative;
          height: 440px;
          border-radius: 26px;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(16px);
          overflow: hidden;
          box-shadow: inset 0 0 60px rgba(0, 255, 225, 0.08);
        }

        .bubble {
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: rgba(0, 255, 213, 0.18);
          border: 2px solid rgba(0, 255, 213, 0.55);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          box-shadow:
            0 0 30px rgba(0, 255, 213, 0.45),
            inset 0 0 25px rgba(0, 255, 255, 0.15);
          animation: drift linear infinite;
        }

        .bubble span {
          font-size: 0.8rem;
          margin-top: 8px;
          font-weight: 600;
          color: #ffffff;
        }

        @keyframes drift {
          0% { transform: translate(0, 0); }
          25% { transform: translate(35px, -25px); }
          50% { transform: translate(-25px, 30px); }
          75% { transform: translate(25px, 15px); }
          100% { transform: translate(0, 0); }
        }

        .skills-cards {
          margin-top: 90px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(0, 255, 213, 0.25);
          border-radius: 18px;
          padding: 26px;
          backdrop-filter: blur(14px);
        }

        .skill-card h3 {
          margin-bottom: 16px;
          font-size: 1.1rem;
          color: #ffffff;
        }

        .skill-card ul {
          list-style: none;
          padding: 0;
        }

        .skill-card li {
          margin-bottom: 10px;
          color: #d0fefe;
        }
      `}</style>

      <section className="skills-section">
        <h2 className="skills-title">My Skills</h2>
        <p className="skills-subtitle">
          ✨ Technical expertise backed by real-world projects and hands-on experience.
        </p>

        <div className="bubble-area">
          {bubbles.map((b, i) => (
            <div key={i} className="bubble" style={{ left: b.x, top: b.y, animationDuration: b.speed }}>
              {b.icon}
              <span>{b.label}</span>
            </div>
          ))}
        </div>

        <div className="skills-cards">
          <div className="skill-card">
            <h3>Programming & Development</h3>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>C / C++</li>
              <li>Java</li>
              <li>HTML & CSS</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Cloud & Backend</h3>
            <ul>
              <li>AWS (Basics)</li>
              <li>Cloud Deployment</li>
              <li>RBAC Implementation</li>
              <li>Backend APIs</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Data Analysis & Visualization</h3>
            <ul>
              <li>Data Analysis</li>
              <li>Statistical Analysis</li>
              <li>SQL</li>
              <li>Microsoft Excel</li>
              <li>Power BI</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Machine Learning & CV</h3>
            <ul>
              <li>YOLOv8</li>
              <li>Object Detection</li>
              <li>Computer Vision</li>
              <li>TensorFlow</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Testing & Automation</h3>
            <ul>
              <li>Selenium</li>
              <li>Automated Web Testing</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Tools & Platforms</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Linux</li>
              <li>MS Office</li>
              <li>Canva</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Professional Skills</h3>
            <ul>
              <li>Problem Solving</li>
              <li>Fast Learner</li>
              <li>Real-world Project Experience</li>
              <li>Frontend–Backend Integration</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
