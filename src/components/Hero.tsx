
const avatarInitials = ["A", "B", "C", "D", "+"];
const avatarColors = ["#B5C99A", "#C8D8A8", "#D8E4C0", "#E2EDD4", "#F0F4E8"];

export default function Hero() {
  return (
    <section className="hero container">
      {/* Trust Badge */}
      <div className="trust-badge">
        <div className="avatar-group">
          {avatarInitials.map((init, i) => (
            <div
              key={i}
              className="avatar"
              style={{ backgroundColor: avatarColors[i], zIndex: avatarInitials.length - i }}
            >
              {init}
            </div>
          ))}
        </div>
        <span className="trust-text">Trusted by thousands of healthy families</span>
      </div>

      {/* Hero Title */}
      <h1 className="hero-title">The Safest Way to Shop for Groceries</h1>

      {/* Subtitle */}
      <p className="hero-subtitle">
        Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family&apos;s Diet and Get Expert-Backed Food Insights
      </p>

      {/* CTA Button */}
      <a href="#" className="btn btn-primary btn-app">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        Download for iOS
      </a>

      {/* Phone Mockup */}
      <div className="mockup-container">
        {/* Left phone */}
        <div className="mockup-side left">
          <MockupPhoneContent opacity={0.5} />
        </div>

        {/* Center phone */}
        <div className="mockup-phone">
          <div className="mockup-notch" />
          <MockupPhoneContent opacity={1} />
        </div>

        {/* Right phone */}
        <div className="mockup-side right">
          <MockupPhoneContent opacity={0.5} />
        </div>
      </div>
    </section>
  );
}

function MockupPhoneContent({ opacity }: { opacity: number }) {
  return (
    <div className="mockup-content" style={{ opacity }}>
      {/* App top bar */}
      <div className="mockup-header">
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", width: "100%", padding: "0.25rem 0" }}>
          <div style={{ height: "10px", width: "10px", borderRadius: "50%", background: "#8CA73A" }} />
          <div style={{ height: "8px", flex: 1, borderRadius: "4px", background: "#E8ECE3" }} />
          <div style={{ height: "8px", width: "30px", borderRadius: "4px", background: "#E8ECE3" }} />
        </div>
      </div>

      {/* Search bar */}
      <div style={{ padding: "1rem", paddingBottom: "0.5rem" }}>
        <div style={{
          height: "40px",
          background: "white",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          paddingLeft: "1rem",
          gap: "0.5rem",
          border: "1px solid #E2E6DF"
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#849179" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <div style={{ height: "8px", width: "120px", borderRadius: "4px", background: "#E8ECE3" }} />
        </div>
      </div>

      {/* Category pills */}
      <div style={{ padding: "0 1rem 1rem", display: "flex", gap: "0.5rem" }}>
        {["All", "Snacks", "Drinks", "Dairy"].map((cat, i) => (
          <div key={cat} style={{
            padding: "0.25rem 0.75rem",
            borderRadius: "9999px",
            background: i === 0 ? "#273618" : "#E8ECE3",
            color: i === 0 ? "white" : "#5C6752",
            fontSize: "0.65rem",
            fontWeight: 500,
            whiteSpace: "nowrap"
          }}>{cat}</div>
        ))}
      </div>

      {/* Product grid */}
      <div className="mockup-grid">
        {[
          { name: "Granola Bar", score: 92, color: "#D4F0C0" },
          { name: "Almond Milk", score: 88, color: "#D0E8FF" },
          { name: "Greek Yogurt", score: 95, color: "#FFE8D0" },
          { name: "Orange Juice", score: 74, color: "#FFF3CC" },
        ].map((product) => (
          <div key={product.name} className="mockup-card">
            <div className="mockup-card-img" style={{ background: product.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{
                width: "40px", height: "60px",
                background: "white", borderRadius: "8px",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
              }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: product.color, marginBottom: "4px" }} />
                <div style={{ height: "4px", width: "20px", borderRadius: "2px", background: "#E8ECE3" }} />
                <div style={{ height: "4px", width: "16px", borderRadius: "2px", background: "#E8ECE3", marginTop: "2px" }} />
              </div>
            </div>
            <div className="mockup-card-body">
              <div className="skeleton-line" style={{ width: "80%" }} />
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <div style={{
                  width: "22px", height: "22px", borderRadius: "50%",
                  background: product.score > 85 ? "#8CA73A" : "#F5B400",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.55rem", fontWeight: 700, color: "white"
                }}>
                  {product.score}
                </div>
                <div className="skeleton-line short" style={{ marginBottom: 0 }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
