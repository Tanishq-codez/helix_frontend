import React from "react";
import { Calendar, Filter, Globe, Search, Settings2, Star } from "lucide-react";

const Marketplace = () => {
  const lawyers = [
    {
      name: "Eleanor Vance, LL.M.",
      role: "Corporate M&A & Intellectual Property",
      rating: "4.9",
      reviews: "124 REVIEWS",
      price: "$180",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Marcus Kaine",
      role: "Digital Privacy & Data Compliance",
      rating: "4.7",
      reviews: "82 REVIEWS",
      price: "$120",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Samuel Whitlock",
      role: "Tax Litigation & Asset Protection",
      rating: "5.0",
      reviews: "215 REVIEWS",
      price: "$250",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Linda Amara",
      role: "Environmental Regulatory Law",
      rating: "4.8",
      reviews: "54 REVIEWS",
      price: "$165",
      image:
        "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Robert Jensen",
      role: "Commercial Real Estate & Leasing",
      rating: "4.6",
      reviews: "91 REVIEWS",
      price: "$140",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Sienna Chang",
      role: "Contractual Disputes & Risk Mitigation",
      rating: "4.9",
      reviews: "112 REVIEWS",
      price: "$175",
      image:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?q=80&w=300&auto=format&fit=crop",
    },
  ];

  return (
    <div className="dj-page dj-page-marketplace">
      <div className="dj-page-inner">
        <section className="dj-market-head">
          <div>
            <h1>Legal Marketplace</h1>
            <p>
              Connect with specialized legal consultants for verified analysis
              and transparent pricing.
            </p>
          </div>
          <div className="dj-verified-pill">VERIFIED PROS</div>
        </section>

        <section className="dj-market-filters">
          <div className="dj-search-box">
            <Search size={16} />
            <input
              placeholder="Search by name, firm, or keyword..."
              type="text"
            />
          </div>
          <button type="button" className="dj-filter-btn">
            <Filter size={14} /> Specialization
          </button>
          <button type="button" className="dj-filter-btn">
            <Calendar size={14} /> Availability
          </button>
          <button type="button" className="dj-primary-btn">
            Apply Filters
          </button>
        </section>

        <section className="dj-lawyer-grid">
          {lawyers.map((lawyer, index) => (
            <article key={lawyer.name} className="dj-lawyer-card">
              <div className="dj-lawyer-topline" />
              <div className="dj-lawyer-main">
                <div className="dj-lawyer-header">
                  <div className="dj-lawyer-photo-wrap">
                    <img src={lawyer.image} alt={lawyer.name} />
                    <span
                      className={`status-dot ${index === 4 ? "busy" : "online"}`}
                    />
                  </div>
                  <div className="dj-rating-box">
                    <div>
                      <Star size={12} fill="currentColor" /> {lawyer.rating}
                    </div>
                    <span>{lawyer.reviews}</span>
                  </div>
                </div>

                <h3>{lawyer.name}</h3>
                <p>{lawyer.role}</p>

                <div className="dj-lawyer-bottom">
                  <div>
                    <small>CONSULTATION</small>
                    <strong>{lawyer.price}</strong>
                    <span>/ 30 min</span>
                  </div>
                  <button type="button" className="dj-ghost-btn">
                    Book Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="dj-recommended-section">
          <div className="dj-reco-main">
            <span>AI-MATCHED SPECIALIST</span>
            <h2>Recommended for your recent M&amp;A Analysis</h2>
            <p>
              Based on your uploaded documents, Dr. Aris Thorne specializes in
              the specific cross-border regulatory hurdles identified in your
              last risk profile.
            </p>
            <div className="dj-reco-actions">
              <button type="button" className="dj-primary-btn">
                Schedule Priority Sync
              </button>
              <button type="button" className="dj-link-btn">
                View Deep Profile
              </button>
            </div>
          </div>

          <div className="dj-reco-side">
            <div className="dj-mini-stat">
              <small>TIER 1 EXPERT</small>
              <strong>98%</strong>
              <span>Relevance Match</span>
            </div>
            <div className="dj-mini-stat">
              <small>RESPONSE TIME</small>
              <strong>&lt; 2hrs</strong>
              <span>Average turnaround</span>
            </div>
            <div className="dj-profile-tile">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
                alt="Dr. Aris Thorne"
              />
              <div>
                <strong>Dr. Aris Thorne</strong>
                <p>Senior Counsel, Global Regulations</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="dj-market-footer">
          <div>
            <h3>Digital Jurist</h3>
            <p>
              The next-generation legal workspace. Bridging the gap between
              AI-powered data and human legal intuition.
            </p>
            <small>
              © 2024 Digital Jurist Technologies. All rights reserved.
            </small>
          </div>
          <div>
            <h4>PLATFORM</h4>
            <a href="#">Analyzer</a>
            <a href="#">Marketplace</a>
            <a href="#">API Docs</a>
          </div>
          <div>
            <h4>LAWYERS</h4>
            <a href="#">Join Network</a>
            <a href="#">Provider Portal</a>
            <a href="#">Best Practices</a>
          </div>
          <div>
            <h4>LEGAL</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Compliance</a>
            <a href="#">Terms of Service</a>
            <div className="dj-footer-icons">
              <Globe size={14} />
              <Settings2 size={14} />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Marketplace;
