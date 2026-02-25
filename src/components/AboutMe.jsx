import React from "react";

function AboutMe() {
  const styles = {
    wrapper: {
      backgroundColor: "#0b0f14",
      minHeight: "100vh",
      paddingBottom: "60px",
    },
    section: {
      padding: "60px 40px",
      maxWidth: "1000px",
      margin: "0 auto",
      fontFamily: "Poppins, sans-serif",
    },
    title: {
      color: "#00bfff",
      fontSize: "28px",
      marginBottom: "25px",
      fontWeight: "600",
    },
    card: {
      background:
        "linear-gradient(145deg, rgba(20,20,20,0.95), rgba(12,12,12,0.95))",
      padding: "32px",
      borderRadius: "20px",
      boxShadow: "0 0 35px rgba(0,191,255,0.08)",
      marginBottom: "50px",
    },
    text: {
      color: "#d1d5db",
      lineHeight: "1.8",
      fontSize: "16px",
      marginBottom: "18px",
    },
    highlight: {
      color: "#ffffff",
      fontWeight: "600",
    },
    accent: {
      color: "#00bfff",
      fontWeight: "600",
    },
    sectionSpacing: {
      marginTop: "60px",
    },
    eduCard: {
      background: "linear-gradient(145deg, #0f1b2d, #0c1625)",
      padding: "30px",
      borderRadius: "20px",
      border: "1px solid rgba(0,191,255,0.15)",
      boxShadow: "0 0 30px rgba(0,191,255,0.08)",
      marginBottom: "25px",
    },
    eduTitle: {
      color: "#00bfff",
      marginBottom: "10px",
      fontSize: "19px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontWeight: "600",
    },
    school: {
      fontWeight: "500",
      color: "#ffffff",
      marginBottom: "6px",
    },
    footer: {
      textAlign: "center",
      marginTop: "80px",
      color: "#9ca3af",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.wrapper}>
      <section style={styles.section}>

        {/* ================= ABOUT ME ================= */}
        <h2 style={styles.title}>About Me</h2>

        <div style={styles.card}>
          <p style={styles.text}>
            Hi, I’m <span style={styles.highlight}>Prabhav Deshpande</span>, a
            passionate Computer Applications student currently pursuing{" "}
            <span style={styles.highlight}>
              Bachelor of Computer Applications (BCA)
            </span>{" "}
            at{" "}
            <span style={styles.highlight}>
              Chanakya University, Bengaluru
            </span>.
          </p>

          <p style={styles.text}>
            I have a strong interest in{" "}
            <span style={styles.highlight}>Data Analysis</span>,{" "}
            <span style={styles.highlight}>Machine Learning</span>, and{" "}
            <span style={styles.highlight}>Cloud Computing</span>. I enjoy
            transforming raw data into meaningful insights and building scalable,
            practical solutions.
          </p>

          <p style={styles.text}>
            Skilled in
            <span style={styles.accent}>
              {" "}C/C++, Python, Java, JavaScript, HTML/CSS
            </span>
            , along with tools like
            <span style={styles.accent}>
              {" "}Git/GitHub, SQL, AWS, Power BI, Tableau, Linux
            </span>.
          </p>

          <p style={styles.text}>
            Currently maintaining a CGPA of{" "}
            <span style={styles.highlight}>7.9</span>, I am actively seeking
            opportunities to apply my technical knowledge and contribute to
            impactful projects.
          </p>
        </div>

        {/* ================= EDUCATION ================= */}
        <div style={styles.sectionSpacing}>
          <h2 style={styles.title}>Education</h2>

          <div style={styles.eduCard}>
            <h3 style={styles.eduTitle}>
              <span>🏛️</span>
              Bachelor of Computer Applications (BCA)
            </h3>

            <p style={styles.school}>
              Chanakya University — Bengaluru
            </p>

            <p style={styles.text}>
              Current CGPA: 7.9
            </p>

            <p style={styles.text}>
              7th Semester Completed | 2026 (Expected Graduation)
            </p>
          </div>
        </div>

        {/* ================= EXPERIENCE ================= */}
        <div style={styles.sectionSpacing}>
          <h2 style={styles.title}>Experience</h2>

          <div style={styles.eduCard}>
            <h3 style={styles.eduTitle}>
              <span>💼</span>
              App Admin Intern
            </h3>

            <p style={styles.school}>
              Daivbharathi | Dec 2025 – Present
            </p>

            <p style={styles.text}>
              Managing app content, backend configurations, and coordinating
              with the development team to ensure smooth platform operations.
            </p>
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div style={styles.footer}>
          © 2026 Prabhav Deshpande — Built with React
        </div>

      </section>
    </div>
  );
}

export default AboutMe;