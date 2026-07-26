import Link from "next/link";

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1.5rem",
  padding: "1rem 1.5rem",
  background: "#ffffff",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
};

const linkStyle = {
  textDecoration: "none",
  color: "#111",
  fontWeight: 600,
  padding: "0.5rem 0.75rem",
  borderRadius: "999px",
};

export default function Page() {
  return (
    <nav style={navStyle}>
      <Link href="/" style={{ ...linkStyle, fontSize: "1.1rem" }}>
        Home
      </Link>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Link href="/About" style={linkStyle}>
          About
        </Link>
        <Link href="/Contact" style={linkStyle}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
