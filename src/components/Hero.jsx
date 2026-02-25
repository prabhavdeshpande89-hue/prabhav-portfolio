import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import Footer from "./Footer";

function Hero() {
  return (
    <>
      <section
        style={{
          minHeight: "85vh",
          padding: "80px 10% 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "60px",
          alignItems: "center",
          color: "white",
        }}
      >
        {/* PROFILE */}
        <div
          style={{
            position: "relative",
            width: "260px",
            height: "260px",
            flexShrink: 0,
          }}
        >
          {/* ROTATING + FLOATING RING */}
          <motion.div
            animate={{
              rotate: 360,
              y: [0, -12, 0],
            }}
            transition={{
              rotate: { duration: 8, ease: "linear", repeat: Infinity },
              y: { duration: 4, ease: "easeInOut", repeat: Infinity },
            }}
            style={{
              position: "absolute",
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              border: "2px dashed #22d3ee",
            }}
          />

          {/* FLOATING IMAGE */}
          <motion.img
            src={profile}
            alt="profile"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              y: { duration: 4, ease: "easeInOut", repeat: Infinity },
            }}
            style={{
              width: "230px",
              height: "230px",
              borderRadius: "50%",
              objectFit: "cover",
              position: "absolute",
              top: "15px",
              left: "15px",
              zIndex: 2,
            }}
          />
        </div>

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* MINI BRAND */}
          <div style={brandWrapper}>
            <div style={brandIcon}>PD</div>
            <div>
              <div style={brandName}>Prabhav Deshpande</div>
              <div style={brandRole}>
                Data Analyst • Software Tester • Web Developer
              </div>
            </div>
          </div>

          {/* NAME */}
          <h1 style={{ fontSize: "32px", fontWeight: 800, color: "#e5e7eb" }}>
            Hi, I’m{" "}
            <span style={{ color: "#22d3ee", fontWeight: 900 }}>
              Prabhav Deshpande
            </span>
          </h1>

          {/* ROLES */}
          <p
            style={{
              color: "#94a3b8",
              marginTop: "6px",
              fontSize: "14px",
              display: "flex",
              gap: "6px",
              fontWeight: 700,
            }}
          >
            {["Data Analyst", "Software Tester", "Web Developer"].map(
              (role, index) => (
                <motion.span
                  key={role}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.6,
                  }}
                >
                  {role}
                  {index < 2 && <span style={{ color: "#22d3ee" }}> · </span>}
                </motion.span>
              )
            )}
          </p>

          {/* SKILLS */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "20px",
              flexWrap: "wrap",
            }}
          >
            {[
              "Web Developer",
              "Data Analyst",
              "Cloud Computing",
              "Fast Learner",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#22d3ee",
                  color: "#020617",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={pillStyle}
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* INFO CARDS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
              marginTop: "28px",
            }}
          >
            <div style={infoCard}>
              <div style={infoTitle}>📍 Location</div>
              <div style={infoText}>Bangalore, Karnataka, India</div>
            </div>

            <div style={infoCard}>
              <div style={infoTitle}>💼 Expertise</div>
              <div style={infoText}>AI/ML, Problem Solving, Developer</div>
            </div>

            <div style={infoCard}>
              <div style={infoTitle}>📧 Contact</div>
              <div style={infoText}>prabhavdeshpande89@gmail.com</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
    </>
  );
}

/* STYLES */
const brandWrapper = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "14px",
};

const brandIcon = {
  width: "42px",
  height: "42px",
  borderRadius: "8px",
  background: "#020617",
  color: "#22d3ee",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 900,
  fontSize: "18px",
};

const brandName = {
  fontSize: "15px",
  fontWeight: 800,
  color: "#e5e7eb",
};

const brandRole = {
  fontSize: "13px",
  fontWeight: 600,
  color: "#94a3b8",
};

const pillStyle = {
  border: "1px solid #22d3ee",
  padding: "6px 14px",
  borderRadius: "20px",
  fontSize: "14px",
  fontWeight: 700,
  color: "#e5e7eb",
};

const infoCard = {
  background: "#020617",
  padding: "18px 22px",
  borderRadius: "14px",
  color: "#e5e7eb",
};

const infoTitle = {
  fontSize: "14px",
  fontWeight: 800,
  marginBottom: "6px",
};

const infoText = {
  fontSize: "14px",
  fontWeight: 600,
  color: "#94a3b8",
};

export default Hero;
