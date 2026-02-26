import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import projectImage1 from "../assets/P_1.png";
import projectImage2 from "../assets/P_2.jpg";
import projectImage3 from "../assets/P_3.png";
import projectImage4 from "../assets/P_4.png";
import projectImage5 from "../assets/P_5.png";
import projectImage6 from "../assets/P_6.png";
import projectImage7 from "../assets/P_7.png";
import projectImage8 from "../assets/P_8.png";

function Projects() {
  return (
    <section style={wrapper}>
      {/* ADDED: background glow */}
      <div style={bgGlow}></div>

      <h2 style={title}>🚀 Projects</h2>
      <p style={subtitle}>
        A collection of my major works — blending development, problem-solving,
        and real-world applications.
      </p>

      <div style={grid}>

        {/* PROJECT 1 */}
        <motion.div
          whileHover={{ y: -10, boxShadow: hoverGlow }}
          style={card}
        >
          <div style={imageWrapper}>
            <img src={projectImage1} alt="" style={image} />
          </div>
          <h3 style={projectTitle}>Airline and Destination Data Analysis (Excel)</h3>
          <p style={desc}>
            Data-driven analysis of airline and destination performance,
            focusing on trends, growth metrics, and actionable insights.
          </p>
          <div style={techRow}>
            <span style={tech}>Microsoft Excel</span>
            <span style={tech}>Statistical Analysis</span>
            <span style={tech}>Data Visualization</span>
            <span style={tech}>EDA</span>
          </div>
          <div style={btnRow}>
            <a href="https://github.com/prabhavdeshpande89-hue/airline-destination-data-analysis" target="_blank" rel="noopener noreferrer" style={codeBtn}>
              <FaGithub size={16} style={{ marginRight: 8 }} /> Code
            </a>
            <span style={{ ...liveBtn, opacity: 0.5, cursor: "not-allowed" }}>
              <FiExternalLink size={16} style={{ marginRight: 8 }} /> Live
            </span>
          </div>
        </motion.div>

        {/* PROJECT 2 */}
        <motion.div whileHover={{ y: -10, boxShadow: hoverGlow }} style={card}>
          <div style={imageWrapper}>
            <img src={projectImage2} alt="" style={image} />
          </div>
          <h3 style={projectTitle}>Temple and Monument Detection Using YOLOv8</h3>
          <p style={desc}>
            Real-time object detection system using YOLOv8 for intelligent
            tourism and cultural heritage applications.
          </p>
          <div style={techRow}>
            <span style={tech}>Python</span>
            <span style={tech}>YOLOv8</span>
            <span style={tech}>OpenCV</span>
            <span style={tech}>Deep Learning</span>
            <span style={tech}>ML Models</span>
          </div>
          <div style={btnRow}>
            <a href="https://github.com/prabhavdeshpande89-hue/Temple-and-Monument-Detection-Using-YOLOv8" target="_blank" rel="noopener noreferrer" style={codeBtn}>
              <FaGithub size={16} style={{ marginRight: 8 }} /> Code
            </a>
            <span style={{ ...liveBtn, opacity: 0.5, cursor: "not-allowed"}}>
              <FiExternalLink size={16} style={{ marginRight: 8}} /> Live
            </span>
          </div>
        </motion.div>

        {/* PROJECT 3 */}
        <motion.div whileHover={{ y: -10, boxShadow: hoverGlow }} style={card}>
          <div style={imageWrapper}>
            <img src= {projectImage3} alt="" style={image} />
          </div>
          <h3 style={projectTitle}>Impact of Landscape Dynamics on Land Surface Temperature</h3>
          <p style={desc}>
            Satellite-based LST analysis using GIS and remote sensing to
            identify urban heat islands and climate-driven changes.
          </p>
          <div style={techRow}>
            <span style={tech}>MODIS & Landsat-8</span>
            <span style={tech}>GEE</span>
            <span style={tech}>QGIS</span>
            <span style={tech}>Python</span>
            <span style={tech}>Excel</span>
          </div>
          <div style={btnRow}>
            <a href="https://github.com/prabhavdeshpande89-hue/Impact-of-Landscape-Dynamics-on-Land-Surface-Temperature" target="_blank" rel="noopener noreferrer" style={codeBtn}>
              <FaGithub size={16} style={{ marginRight: 8 }} /> Code
            </a>
            <span style={{ ...liveBtn, opacity: 0.5, cursor: "not-allowed" }}>
              <FiExternalLink size={16} style={{ marginRight: 8 }} /> Live
            </span>
          </div>
        </motion.div>

        {/* PROJECT 4 */}
        <motion.div whileHover={{ y: -10, boxShadow: hoverGlow }} style={card}>
          <div style={imageWrapper}>
            <img src= {projectImage4} alt="" style={image} />
          </div>
          <h3 style={projectTitle}>Telecom Churn Analysis</h3>
          <p style={desc}>
            Exploratory data analysis to identify churn patterns and business
            insights using Python.
          </p>
          <div style={techRow}>
            <span style={tech}>Python</span>
            <span style={tech}>Pandas</span>
            <span style={tech}>NumPy</span>
            <span style={tech}>Matplotlib</span>
            <span style={tech}>Seaborn</span>
          </div>
          <div style={btnRow}>
            <a href="https://github.com/prabhavdeshpande89-hue/Telecom-Churn-Analysis" target="_blank" rel="noopener noreferrer" style={codeBtn}>
              <FaGithub size={16} style={{ marginRight: 8 }} /> Code
            </a>
            <span style={{ ...liveBtn, opacity: 0.5, cursor: "not-allowed" }}>
              <FiExternalLink size={16} style={{ marginRight: 8 }} /> Live
            </span>
          </div>
        </motion.div>

        {/* PROJECT 5 */}
        <motion.div whileHover={{ y: -10, boxShadow: hoverGlow }} style={card}>
          <div style={imageWrapper}>
            <img src= {projectImage5} alt="" style={image} />
          </div>
          <h3 style={projectTitle}>Cloud Based RBAC System</h3>
          <p style={desc}>
            Cloud-deployed RBAC system with JWT authentication and secure
            access control.
          </p>
          <div style={techRow}>
            <span style={tech}>Node.js</span>
            <span style={tech}>Express</span>
            <span style={tech}>PostgreSQL</span>
            <span style={tech}>AWS RDS</span>
            <span style={tech}>JWT</span>
          </div>
          <div style={btnRow}>
            <a href="https://github.com/prabhavdeshpande89-hue/cloud-rbac" target="_blank" rel="noopener noreferrer" style={codeBtn}>
              <FaGithub size={16} style={{ marginRight: 8 }} /> Code
            </a>
            <a href="https://cloud-rbac.vercel.app/" style={liveBtn}>
              <FiExternalLink size={16} style={{ marginRight: 8 }} /> Live
            </a>
          </div>
        </motion.div>

        {/* PROJECT 6 */}
        <motion.div whileHover={{ y: -10, boxShadow: hoverGlow }} style={card}>
          <div style={imageWrapper}>
            <img src= {projectImage6} alt="" style={image} />
          </div>
          <h3 style={projectTitle}>Real-Time Weather Analytics (Bangalore)</h3>
          <p style={desc}>
            Streaming pipeline using Kafka, PostgreSQL, and Superset for
            real-time weather analytics.
          </p>
          <div style={techRow}>
            <span style={tech}>Python</span>
            <span style={tech}>Kafka</span>
            <span style={tech}>PostgreSQL</span>
            <span style={tech}>Superset</span>
            <span style={tech}>OpenWeather API</span>
          </div>
          <div style={btnRow}>
            <a href="https://github.com/prabhavdeshpande89-hue/Real-time-weather-analytics-Banglore-" target="_blank" rel="noopener noreferrer" style={codeBtn}>
              <FaGithub size={16} style={{ marginRight: 8 }} /> Code
            </a>
            <span style={{ ...liveBtn, opacity: 0.5, cursor: "not-allowed"}}>
              <FiExternalLink size={16} style={{ marginRight: 8}} /> Live
            </span>
          </div>
        </motion.div>

        {/* PROJECT 7 */}
        <motion.div whileHover={{ y: -10, boxShadow: hoverGlow }} style={card}>
          <div style={imageWrapper}>
            <img src= {projectImage7} alt="" style={image} />
          </div>
          <h3 style={projectTitle}>Automated Web Testing using Selenium</h3>
          <p style={desc}>
            Selenium automation framework using Page Object Model (POM) to
            reduce manual testing effort.
          </p>
          <div style={techRow}>
            <span style={tech}>Python</span>
            <span style={tech}>Selenium</span>
            <span style={tech}>POM</span>
            <span style={tech}>ChromeDriver</span>
            <span style={tech}>PyCharm</span>
          </div>
          <div style={btnRow}>
            <a href="https://github.com/prabhavdeshpande89-hue/Selenium-Automation-Testing" target="_blank" rel="noopener noreferrer" style={codeBtn}>
              <FaGithub size={16} style={{ marginRight: 8 }} /> Code
            </a>
            <span style={{ ...liveBtn, opacity: 0.5, cursor: "not-allowed" }}>
              <FiExternalLink size={16} style={{ marginRight: 8 }} /> Live
            </span>
          </div>
        </motion.div>

        {/* PROJECT 8 */}
<motion.div
  whileHover={{ y: -10, boxShadow: hoverGlow }}
  style={card}
>
  <div style={imageWrapper}>
    <img
      src={projectImage8}
      alt="Personal Portfolio Website Preview"
      style={image}
    />
  </div>

  <h3 style={projectTitle}>
    Personal Portfolio Website
  </h3>

  <p style={desc}>
    Modern, fully responsive portfolio website built with React.js and
    Framer Motion, featuring smooth animations, reusable components,
    and optimized GitHub Pages deployment. Designed with clean UI/UX
    for seamless desktop and mobile experience.
  </p>

  <div style={techRow}>
    <span style={tech}>React.js</span>
    <span style={tech}>JavaScript</span>
    <span style={tech}>Framer Motion</span>
    <span style={tech}>CSS</span>
    <span style={tech}>GitHub Pages</span>
  </div>

  <div style={btnRow}>
    <a
      href="https://github.com/prabhavdeshpande89-hue/prabhav-portfolio"
      target="_blank"
      rel="noopener noreferrer"
      style={codeBtn}
    >
      <FaGithub size={16} style={{ marginRight: 8 }} />
      Code
    </a>

    <a
      href="https://prabhavdeshpande89-hue.github.io/prabhav-portfolio"
      target="_blank"
      rel="noopener noreferrer"
      style={liveBtn}
    >
      <FiExternalLink size={16} style={{ marginRight: 8 }} />
      Live
    </a>
  </div>
</motion.div>
      </div>
    </section>
  );
}

/* ================= STYLES ================= */

const hoverGlow = "0 0 60px rgba(34,211,238,0.35)";

const wrapper = {
  padding: "100px 10%",
  color: "#e5e7eb",
  position: "relative",
  overflow: "hidden",
};

const bgGlow = {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle at top, rgba(34,211,238,0.15), transparent 45%)",
  zIndex: -1,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "30px",
};

const card = {
  background: "rgba(2,6,23,0.75)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  borderRadius: "18px",
  padding: "18px",
  border: "1px solid rgba(34,211,238,0.25)",
  boxShadow: "0 0 30px rgba(34,211,238,0.15)",
  transition: "all 0.4s ease",
};

const imageWrapper = {
  width: "100%",
  height: "220px",
  borderRadius: "14px",
  overflow: "hidden",
  marginBottom: "16px",
  background: "rgba(15,23,42,0.6)",
  border: "1px solid rgba(34,211,238,0.15)",
};

const image = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const projectTitle = {
  fontSize: "18px",
  fontWeight: 800,
  marginBottom: "8px",
};

const desc = {
  fontSize: "14px",
  fontWeight: 600,
  color: "#94a3b8",
  marginBottom: "14px",
};

const techRow = {
  display: "flex",
  gap: "8px",
  flexWrap: "wrap",
  marginBottom: "16px",
};

const tech = {
  fontSize: "12px",
  padding: "4px 10px",
  borderRadius: "14px",
  background: "rgba(34,211,238,0.08)",
  border: "1px solid rgba(34,211,238,0.35)",
  color: "#22d3ee",
  fontWeight: 700,
  backdropFilter: "blur(6px)",
};

const btnRow = {
  display: "flex",
  gap: "12px",
};

const codeBtn = {
  flex: 1,
  textAlign: "center",
  padding: "8px",
  borderRadius: "10px",
  background: "rgba(2,6,23,0.6)",
  border: "1px solid rgba(34,211,238,0.45)",
  color: "#22d3ee",
  fontWeight: 700,
  textDecoration: "none",
  backdropFilter: "blur(8px)",
};

const liveBtn = {
  flex: 1,
  textAlign: "center",
  padding: "8px",
  borderRadius: "10px",
  background: "linear-gradient(135deg, #22d3ee, #38bdf8)",
  color: "#020617",
  fontWeight: 800,
  textDecoration: "none",
  boxShadow: "0 0 18px rgba(34,211,238,0.6)",
};

const title = {
  fontSize: "30px",
  fontWeight: 800,
  marginBottom: "10px",
};

const subtitle = {
  fontSize: "15px",
  fontWeight: 600,
  color: "#94a3b8",
  marginBottom: "40px",
};

export default Projects;
