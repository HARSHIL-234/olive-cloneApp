const navLinks = [
  { label: "Solutions", hasDropdown: true },
  { label: "Features", hasDropdown: false },
  { label: "Pricing", hasDropdown: false },
  { label: "Blog", hasDropdown: true },
  { label: "Restaurants", hasDropdown: false },
  { label: "Food", hasDropdown: true },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="#" className="nav-logo">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="18" cy="20" rx="12" ry="13" fill="#8CA73A" />
            <path d="M18 7C18 7 14 3 10 5" stroke="#5C7A1F" strokeWidth="2" strokeLinecap="round" />
            <circle cx="13" cy="16" r="3" fill="white" fillOpacity="0.3" />
            <circle cx="11" cy="19" r="1.5" fill="white" fillOpacity="0.2" />
          </svg>
          <span style={{ color: "#8CA73A", fontWeight: 700, fontSize: "1.5rem", letterSpacing: "-0.5px" }}>
            olive
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.label} href="#" className="nav-link">
              {link.label}
              {link.hasDropdown && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              )}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a href="#" className="btn btn-ghost" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "0.95rem" }}>
            Sign in
          </a>
          <a href="#" className="btn btn-primary" style={{ gap: "0.4rem" }}>
            Get Olive
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
