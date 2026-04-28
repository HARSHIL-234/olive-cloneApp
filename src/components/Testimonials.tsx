"use client";

const testimonials = [
  {
    quote: "Olive has completely changed how I shop for groceries. I can't believe I used to buy products with such harmful additives without even knowing.",
    name: "Sarah M.",
    role: "Mother of 3",
    avatar: "SM",
    color: "#B5C99A",
    rating: 5,
  },
  {
    quote: "As a nutritionist, I recommend Olive to all my clients. The science behind the scoring system is solid and the UI is incredibly user-friendly.",
    name: "Dr. James K.",
    role: "Registered Dietitian",
    avatar: "JK",
    color: "#C8D8A8",
    rating: 5,
  },
  {
    quote: "My kids have food allergies and Olive makes it so much easier to shop confidently. The alert system is a lifesaver — literally.",
    name: "Priya R.",
    role: "Parent & Health Advocate",
    avatar: "PR",
    color: "#D0E4B8",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">Loved by healthy families</h2>
          <p className="section-subtitle">
            Join thousands of families who shop smarter and live healthier with Olive.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="stars">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#8CA73A">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-author">
                <div
                  className="avatar"
                  style={{ backgroundColor: t.color, width: "42px", height: "42px", fontSize: "0.85rem" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
