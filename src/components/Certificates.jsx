import { useState } from "react";

// TECH
import bigData from "../assets/certificates/tech_infosys_big_data_2025.jpg";
import powerBIviz from "../assets/certificates/tech_infosys_powerbi_data_visualization_2025.jpg";
import powerBIfund from "../assets/certificates/tech_infosys_powerbi_fundamentals_2025.jpg";
import biIntro from "../assets/certificates/tech_infosys_business_intelligence_intro_2025.jpg";
import cognifyz from "../assets/certificates/tech_cognifyz_web_dev_internship_2025.jpg";
import hex from "../assets/certificates/tech_hexsoftwares_web_development_internship_2025.jpg";
import cProg from "../assets/certificates/tech_simplilearn_c_programming_2025.jpg";
import sql from "../assets/certificates/tech_cuvette_sql_joins_micro_course_2025.jpg";

// OTHERS
import sebi from "../assets/certificates/other_sebi_investor_certification_2025.jpg";
import nism from "../assets/certificates/other_nism_financial_literacy_quiz_2025.jpg";
import cuApp from "../assets/certificates/other_chanakya_university_appreciation.jpg";
import cuTemple from "../assets/certificates/other_chanakya_university_temples_management_appreciation_2024.jpg";
import green from "../assets/certificates/other_green_campus_appreciation_2023.jpg";



function Certificates() {
  const [activeTab, setActiveTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

const certificates = [
  // 🧑‍💻 TECH
  {
    id: 1,
    title: "Web Development Internship",
    org: "Cognifyz Technologies",
    year: "2025",
    image: cognifyz,
    type: "tech",
  },
  {
    id: 2,
    title: "Web Development Virtual Internship",
    org: "Hex Softwares",
    year: "2025",
    image: hex,
    type: "tech",
  },
  {
    id: 3,
    title: "Big Data Analytics",
    org: "Infosys Springboard",
    year: "2025",
    image: bigData,
    type: "tech",
  },
  {
    id: 4,
    title: "Hands-On Data Visualization with Power BI",
    org: "Infosys Springboard",
    year: "2025",
    image: powerBIviz,
    type: "tech",
  },
  {
    id: 5,
    title: "Learning Microsoft Power BI",
    org: "Infosys Springboard",
    year: "2025",
    image: powerBIfund,
    type: "tech",
  },
  {
    id: 6,
    title: "Introduction to Business Intelligence",
    org: "Infosys Springboard",
    year: "2025",
    image: biIntro,
    type: "tech",
  },
  {
    id: 7,
    title: "C Programming Fundamentals",
    org: "Simplilearn SkillUp",
    year: "2025",
    image: cProg,
    type: "tech",
  },
  {
    id: 8,
    title: "SQL Joins – Micro Course",
    org: "Cuvette",
    year: "2025",
    image: sql,
    type: "tech",
  },

  // 🏅 OTHERS
  {
    id: 9,
    title: "Investor Certification Examination",
    org: "SEBI / NISM",
    year: "2025",
    image: sebi,
    type: "others",
  },
  {
    id: 10,
    title: "National Financial Literacy Quiz",
    org: "NISM",
    year: "2025",
    image: nism,
    type: "others",
  },
  {
    id: 11,
    title: "Certificate of Appreciation",
    org: "Chanakya University",
    year: "2023",
    image: cuApp,
    type: "others",
  },
  {
    id: 12,
    title: "Student Ambassador – Temples Management Conference",
    org: "Chanakya University",
    year: "2024",
    image: cuTemple,
    type: "others",
  },
  {
    id: 13,
    title: "Green Campus Campaign – Appreciation",
    org: "Green Campus Awards",
    year: "2023",
    image: green,
    type: "others",
  },
];


  return (
    <section style={styles.page}>
      <div style={styles.container}>
        {/* Header */}
        <h1 style={styles.heading}>
          Certificates <span>🏅</span>
        </h1>
        <p style={styles.subText}>
          Explore my certifications — technical & others.
        </p>

        {/* Tabs */}
        <div style={styles.tabs}>
          <button
            onClick={() => setActiveTab("tech")}
            style={{
              ...styles.tabBtn,
              background: activeTab === "tech" ? "#0ea5e9" : "#1f2933",
            }}
          >
            Tech
          </button>
          <button
            onClick={() => setActiveTab("others")}
            style={{
              ...styles.tabBtn,
              background: activeTab === "others" ? "#0ea5e9" : "#1f2933",
            }}
          >
            Others
          </button>
        </div>

        {/* Cards */}
        <div style={styles.grid}>
          {certificates
            .filter((c) => c.type === activeTab)
            .map((cert) => (
              <div key={cert.id} style={styles.card}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  style={styles.image}
                />

                <h3 style={styles.cardTitle}>{cert.title}</h3>
                <p style={styles.meta}>
                  {cert.org} • {cert.year}
                </p>

                <button
                  style={styles.viewBtn}
                  onClick={() => setSelectedCert(cert)}
                >
                  View
                </button>
              </div>
            ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedCert && (
        <div
          style={styles.modalOverlay}
          onClick={() => setSelectedCert(null)}
        >
          <div
            style={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              style={styles.modalImage}
            />
            <h3>{selectedCert.title}</h3>
            <p style={{ color: "#9ca3af", marginBottom: "16px" }}>
              {selectedCert.org} • {selectedCert.year}
            </p>

            <button
              style={styles.closeBtn}
              onClick={() => setSelectedCert(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;

/* ================= STYLES ================= */

const styles = {
  page: {
    marginTop: "40px",
    padding: "40px",
    color: "#e5e7eb",
  },
  container: {
    background: "linear-gradient(180deg, #0b0f1a, #020617)",
    borderRadius: "16px",
    padding: "40px",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  subText: {
    color: "#9ca3af",
    marginBottom: "25px",
  },
  tabs: {
    display: "flex",
    gap: "12px",
    marginBottom: "30px",
  },
  tabBtn: {
    border: "none",
    color: "white",
    padding: "8px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "#020617",
    borderRadius: "14px",
    padding: "18px",
    boxShadow: "0 0 0 1px rgba(255,255,255,0.05)",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "contain",
    background: "#020617",
    borderRadius: "10px",
    marginBottom: "14px",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "6px",
  },
  meta: {
    fontSize: "13px",
    color: "#9ca3af",
    marginBottom: "12px",
  },
  viewBtn: {
    background: "#0ea5e9",
    border: "none",
    color: "white",
    padding: "6px 14px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "13px",
  },

  /* MODAL STYLES */
  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },
  modal: {
    background: "#020617",
    padding: "24px",
    borderRadius: "14px",
    maxWidth: "800px",
    width: "90%",
    textAlign: "center",
  },
  modalImage: {
    width: "100%",
    maxHeight: "80vh",
    objectFit: "contain",
    background: "#020617",
    borderRadius: "10px",
    marginBottom: "16px",
  },
  closeBtn: {
    background: "#0ea5e9",
    border: "none",
    color: "white",
    padding: "8px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
  },
};
