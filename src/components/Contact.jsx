import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

function Contact() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.heading}>
          Let’s Connect & Collaborate 💙
        </h1>

        <p style={styles.subText}>
          Whether it’s a new project, a collaboration, or just to say hi —
          I’d love to hear from you!
        </p>

        {/* Social Icons */}
        <div style={styles.iconRow}>
          <SocialIcon icon={<FaGithub />} link="https://github.com/prabhavdeshpande89-hue" />
          <SocialIcon icon={<FaLinkedinIn />} link="https://www.linkedin.com/in/prabhav-deshpande-90b184305/" />
          <SocialIcon icon={<FaEnvelope />} link="mailto:prabhavd2004@gmail.com" />
          <SocialIcon icon={<FaWhatsapp />} link="https://wa.me/9481265714" />
          <SocialIcon icon={<FaInstagram />} link="https://instagram.com/__mr.road.hunter__" />
        </div>

        {/* Contact Form */}
        <form style={styles.form}>
          <input style={styles.input} placeholder="Your Name" />
          <input style={styles.input} placeholder="Your Email or Phone" />
          <input style={styles.input} placeholder="Subject" />
          <textarea
            style={styles.textarea}
            placeholder="Your Message..."
            rows="5"
          />
          <button style={styles.button}>🚀 Send Message</button>
        </form>
      </div>
    </div>
  );
}

function SocialIcon({ icon, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" style={styles.icon}>
      {icon}
    </a>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #02141c, #000000)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
  },
  container: {
    width: "100%",
    maxWidth: "800px",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
  },
  heading: {
    fontSize: "42px",
    fontWeight: "600",
    color: "#00d9ff",
    marginBottom: "15px",
    textShadow: "0 0 15px rgba(0, 217, 255, 0.6)",
  },
  subText: {
    color: "#cfcfcf",
    marginBottom: "40px",
    lineHeight: "1.6",
  },
  iconRow: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "40px",
    flexWrap: "wrap",
  },
  icon: {
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    border: "2px solid #00d9ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    fontSize: "20px",
    transition: "0.3s ease",
    textDecoration: "none",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  input: {
    padding: "15px",
    borderRadius: "10px",
    border: "none",
    background: "rgba(255,255,255,0.05)",
    color: "#fff",
    outline: "none",
    fontSize: "14px",
  },
  textarea: {
    padding: "15px",
    borderRadius: "10px",
    border: "none",
    background: "rgba(255,255,255,0.05)",
    color: "#fff",
    outline: "none",
    fontSize: "14px",
  },
  button: {
    padding: "15px",
    borderRadius: "10px",
    border: "none",
    fontSize: "16px",
    fontWeight: "500",
    background: "linear-gradient(90deg, #00d9ff, #00ffa3)",
    color: "#000",
    cursor: "pointer",
    transition: "0.3s ease",
  },
};

export default Contact;