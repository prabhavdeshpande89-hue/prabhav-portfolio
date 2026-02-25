import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <div style={footerWrapper}>
      <h2 style={footerTitle}>Connect with me</h2>

      <div style={iconRow}>
        <a href="https://github.com/prabhavdeshpande89-hue" style={iconBox}><FaGithub/></a>
        <a href="https://www.linkedin.com/in/prabhav-deshpande-90b184305/" style={iconBox}><FaLinkedinIn /></a>
        <a href="mailto:prabhavd2004@gmail.com" style={iconBox}><FaEnvelope/></a>
        <a href="https://wa.me/9481265714" style={iconBox}><FaWhatsapp /></a>
        <a href="https://instagram.com/__mr.road.hunter__" style={iconBox}><FaInstagram/></a>

      </div>

      <p style={footerText}>
        © {new Date().getFullYear()} Prabhav Deshpande — Built with React
      </p>
    </div>
  );
}

const footerWrapper = {
  mrginTop: "-30px",
  paddingBottom: "20px",
  textAlign: "center",
  color: "#e5e7eb",
};

const footerTitle = {
  fontSize: "24px",
  fontWeight: 800,
  marginBottom: "14px",
};

const iconRow = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginBottom: "16px",
};

const iconBox = {
  width: "58px",
  height: "58px",
  borderRadius: "50%",
  background: "#020617",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "26px",
  textDecoration: "none",
};

const footerText = {
  fontSize: "14px",
  color: "#9ca3af",
};

export default Footer;
