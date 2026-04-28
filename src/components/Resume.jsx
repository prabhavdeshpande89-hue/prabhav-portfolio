export default function Resume() {
  const styles = {
    page: {
      padding: "3rem",
      paddingTop: "6rem",
      color: "#eaeaea",
      background: "radial-gradient(circle at top, #0f2027, #000)",
      fontFamily: "Inter, sans-serif",
    },

    header: { marginBottom: "2rem" },
    title: { color: "#00d4ff", fontSize: "2.2rem", marginBottom: "0.3rem" },
    subtitle: { opacity: 0.7 },

    topGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "2rem",
      marginTop: "2rem",
    },

    card: {
      background: "rgba(255,255,255,0.05)",
      padding: "1.5rem",
      borderRadius: "14px",
      backdropFilter: "blur(12px)",
      boxShadow: "0 0 30px rgba(0,0,0,0.6)",
    },

    sectionTitle: { color: "#00d4ff", marginBottom: "0.8rem" },
    name: { fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.3rem" },
    role: { opacity: 0.8, marginBottom: "0.8rem" },
    info: { fontSize: "0.9rem", opacity: 0.85, marginBottom: "0.4rem" },

    list: { paddingLeft: "1.2rem", lineHeight: 1.8 },

    skillsWrap: { display: "flex", flexWrap: "wrap", gap: "10px" },
    skill: {
      padding: "6px 14px",
      background: "#111",
      borderRadius: "20px",
      fontSize: "0.85rem",
      border: "1px solid rgba(0,212,255,0.25)",
    },

    divider: { marginTop: "2rem" },

    pdfWrapper: {
      marginTop: "2rem",
    },

    pdf: {
      width: "100%",
      height: "700px",
      borderRadius: "14px",
      background: "#222",
      border: "none",
    },

    download: {
      display: "inline-block",
      marginTop: "1.5rem",
      padding: "12px 22px",
      background: "linear-gradient(135deg, #00d4ff, #007cf0)",
      color: "#000",
      borderRadius: "12px",
      fontWeight: "600",
      textDecoration: "none",
      marginRight: "10px",
    },
  };

  // ✅ Robust base path handling
  const base = import.meta.env.BASE_URL || "/";
  const resumePath = `${base}assets/Prabhav_Deshpande_Resume_V2.pdf?v=2`;

  return (
    <section style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>📄 Resume</h1>
        <p style={styles.subtitle}>A quick glance at my journey.</p>
      </div>

      {/* Profile + Summary */}
      <div style={styles.topGrid}>
        <div style={styles.card}>
          <h2 style={styles.name}>Prabhav Deshpande</h2>
          <p style={styles.role}>Data Analyst | Python | SQL | Power BI</p>
          <p style={styles.info}>📍 Hosapete, Karnataka</p>
          <p style={styles.info}>📧 prabhavd2004@gmail.com</p>
          <p style={styles.info}>📞 +91 9481265714</p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.sectionTitle}>Professional Summary</h3>
          <p>
            BCA undergraduate with strong foundation in data analysis, SQL, and Python.
            Experienced in analyzing datasets, building dashboards using Power BI, and
            deriving actionable insights for data-driven decision-making.
          </p>
        </div>
      </div>

      {/* Education */}
      <div style={{ ...styles.card, ...styles.divider }}>
        <h3 style={styles.sectionTitle}>🎓 Education</h3>
        <p><b>Bachelor of Computer Applications (BCA)</b></p>
        <p>Chanakya University, Bangalore</p>
        <p>CGPA: 8.0</p>
      </div>

      {/* Projects */}
      <div style={{ ...styles.card, ...styles.divider }}>
        <h3 style={styles.sectionTitle}>💼 Projects</h3>
        <ul style={styles.list}>
          <li>Airline Data Analysis Dashboard (Power BI)</li>
          <li>Land Surface Temperature Analysis (GIS + Python)</li>
          <li>Telecom Churn Analysis</li>
          <li>Cloud-Based RBAC System</li>
        </ul>
      </div>

      {/* Skills */}
      <div style={{ ...styles.card, ...styles.divider }}>
        <h3 style={styles.sectionTitle}>🛠 Skills</h3>
        <div style={styles.skillsWrap}>
          {[
            "Python (Pandas, NumPy)",
            "SQL",
            "Power BI",
            "Excel",
            "JavaScript",
            "Node.js",
            "Git",
            "Linux",
          ].map(skill => (
            <span key={skill} style={styles.skill}>{skill}</span>
          ))}
        </div>
      </div>

      {/* Resume PDF + Download */}
      <div style={styles.pdfWrapper}>
        <iframe
          src={resumePath}
          title="Resume PDF"
          style={styles.pdf}
        />

        <a href={resumePath} target="_blank" style={styles.download}>
          📄 View Resume
        </a>

        <a href={resumePath} download style={styles.download}>
          ⬇ Download Resume
        </a>
      </div>

    </section>
  );
}