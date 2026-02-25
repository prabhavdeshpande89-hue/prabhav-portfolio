import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Skills", path: "/skills" },
    { name: "Certificates", path: "/certificates" },
    { name: "Resume", path: "/resume" },
    { name: "About Me", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav style={navStyle}>
      {/* LEFT: Logo + Name */}
      <div style={leftStyle}>
        <div style={logoStyle}>PD</div>
        <div>
          <div style={nameStyle}>Prabhav Deshpande</div>
          <div style={subtitleStyle}>ML • AI • Developer</div>
        </div>
      </div>

      {/* CENTER: Menu */}
      <div style={centerStyle}>
        {menuItems.map((item) => {
          const active = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              style={{
                ...linkStyle,
                color: active ? "#22d3ee" : "#ffffff",
                borderBottom: active ? "2px solid #22d3ee" : "none",
              }}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* RIGHT: Spacer (keeps center aligned) */}
      <div style={{ width: "260px" }} />
    </nav>
  );
}

export default Navbar;

/* ================= STYLES ================= */

const navStyle = {
  display: "flex",
  alignItems: "center",
  padding: "14px 40px",
  background: "#020617",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 100,
};

const leftStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  width: "260px",
};

const logoStyle = {
  color: "#22d3ee",
  fontWeight: "800",
  fontSize: "22px",
};

const nameStyle = {
  color: "#ffffff",
  fontWeight: "700",
  fontSize: "14px",
};

const subtitleStyle = {
  color: "#9ca3af",
  fontSize: "12px",
};

const centerStyle = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  gap: "26px",
};

const linkStyle = {
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "700", // ✅ BOLD
  paddingBottom: "4px",
};
