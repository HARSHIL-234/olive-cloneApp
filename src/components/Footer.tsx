"use client";

const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Solutions: ["For Families", "For Restaurants", "For Retailers", "Enterprise"],
  Resources: ["Blog", "Food Database", "Help Center", "API Docs"],
  Company: ["About", "Careers", "Press", "Contact"],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="nav-logo" style={{ marginBottom: "1rem" }}>
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                <ellipse cx="18" cy="20" rx="12" ry="13" fill="#8CA73A" />
                <path d="M18 7C18 7 14 3 10 5" stroke="#5C7A1F" strokeWidth="2" strokeLinecap="round" />
                <circle cx="13" cy="16" r="3" fill="white" fillOpacity="0.3" />
                <circle cx="11" cy="19" r="1.5" fill="white" fillOpacity="0.2" />
              </svg>
              <span style={{ color: "#8CA73A", fontWeight: 700, fontSize: "1.3rem" }}>olive</span>
            </div>
            <p className="footer-tagline">
              The Safest Way to Shop for Groceries. Trusted by thousands of healthy families worldwide.
            </p>
            <div className="footer-apps">
              <a href="#" className="app-badge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a href="#" className="app-badge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
                </svg>
                Google Play
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="footer-col">
              <h4 className="footer-col-title">{category}</h4>
              <ul className="footer-link-list">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">© 2024 Olive App, Inc. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
