"use client";

const steps = [
  {
    num: "01",
    title: "Download the App",
    desc: "Get Olive from the App Store or Google Play. It's free to get started.",
    color: "#D4F0C0",
  },
  {
    num: "02",
    title: "Scan Any Product",
    desc: "Open the scanner and point your camera at any barcode in the grocery store.",
    color: "#C8D8A8",
  },
  {
    num: "03",
    title: "Get Instant Insights",
    desc: "See the full ingredient breakdown and safety score in under a second.",
    color: "#B5C99A",
  },
  {
    num: "04",
    title: "Shop with Confidence",
    desc: "Discover healthier alternatives and build a shopping list your family will love.",
    color: "#A3BA8A",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">Start shopping healthier in 4 steps</h2>
          <p className="section-subtitle">
            Olive makes the transition to healthier eating effortless. No complicated setup, no subscriptions required to start.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <div key={i} className="step-card">
              <div className="step-num" style={{ background: step.color }}>{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
